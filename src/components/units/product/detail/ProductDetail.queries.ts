import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        #     createdAt
        #     updatedAt
        #     deletedAt
      }
      #   buyer{
      #     _id
      #     email
      #     name
      #     picture
      #     userPoint
      #     createdAt
      #     updatedAt
      #     deletedAt
      #   }
      seller {
        _id
        #     email
        name
        #     picture
        #     userPoint
        #     createdAt
        #     updatedAt
        #     deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      # useditem {
      #   _id
      #   name
      # }
      user {
        _id
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const PICKED_ITEM = gql`
  mutation ($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const BUYING_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      buyer {
        _id
        # name
      }
      seller {
        _id
        name
      }
    }
  }
`;
