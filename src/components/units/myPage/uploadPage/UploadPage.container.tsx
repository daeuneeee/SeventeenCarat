import { useQuery } from "@apollo/client";
import UploadUI from "./UploadPage.presenter";
import { SOLD_ITEMS } from "./UploadPage.queries";

export default function Upload() {
  const { data } = useQuery(SOLD_ITEMS, {
    variables: { search: "", page: 1 },
  });
  return (
    <>
      <UploadUI data={data} />
    </>
  );
}
