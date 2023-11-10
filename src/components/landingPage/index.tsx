import React, { useEffect } from "react";
// import { Discount } from "../../DummyArray/Discount";
import {
  ImgDiv1,
  MainContainer,
  Div,
  ArrowRight,
  NameHolder,
  PriceDiv,
  Price,
  PriceHolder,
  CardHolder,
  ArrowLeft,
  CardHolderFilter,
  FlexWrapper,
  AllNameHolder,
} from "./subComponent";
import { Img } from "../navBar/styledComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { AllDataApi } from "../../redux/MainApi/api";
// import { Circles } from "react-loader-spinner";
import ReactStars from "react-rating-star-with-type";
import { Link } from "react-router-dom";
import { ViewProduct } from "../../redux/MainApi/action";

function LandingPage() {


  const { AllDataInOne } = useSelector((state: RootState) => ({
    AllDataInOne: state.AllDataInOneApi.LoadData,
    // isLoading: state.AllDataInOneApi.isLoading,
  }));

  const dispatchData = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchData(
      AllDataApi({
        Limit: "",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const arr = AllDataInOne;
  const unique = arr.filter(
    (obj, index) =>
      arr.findIndex((item) => item.category === obj.category) === index
  );
  let FilterName = unique;

  const dispatch = useDispatch()
const HandleClick = (ids:any) =>{
    const newData = AllDataInOne.filter((data: any) => data.id=== ids);
    dispatch(ViewProduct(newData))
}

  return (
    <MainContainer>
      <AllNameHolder>
        <h3>Tranding Deals</h3>
      </AllNameHolder>
      <Slider {...settings}>
        {AllDataInOne.map((e: any, index: any) => (
          <Link to={"/viewProduct"}>
          <CardHolder onClick={() =>HandleClick(e.id)}>
            <Div key={index}>
              <NameHolder>{e.title}</NameHolder>
              <ImgDiv1>
                <Img src={e.image} alt="" />
              </ImgDiv1>
              <PriceDiv>
                <PriceHolder>
                  $<Price>{e.price}</Price>00
                </PriceHolder>
                <h4>
                  <ReactStars
                    value={e.rating.rate}
                    activeColors={["#FFCE00"]}
                  />
                </h4>
                <h4>({e.rating.count})</h4>
              </PriceDiv>
            </Div>
          </CardHolder>
          </Link>
        ))}
      </Slider>
      {FilterName.map((i: any, index: any) => (
        <div>
          <AllNameHolder key={index}>
            <h4>{i.category[0].toUpperCase() + i.category.slice(1)}</h4></AllNameHolder>
          <FlexWrapper>
            {AllDataInOne.map((e: any, index: any) => (
             <div>
                {i.category === e.category ? (
                   <Link to={"/viewProduct"}>
                  <CardHolderFilter onClick={() =>HandleClick(e.id)}>
                    <Div key={index}>
                      <NameHolder>{e.title}</NameHolder>
                      <ImgDiv1>
                        <Img src={e.image} alt="" />
                      </ImgDiv1>
                      <PriceDiv>
                        <PriceHolder>
                          $<Price>{e.price}</Price>00
                        </PriceHolder>
                        <h4>
                          <ReactStars
                            value={e.rating.rate}
                            activeColors={["#FFCE00"]}
                          />
                        </h4>
                        <h4>({e.rating.count})</h4>
                      </PriceDiv>
                    </Div>
                  </CardHolderFilter>
                  </Link>
                ) : (
                  ""
                )}
             </div>
            ))}
             </FlexWrapper>
        </div>
      ))}
    </MainContainer>
  );
}

export default LandingPage;
