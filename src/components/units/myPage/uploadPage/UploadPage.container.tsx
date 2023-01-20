import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import UploadUI from "./UploadPage.presenter";
import { SOLD_ITEMS } from "./UploadPage.queries";

export default function Upload() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(SOLD_ITEMS, {
    variables: { search: "", page: 1 },
  });
  return (
    <>
      <UploadUI data={data} />
    </>
  );
}
