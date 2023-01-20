import { MouseEvent, useState } from "react";
import Paginations01UI from "./Pagenations01.presenter";
import { IPaginations01Props } from "./Pagenations01.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(0);

  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setIsActive(Number(event.target.value));
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
    setIsActive(0);
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
    setIsActive(0);
  };

  return (
    <Paginations01UI
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
      isActive={isActive}
    />
  );
}
