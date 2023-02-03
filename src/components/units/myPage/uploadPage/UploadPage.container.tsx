import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import UploadUI from "./UploadPage.presenter";
import { COUNT_I_SOLD, SOLD_ITEMS } from "./UploadPage.queries";

export default function Upload() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(SOLD_ITEMS, {
    variables: { search: "", page: 1 },
  });

  const { data: countISold } =
    useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(COUNT_I_SOLD);

  return (
    <>
      <UploadUI
        data={data}
        refetch={refetch}
        count={countISold?.fetchUseditemsCountISold}
      />
    </>
  );
}
