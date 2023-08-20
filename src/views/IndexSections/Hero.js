/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useRef} from "react";
import "../../assets/css/styles.css"
import Wedding_1 from "../../assets/img/wedding_1.png";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


function Hero() {

  return (
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
      >
          <SwiperSlide>
              <Card />
          </SwiperSlide>
          <SwiperSlide>
              <Card1 />
          </SwiperSlide>
          <SwiperSlide>
              <Card2 />
          </SwiperSlide>
      </Swiper>
  );
}

function Card({ onClick, selected, title, itemId }) {
    return (
        <div className="card container">
            <img src={Wedding_1} alt="표지"/>
        </div>
    )
}

function Card1({ onClick, selected, title, itemId }) {
    const {Kakao} = window;
    const realUrl = "https://sisteraram.github.io";
    const wedding = {Wedding_1};

    useEffect(() => {
        //카카오 공유하기 기능 setting

        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('f5805a1aeb1ada33b0b17c8eeec4d185');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    });

    //카톡 공유하기
    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'location',
            address: '서울 중구 청파로 464 3층 채플웨딩홀 아벤티움 ',
            addressTitle: '채플웨딩홀 아벤티움',
            content: {
                title: '아람❤인재 결혼합니다',
                description: '11월 25일 (토) 오후 2시\n채플웨딩홀 아벤티움',
                imageUrl: realUrl + wedding.Wedding_1,
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '모바일청첩장',
                    link: {
                        mobileWebUrl: realUrl,
                    },
                }
            ],
        });
    }
    return (
        <div className="card container1">
            <div className="text-center card1">
                <div className="message">
                    예쁜 예감이 들었다. <br/>
                    우리는 언제나 손을 잡고 있게 될 것이다. <br/><br/>

                    이이체, &#60; 연인 &#62; 中 - <br/><br/>

                    함께하는 다섯번 째 가을, <br/>
                    어제의 너와 내가 오늘 우리가 되어 <br/>
                    두 사람이 한 길을 함께 걸어가려고 합니다. <br/>
                    저희의 첫 디딤을 따뜻한 사랑으로 축복해주세요.

                    <div className="name">
                        홍원기&#183;류영진 의 &#160;&#160;&#160;딸 아람 <br/>
                        황선익&#183;이미정 의 아들 인재
                    </div>

                    <button onClick={() => {
                        shareKakao()
                    }}>공유하기</button>
                    {/*<div className="location">*/}
                    {/*    2023년 11월 25일 토요일 오후 2시 <br/>*/}
                    {/*    채플웨딩홀 아벤티움*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

function Card2({ onClick, selected, title, itemId }) {
    const mapElement = useRef(null);

    useEffect(() => {
        //카카오 공유하기 기능 setting
        const { Kakao } = window;
        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('f5805a1aeb1ada33b0b17c8eeec4d185');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());


        const { naver } = window;
        if (!mapElement.current || !naver) return;
        let lat = 0;
        let lng = 0;

        // naver.maps.Service.geocode({
        //     query: '청파로 464'
        // }, function(status, response) {
        //     if (status !== naver.maps.Service.Status.OK) {
        //         return alert('Something wrong!');
        //     }
        //
        //     var result = response.v2, // 검색 결과의 컨테이너
        //         items = result.addresses; // 검색 결과의 배열
        //
        //
        //     console.log("result", result)
        //     console.log("items", items)
        //     lat = items[0].y;
        //     lng = items[0].x;
        // });

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.5611549, 126.9681584); //37.560748, 126.968272
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <div className="card">
                <div ref={mapElement} style={{ minHeight: '300px' }} />
            </div>
        </div>
    )
}
export default Hero;