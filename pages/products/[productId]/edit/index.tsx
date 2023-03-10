import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { FETCH_USED_ITEM } from "../../../../src/components/units/product/detail/ProductDetail.queries";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  return <ProductWrite isEdit={true} data={data} />;
}
