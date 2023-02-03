import styled from "@emotion/styled";

const Section = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #d2d2d2;
`;

const Wrapper = styled.section`
  width: 1200px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.strong`
  font-size: 16px;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Content = styled.span`
  font-size: 14px;
  color: #999;
`;

export default function LayoutFooterPage() {
  return (
    <Section>
      <Wrapper>
        <Title>(주)세븐틴캐럿</Title>
        <ContentsBox>
          <Content>주소: 서울특별시 구로구 디지털로 300</Content>
          <Content>|</Content>
          <Content>대표: 한성수, 김캐럿</Content>
          <Content>|</Content>
          <Content>개인정보보호관리자: 없음</Content>
        </ContentsBox>
        <ContentsBox>
          <Content>사업자등록번호: 123-12-12345</Content>
          <Content>|</Content>
          <Content>
            대표번호: 2015 - 0526 (10:00~17:00 / 점심시간 13:00~14:00) (주말 및
            공휴일 휴무)
          </Content>
          <Content>|</Content>
          <Content>대표이메일 : seventeen.carat.xxx</Content>
        </ContentsBox>
        <ContentsBox>
          <Content>
            본페이지는 포트폴리오용으로 제작되었으며, 상업적인 목적이 없습니다.
          </Content>
        </ContentsBox>
      </Wrapper>
    </Section>
  );
}
