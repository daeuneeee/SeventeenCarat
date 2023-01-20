import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import BoughtUI from "./BoughtPage.presenter";
import { BOUGHT_ITEMS } from "./BoughtPage.queries";

export default function Bought() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(BOUGHT_ITEMS, {
    variables: { search: "", page: 1 },
  });

  return (
    <>
      <BoughtUI data={data} />
    </>
  );
}
