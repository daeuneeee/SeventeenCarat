import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Script from "next/script";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isPointChargingState } from "../../../commons/store";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../units/layout/header/LayoutHeader.queries";
import { useAuth } from "../hooks/useAuth";

const CHARGE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointChargingPage() {
  useAuth();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [point, setPoint] = useState(0);
  const [isPointCharging, setIsPointCharging] =
    useRecoilState(isPointChargingState);
  const { register, handleSubmit } = useForm<{ point: string }>();

  const [chargePoint] =
    useMutation<Pick<IMutation, "createPointTransactionOfLoading">>(
      CHARGE_POINT
    );

  const onClickWrapper = () => {
    setIsPointCharging((prev) => !prev);
  };

  const onChangePoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setPoint(Number(event.target.value));
  };

  const onClickCharge = (data: { point: string }) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: "포인트충전",
        amount: data.point,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          await chargePoint({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
          });
          // 결제 성공 시 로직,
          setIsPointCharging((prev) => !prev);
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      {/* jQuery */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* iamport.payment.js */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      {isPointCharging && <Wrapper onClick={onClickWrapper}></Wrapper>}
      <ChargingModal>
        <ChargingDiv>
          <Title>포인트 충전</Title>
          <UnderLine></UnderLine>
          <ChargeBox onSubmit={handleSubmit(onClickCharge)}>
            <Select {...register("point")} onChange={onChangePoint}>
              <option value={""}>선택하세요</option>
              <option>100</option>
              <option>5000</option>
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
              <option>50000</option>
            </Select>
            <ChargeBtn>충전하기</ChargeBtn>
          </ChargeBox>
          <AfterCharging>
            충전 후 포인트:{" "}
            {String(
              Number(data?.fetchUserLoggedIn.userPoint?.amount) + Number(point)
            ).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}{" "}
            P
          </AfterCharging>
        </ChargingDiv>
      </ChargingModal>
    </>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 9999;
`;

export const ChargingModal = styled.div`
  width: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  z-index: 9999;
  padding: 40px 20px;
`;

export const ChargingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 3.8rem;
`;

export const UnderLine = styled.div`
  width: 80%;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #f8cacc, #8da4d0) 1;
  margin-top: 20px;
`;

export const ChargeBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
`;

export const Select = styled.select`
  font-size: 1.8rem;
  width: 32%;
`;

export const ChargeBtn = styled.button`
  font-size: 1.8rem;
`;

export const AfterCharging = styled.span`
  font-size: 1.6rem;
`;
