import { gql } from "@apollo/client";

export const SOLD_ITEMS = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
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

export const COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
