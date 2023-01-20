import { useQuery } from "@apollo/client";
import BoughtUI from "./BoughtPage.presenter";
import { BOUGHT_ITEMS } from "./BoughtPage.queries";

export default function Bought() {
  const { data } = useQuery(BOUGHT_ITEMS, {
    variables: { search: "", page: 1 },
  });

  return (
    <>
      <BoughtUI data={data} />
    </>
  );
}
