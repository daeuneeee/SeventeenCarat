import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ProductWriteUI from "./ProductWrite.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ProductWrite.queries";
import "react-quill/dist/quill.snow.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";
import { IAddress, IData, IProductWriteProps } from "./ProductWrite.types";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("한줄요약을 입력해주세요"),
  contents: yup.string().required("상세설명을 입력해주세요"),
  price: yup
    .number()
    .required("가격을 입력해주세요")
    .typeError("숫자로 적어주세요"),
});

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [editImageUrls, setEditImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("name", data?.fetchUseditem.name);
    setValue("remarks", data?.fetchUseditem.remarks);
    setValue("price", data?.fetchUseditem.price);
    setValue("contents", data?.fetchUseditem.contents);
    setValue("tags", data?.fetchUseditem.tags);
    setValue(
      "useditemAddress.addressDetail",
      data?.fetchUseditem.useditemAddress.addressDetail
    );
    setValue(
      "useditemAddress.address",
      data?.fetchUseditem.useditemAddress.address
    );

    setValue(
      "useditemAddress.zipcode",
      data?.fetchUseditem.useditemAddress.zipcode
    );

    setEditImageUrls(data?.fetchUseditem.images);
  }, [data]);
  const [createUsedItem] =
    useMutation<Pick<IMutation, "createUseditem">>(CREATE_USED_ITEM);
  const [updateUsedItem] =
    useMutation<Pick<IMutation, "updateUseditem">>(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: IAddress) => {
    onToggleModal();
    setValue("useditemAddress.zipcode", address.zonecode);
    setValue("useditemAddress.address", address.address);
    setAddress(address.address);
    setZipCode(address.zonecode);
  };

  const onClickRegister = async (data: IData) => {
    console.log(data);
    try {
      const results = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = results.map((urlsMap) =>
        urlsMap ? urlsMap.data?.uploadFile.url : ""
      );
      data.price = Number(data.price);
      data.images = resultUrls;
      data.tags = data.tags.split("#");
      data.tags.shift();

      const result = await createUsedItem({
        variables: {
          createUseditemInput: data,
        },
        update(cache) {
          cache.modify({
            fields: {
              fetchUseditems: () => {},
            },
          });
        },
      });
      await router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async (data: IData) => {
    const fileDatas = [...editImageUrls];

    try {
      const results = await Promise.all(
        files.map((el) => (el ? uploadFile({ variables: { file: el } }) : ""))
      );

      const updateDatas = results.map((el, index) => {
        return el ? el.data?.uploadFile.url : fileDatas[index];
      });

      data.images = updateDatas;
      data.price = Number(data.price);
      data.tags = data.tags.split("#");
      console.log(data);

      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: data,
          useditemId: router.query.productId,
        },
        update(cache) {
          cache.modify({
            fields: {
              fetchUseditems: () => {},
            },
          });
        },
      });
      await router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickCancel = () => {
    void router.push(`/products/${router.query.productId}`);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value);
    void trigger("contents");
  };

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file === null) return;
      const fileReader = new FileReader();

      if (file) fileReader.readAsDataURL(file);

      fileReader.onload = (event) => {
        const tempUrls = [...imageUrls];

        tempUrls[index] = String(event.target?.result);
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;

        setFiles(tempFiles);
      };
    };

  console.log(errors);

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      onClickCancel={onClickCancel}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
      errors={errors}
      isValid={isValid}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      handleComplete={handleComplete}
      address={address}
      zipCode={zipCode}
      onChangeFile={onChangeFile}
      imageUrls={imageUrls}
      editImageUrls={editImageUrls}
      onClickUpdate={onClickUpdate}
    />
  );
}
