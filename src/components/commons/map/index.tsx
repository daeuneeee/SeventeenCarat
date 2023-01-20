import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mapLatLngState } from "../../../commons/store";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Maps({ setValue, data, isEdit }) {
  const [latLng, setLatLng] = useRecoilState(mapLatLngState);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${String(
      process.env.NEXT_PUBLIC_API_KEY
    )}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            isEdit ? data?.fetchUseditem.useditemAddress.lat : 33.450701,
            isEdit ? data?.fetchUseditem.useditemAddress.lng : 126.570667
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            setLatLng(latlng);
            setValue("useditemAddress.lat", latlng.Ma);
            setValue("useditemAddress.lng", latlng.La);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}
