import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import "react-quill/dist/quill.snow.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "../../board/write/BoardWrite.queries";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";
// import { useEffect } from "react";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("한줄요약을 입력해주세요"),
  contents: yup.string().required("상세설명을 입력해주세요"),
  price: yup
    .number()
    .required("가격을 입력해주세요")
    .typeError("숫자로 적어주세요"),
  // tags: yup.array().string().required("태그를 입력해주세요"),
  // address: yup.string().required("우편번호를 검색해주세요"),
});

export default function ProductWrite(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const [editImageUrls, setEditImageUrls] = useState(["", "", "", ""]);
  const [files, setFiles] = useState<File[] | undefined[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    // reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    // defaultValues: {
    //   name: props.data?.fetchUseditem.name,
    //   remarks: props.data?.fetchUseditem.remarks,
    //   price: props.data?.fetchUseditem.price,
    //   tags: props.data?.fetchUseditem.tags,
    //   contents: props.data?.fetchUseditem.contents,
    //   lat: props.data?.fetchUseditem.useditemAddress.lat,
    //   lng: props.data?.fetchUseditem.useditemAddress.lng,
    // },
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   const defaultValue = {};
  //   defaultValue.name = props.data?.fetchUseditem.name;
  //   defaultValue.remarks = props.data?.fetchUseditem.remarks;
  //   defaultValue.price = props.data?.fetchUseditem.price;
  //   defaultValue.tags = props.data?.fetchUseditem.tags;
  //   reset({ ...defaultValue });
  // }, []);
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

    // setEditImageUrls((prev) => {
    //   if (prev[0] === "") {
    //     prev[0] = data?.fetchUseditem.images?.[0];
    //   }
    //   if (prev[1] === "") {
    //     prev[1] = data?.fetchUseditem.images?.[1];
    //   }
    //   if (prev[2] === "") {
    //     prev[2] = data?.fetchUseditem.images?.[2];
    //   }
    //   if (prev[3] === "") {
    //     prev[3] = data?.fetchUseditem.images?.[3];
    //   }
    //   const newState = [...prev];
    //   return newState;
    // });
    // console.log(data?.fetchUseditem.images);
    setEditImageUrls(data?.fetchUseditem.images);
    // if (imageUrls[0] === "") {
    //   setImageUrls([data?.fetchUseditem.images[0],"","",""]);
    // }
    // if (imageUrls[1] === "") {
    //   return data?.fetchUseditem.images[1];
    // }
    // if (imageUrls[2] === "") {
    //   return data?.fetchUseditem.images[2];
    // }
    // if (imageUrls[3] === "") {
    //   return data?.fetchUseditem.images[3];
    // }
  }, [data]);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address) => {
    onToggleModal();
    setValue("useditemAddress.zipcode", address.zonecode);
    setValue("useditemAddress.address", address.address);
    setAddress(address.address);
    setZipCode(address.zonecode);

    // setZipCode(address.zoneCode);
  };

  const onClickRegister = async (data) => {
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

      // data.useditemAddress.lat = Number(data.useditemAddress.lat);
      // data.useditemAddress.lng = Number(data.useditemAddress.lng);

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
      await router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async (data) => {
    const fileDatas = [...editImageUrls];
    // console.log(fileDatas);

    try {
      const results = await Promise.all(
        files.map((el) => (el ? uploadFile({ variables: { file: el } }) : ""))
      );

      // const resultUrls = results.map((urlsMap) =>
      //   urlsMap ? urlsMap.data?.uploadFile.url : ""
      // );

      const updateDatas = results.map((el, index) => {
        return el ? el.data?.uploadFile.url : fileDatas[index];
      });

      // console.log(updateDatas);
      data.images = updateDatas;
      data.price = Number(data.price);
      data.tags = data.tags.join(",").split(",");
      console.log(data);

      // data.tags = data.tags.split("#");

      // data.useditemAddress.lat = Number(data.useditemAddress.lat);
      // data.useditemAddress.lng = Number(data.useditemAddress.lng);

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
      await router.push(`/products/${result.data.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickCancel = () => {
    void router.push(`/products/${router.query.productId}`);
  };

  const onChangeContents = (value) => {
    setValue("contents", value);
    void trigger("contents");
  };

  const onChangeFile = (index: number) => (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = (event) => {
      const tempUrls = [...imageUrls];
      tempUrls[index] = event.target.result;
      setImageUrls(tempUrls);

      const tempFiles = [...files];
      tempFiles[index] = file;
      setFiles(tempFiles);
    };
  };

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      setValue={setValue}
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
