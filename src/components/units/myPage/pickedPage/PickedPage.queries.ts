import { gql } from "@apollo/client";

export const PICKED_ITEM_LIST = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        _id
        name
      }
    }
  }
`;
