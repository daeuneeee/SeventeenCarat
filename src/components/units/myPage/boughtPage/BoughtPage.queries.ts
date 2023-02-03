import { gql } from "@apollo/client";

export const BOUGHT_ITEMS = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
      pickedCount
      seller {
        _id
        name
      }
      createdAt
    }
  }
`;

export const COUNT_I_BOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;
