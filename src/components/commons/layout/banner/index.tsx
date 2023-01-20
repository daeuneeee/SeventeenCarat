import styled from "@emotion/styled";

import Slider from "react-slick";

const SlickBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  .slick-prev {
    left: -30px;
    /* z-index: 1; */
    background-color: #f8cacc;
    border-radius: 100%;
    /* display: none; */
    :hover {
      background-color: #8da4d0;
    }
  }
  .slick-next {
    right: -30px;
    /* z-index: 1; */
    background-color: #f8cacc;
    border-radius: 100%;
    :hover {
      background-color: #8da4d0;
    }
  }
  .slick-dots {
    bottom: 20px;
  }
`;

export default function LayoutBannerPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <SlickBox>
        <Slider {...settings}>
          <div>
            <img src="/seventeen1.jpeg" />
          </div>
          <div>
            <img src="/seventeen2.jpeg" />
          </div>
          <div>
            <img src="/seventeen3.jpeg" />
          </div>
          <div>
            <img src="/seventeen4.jpeg" />
          </div>
        </Slider>
      </SlickBox>
    </div>
  );
}
