import styled from "@emotion/styled";

export const PageListBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const PageListIcon = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
`;

export const PageListNumber = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: #4f4f4f;
  cursor: pointer;
  &.on {
    color: #f8cacc;
  }
`;
