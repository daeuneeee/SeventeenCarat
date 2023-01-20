import * as S from "./Pagenations01.styles";
import { IPaginations01UIProps } from "./Pagenations01.types";
export default function Paginations01UI({
  onClickPage,
  onClickPrev,
  onClickNext,
  startPage,
  lastPage,
  isActive,
}: IPaginations01UIProps) {
  return (
    <S.PageListBox>
      <S.PageListIcon onClick={onClickPrev}>{`<`}</S.PageListIcon>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <S.PageListNumber
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              value={index}
              className={isActive === index ? "on" : ""}
            >
              {index + startPage}
            </S.PageListNumber>
          )
      )}
      <S.PageListIcon onClick={onClickNext}>{`>`}</S.PageListIcon>
    </S.PageListBox>
  );
}
