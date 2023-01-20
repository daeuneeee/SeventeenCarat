import { useQuery } from "@apollo/client";
import PickedUI from "./PickedPage.presenter";
import { PICKED_ITEM_LIST } from "./PickedPage.queries";

export default function Picked() {
  const { data } = useQuery(PICKED_ITEM_LIST, {
    variables: { search: "", page: 1 },
  });

  return (
    <>
      <PickedUI data={data} />
    </>
  );
}
