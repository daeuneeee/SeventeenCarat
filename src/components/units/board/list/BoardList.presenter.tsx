import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import * as S from "./BoardList.styles";
import PenSvg from "../../../commons/svg/pen";
import LikeSvg from "../../../commons/svg/like";
import { IBoardListUIProps } from "./BoardList.types";
import { DatePicker, Space } from "antd";
import styled from "@emotion/styled";
import Paginations01 from "../../../commons/paginations/01/Pagenations01.container";
import { v4 as uuidV4 } from "uuid";
import { IBoard } from "../../../../commons/types/generated/types";
import VisitedProducts from "../../../commons/vistedProducts";

const { RangePicker } = DatePicker;

const RangePickerStyle = styled(RangePicker)`
  border: none;
  :focus-within {
    box-shadow: none;
  }
`;

export default function BoardListUI({
  data,
  onClickMoveToRegister,
  result,
  refetch,
  count,
  onClickSearch,
  onChangeSearch,
  keyword,
}: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>베스트 게시글</S.Title>
        <S.Best>
          {result?.fetchBoardsOfTheBest.map((el: IBoard) => (
            <Link href={`boards/${el._id}`} key={el._id}>
              <S.BestBox>
                {el.images?.[0] ? (
                  <S.BestBoxImg
                    className="bestBoxImg"
                    style={{
                      backgroundImage:
                        `url(https://storage.googleapis.com/${el.images[0]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  ></S.BestBoxImg>
                ) : (
                  <S.BestBoxImg className="bestBoxImg">
                    <S.ImgSpan>NO IMAGE</S.ImgSpan>
                  </S.BestBoxImg>
                )}

                <S.BestBoxContent>
                  <S.BestBoxTitle>{el.title}</S.BestBoxTitle>
                  <S.BestBoxBody>
                    <S.BestBoxInfo>
                      <S.BestBoxUser>
                        <S.BestBoxUserImg src="/profile.png" />
                        <S.BestBoxUserName>{el.writer}</S.BestBoxUserName>
                      </S.BestBoxUser>
                      <S.BestBoxDate>
                        Date: {getDate(el.updatedAt)}
                      </S.BestBoxDate>
                    </S.BestBoxInfo>
                    <S.BestBoxLike>
                      <S.BestBoxLikeImg>
                        <LikeSvg></LikeSvg>
                      </S.BestBoxLikeImg>
                      <S.BestBoxLikeCount>{el.likeCount}</S.BestBoxLikeCount>
                    </S.BestBoxLike>
                  </S.BestBoxBody>
                </S.BestBoxContent>
              </S.BestBox>
            </Link>
          ))}
        </S.Best>
      </S.Header>
      <S.Body>
        <S.BodyTop>
          <S.BodyTitle
            placeholder="제목을 검색해주세요."
            onChange={onChangeSearch}
          />
          <S.BodyDateBox>
            <Space direction="vertical" size={12}>
              <RangePickerStyle />
            </Space>
          </S.BodyDateBox>
          <S.BodySearch onClick={onClickSearch}>검색하기</S.BodySearch>
        </S.BodyTop>
        <S.BodyListBox>
          <S.BodyList>
            <S.ListNumberName>번호</S.ListNumberName>
            <S.ListTitleName>제목</S.ListTitleName>
            <S.ListWriterName>작성자</S.ListWriterName>
            <S.ListDateName>날짜</S.ListDateName>
          </S.BodyList>
          {data?.fetchBoards.map((el, index) => (
            <S.BodyContentsList key={el._id}>
              <S.ListNumber>{index + 1}</S.ListNumber>
              <Link href={`boards/${el._id}`}>
                <S.ListTitle>
                  {el.title
                    .replaceAll(keyword, `!@#@${keyword}!@#@`)
                    .split("!@#@")
                    .map((word) => (
                      <span
                        key={uuidV4()}
                        style={{
                          color: word === keyword ? "#F8CACC" : "",
                        }}
                      >
                        {word}
                      </span>
                    ))}
                </S.ListTitle>
              </Link>
              <S.ListWriter>{el.writer}</S.ListWriter>
              <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
            </S.BodyContentsList>
          ))}
        </S.BodyListBox>
      </S.Body>
      <S.Footer>
        <S.EmptyBox></S.EmptyBox>
        <Paginations01 refetch={refetch} count={count} />
        <S.RegisterBtn onClick={onClickMoveToRegister}>
          <PenSvg></PenSvg>
          게시물 등록하기
        </S.RegisterBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
