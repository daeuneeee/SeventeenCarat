import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import PickedUI from "./PickedPage.presenter";
import { COUNT_I_PICKED, PICKED_ITEM_LIST } from "./PickedPage.queries";

export default function Picked() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(PICKED_ITEM_LIST, {
    variables: { search: "", page: 1 },
  });

  const { data: countIPicked } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(COUNT_I_PICKED);

  return (
    <>
      <PickedUI
        data={data}
        refetch={refetch}
        count={countIPicked?.fetchUseditemsCountIPicked}
      />
    </>
  );
}
