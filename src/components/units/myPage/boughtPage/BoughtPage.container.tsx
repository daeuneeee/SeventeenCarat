import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import BoughtUI from "./BoughtPage.presenter";
import { BOUGHT_ITEMS, COUNT_I_BOUGHT } from "./BoughtPage.queries";

export default function Bought() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(BOUGHT_ITEMS, {
    variables: { search: "", page: 1 },
  });

  const { data: countIBought } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIBought">>(COUNT_I_BOUGHT);

  return (
    <>
      <BoughtUI
        data={data}
        refetch={refetch}
        count={countIBought?.fetchUseditemsCountIBought}
      />
    </>
  );
}
