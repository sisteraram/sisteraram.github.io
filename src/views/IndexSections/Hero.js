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
import React, {useEffect, useRef, useState} from "react";
import "../../assets/css/styles.css"

import Wedding_1 from "../../assets/img/wedding_1.png";
import Wedding_2 from "../../assets/img/wedding_2.png";
import Wedding_3 from "../../assets/img/wedding_3.png";
import Pic_1 from "../../assets/img/gallery/photo1.png";
import Pic_2 from "../../assets/img/gallery/photo2.png";
import Pic_3 from "../../assets/img/gallery/photo3.png";
import Pic_4 from "../../assets/img/gallery/photo4.png";
import Pic_5 from "../../assets/img/gallery/photo5.png";
import Pic_6 from "../../assets/img/gallery/photo6.png";
import Pic_7 from "../../assets/img/gallery/photo7.png";
import Pic_8 from "../../assets/img/gallery/photo8.png";
import Pic_9 from "../../assets/img/gallery/photo9.png";
import MapImg from "../../assets/img/map.png";
import phoneIcon from "../../assets/img/phone.png";
import smsIcon from "../../assets/img/message.png";
import arrowIcon from "../../assets/img/arrow.png";
import clipboardIcon from "../../assets/img/clipboard.png";
import kakaoIcon from "../../assets/img/kakao.png";
import shareIcon from "../../assets/img/share.png";
import divider from "../../assets/img/divider.png";
import kakaoMapIcon from "../../assets/img/kakao-map.png";
import naverMapIcon from "../../assets/img/naver-map.png";
import {Collapse, UnmountClosed} from 'react-collapse';

//import Modal from 'react-modal';
import copy from 'copy-to-clipboard';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

function Hero() {
  return (
      <Swiper
          style={{fontFamily:'GangwonEdu_OTFBoldA', color:'#001e35'}}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
      >
          <SwiperSlide>
              <Card1 />
          </SwiperSlide>
          <SwiperSlide>
              <Card2 />
          </SwiperSlide>
          <SwiperSlide>
              <Card3 />
          </SwiperSlide>
          <SwiperSlide>
              <Card4 />
          </SwiperSlide>
          <SwiperSlide>
              <Card5 />
          </SwiperSlide>
          <div id="tost_message">클립보드에 복사되었어요.</div>
      </Swiper>
  );
}

function Card1({ onClick, selected, title, itemId }) {
    // url 파라미터 가져오기
    const params = new URLSearchParams(window.location.search)
    // 부모님 접속시 다른 사진
    const division = params.get("division")

    return (
        <div className="card container">
            <img src={division === "adult" ? Wedding_3 : Wedding_1} alt="표지"/>
        </div>
    )
}

function Card2({ onClick, selected, title, itemId }) {
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
        // console.log(Kakao.isInitialized());
    });
    return (
        <div className="card container1">
            <div className="text-center card1">
                <div style={{fontSize: '18px', letterSpacing: '5px', flex:'2'}}>
                    <div style={{display: 'flex'}}>
                        <img src={divider} style={{width: '60px', height: '18px', transform: 'scaleX(-1)', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                        <div style={{margin: '5px'}}>
                            <div >초대합니다</div>
                        </div>
                        <img src={divider} style={{width: '60px', height: '18px', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                    </div>
                </div>
                <div className="message" style={{flex:'10'}}>
                    <p>예쁜 예감이 들었다.</p>
                    <p>우리는 언제나 손을 잡고 있게 될 것이다.</p>
                    <p style={{margin: '10px 0'}}>이이체, &#60; 연인 &#62; 중 -</p>
                    <p>함께하는 여섯번 째 가을,</p>
                    <p>어제의 너와 내가 오늘 우리가 되어</p>
                    <p>두 사람이 한 길을 함께 걸어가려고 합니다.</p>
                    <p>저희의 첫 디딤을 따뜻한 사랑으로 축복해주세요.</p>

                    <div style={{margin: '20px'}}>
                        <div className="name">
                            <div>
                                <span className="bold">홍원기 &#183; 류영진</span> 의&#160;&#160;&#160;딸
                            </div>
                            <div>
                                <span className="bold">아람</span> <br/>
                            </div>
                        </div>
                        <div className="name">
                            <div>
                                <span className="bold">황선익 &#183; 이미정</span> 의 아들
                            </div>
                            <div>
                                <span className="bold">인재</span> <br/>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <div className="location">
                            2023년 11월 25일 토요일 오후 2시 <br/>
                            채플웨딩홀 아벤티움
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

async function copyToClipboard(text) {
    try{
        //await navigator.clipboard.writeText(text);
        copy(text);
        let ua = navigator.userAgent.toLowerCase()
        let isApp = ua.indexOf("android") != -1 || ua.indexOf("ios") != -1 || ua.indexOf("iphone") != -1

        // 앱은 기기에서 토스트창 오픈
        // 웹만 추가
        if (!isApp) {
            let tostMessage = document.getElementById('tost_message');
            tostMessage.classList.add('active');
            setTimeout(function(){
                tostMessage.classList.remove('active');
            },1000);
        }
    } catch (e) {
        alert('복사 실패');
    }
}

function Card3({ onClick, selected, title, itemId }) {
    const mapElement = useRef(null);

    useEffect(() => {
        //카카오 공유하기 기능 setting
        const { Kakao } = window;
        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('f5805a1aeb1ada33b0b17c8eeec4d185');
        // 잘 적용되면 true 를 뱉는다.
        // console.log(Kakao.isInitialized());


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
            zoom: 16,
            zoomControl: false,
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
        <div className='card container1'>
            <div className='text-center card1'>
                <div style={{fontSize: '18px', letterSpacing: '5px',flex:'1'}}>
                    <div style={{display: 'flex'}}>
                        <img src={divider} style={{width: '60px', height: '18px', transform: 'scaleX(-1)', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                        <div style={{margin: '5px'}}>
                            <div >오시는 길</div>
                        </div>
                        <img src={divider} style={{width: '60px', height: '18px', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                    </div>
                </div>
                <div style={{background: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '10px', flex:'10'}}>
                    {/*<div style={{fontFamily: 'iceJaram-Rg', fontSize: '25px', fontWeight: 'bold', lineHeight: '0', letterSpacing: '3px', color: '#001e35'}}>
                    오시는 길
                </div>*/}

                    <div>
                        <a href='https://map.naver.com/p/entry/place/37117082?c=15.00,0,0,0,dh'>
                            <img id="map_img" src={MapImg} alt=''/>
                        </a>
                    </div>
                    <div style={{textAlign: 'start'}}>
                        <div className='name'>
                            <div style={{flex: '0.8'}}>
                                <span style={{fontSize: '12px'}}>주소</span>
                            </div>
                            <div style={{margin: '0 5px'}}>
                                <span>|</span>
                            </div>
                            <div onClick={() => copyToClipboard('서울 중구 청파로 464 3층 채플웨딩홀 아벤티움')} style={{flex: '5'}}>
                                <span style={{fontSize: '12px'}}>서울 중구 청파로 464 3층 채플웨딩홀 아벤티움</span>
                            </div>
                        </div>
                        <div className='name'>
                            <div style={{flex: '0.8'}}>
                                <span style={{fontSize: '12px'}}>지하철</span>
                            </div>
                            <div style={{margin: '0 5px'}}>
                                <span>|</span>
                            </div>
                            <div style={{flex: '5'}}>
                                <span style={{fontSize: '12px'}}>2,5호선 충정로역 4번 출구 (도보 5분)</span>
                            </div>
                        </div>
                        <div className='name'>
                            <div style={{flex: '0.8'}}>
                                <span style={{fontSize: '12px'}}>자차</span>
                            </div>
                            <div style={{margin: '0 5px'}}>
                                <span>|</span>
                            </div>
                            <div style={{flex: '5'}}>
                                <span style={{fontSize: '12px', marginBottom: '0'}}>아벤티움 (본관), 서소문공원 공영주차장(별관)</span>
                                <p style={{fontSize: '12px', margin: '0'}}>* 별관 주차장을 이용하시면 더욱 여유롭게 주차장을 이용하실 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex: '1'}}>
                    <a href='https://map.kakao.com/link/map/8282484'>
                    <img src={kakaoMapIcon} style={{width: '40px'}} alt='카카오맵 아이콘'/>
                    </a>
                    <a href='https://map.naver.com/p/entry/place/37117082?c=15.00,0,0,0,dh'>
                    <img src={naverMapIcon} style={{width: '40px', marginLeft: '20px'}} alt='네이버지도 아이콘'/>
                    </a>
                </div>
            </div>

        </div>
    )
}

function Card4({ onClick, selected, title, itemId }) {

    return (
        <div className='card container1'>
            <div className='text-center card1'>
                <div style={{fontSize: '18px', letterSpacing: '5px', flex:'1'}}>
                    <div style={{display: 'flex'}}>
                        <img src={divider} style={{width: '60px', height: '18px', transform: 'scaleX(-1)', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                        <div style={{margin: '5px'}}>
                            <div >갤러리</div>
                        </div>
                        <img src={divider} style={{width: '60px', height: '18px', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                    </div>
                </div>
                <div style={{flex:'10', marginTop: '20px'}}>
                    <LightGallery plugins={[lgThumbnail]} mode="lg-fade" mobileSettings={{showCloseIcon:true,download:false}}>
                        <a href={Pic_1}>
                            <img style={{width: '30%'}} alt="" src={Pic_1} />
                        </a>
                        <a href={Pic_2}>
                            <img style={{width: '30%', margin: '0 5px 0 5px'}} alt="" src={Pic_2} />
                        </a>
                        <a href={Pic_3}>
                            <img style={{width: '30%'}} alt="" src={Pic_3} />
                        </a>
                        <a href={Pic_4}>
                            <img style={{width: '30%'}} alt="" src={Pic_4} />
                        </a>
                        <a href={Pic_5}>
                            <img style={{width: '30%', margin: '5px'}} alt="" src={Pic_5} />
                        </a>
                        <a href={Pic_6}>
                            <img style={{width: '30%'}} alt="" src={Pic_6} />
                        </a>
                        <a href={Pic_7}>
                            <img style={{width: '30%'}} alt="" src={Pic_7} />
                        </a>
                        <a href={Pic_8}>
                            <img style={{width: '30%', margin: '0 5px 0 5px'}} alt="" src={Pic_8} />
                        </a>
                        <a href={Pic_9}>
                            <img style={{width: '30%'}} alt="" src={Pic_9} />
                        </a>
                        {/*<a href={Wedding_1} style={{display: 'none'}}>*/}
                        {/*    <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />*/}
                        {/*</a>*/}
                    </LightGallery>
                </div>
            </div>
        </div>
    )
}

function Card5({ onClick, selected, title, itemId }) {
    const {Kakao} = window;
    const realUrl = "https://sisteraram.github.io";
    const params = new URLSearchParams(window.location.search)
    const division = params.get("division")
    let wedding = {Wedding_2}.Wedding_2
    let divisionUrl = "https://sisteraram.github.io"

    // 부모님 접속시 사진, URL 변경
    if (division === "adult") {
        wedding = {Pic_1}.Pic_1
        divisionUrl += "?division=adult"
    }


    const [modalOpen, setModalOpen] = useState(false);
    const [flag, setFlag] = useState("0");
    const [isOpened1, setIsOpened1] = useState(true);
    const [isOpened2, setIsOpened2] = useState(false);
    const [isOpened3, setIsOpened3] = useState(false);



    const showModal = (params, e) => {
        setFlag(params);
        setModalOpen(true);
    }
    const toggleAccordion = (param, e) => {
        // 초기화
        setIsOpened1(false);
        setIsOpened2(false);
        setIsOpened3(false);

        let classNameList = document.getElementsByClassName('buttonWrapper')
        for (const className of classNameList){
            className.classList.remove( 'on' )
        }

        // 초기화 종료
        let target = e.target.closest('.buttonWrapper')

        switch (param) {
            case "1":
                setIsOpened1(!isOpened1)
                isOpened1 ? target.classList.remove( 'on' ) :  target.classList.add( 'on' );
                break;
            case "2":
                setIsOpened2(!isOpened2)
                isOpened2 ? target.classList.remove( 'on' ) :  target.classList.add( 'on' );
            break;
            case "3":
                setIsOpened3(!isOpened3)
                isOpened3 ? target.classList.remove( 'on' ) :  target.classList.add( 'on' );
            break;
        }
    }

    useEffect(() => {
        //카카오 공유하기 기능 setting

        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('f5805a1aeb1ada33b0b17c8eeec4d185');
        // 잘 적용되면 true 를 뱉는다.
        // console.log(Kakao.isInitialized());
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
                imageUrl: realUrl + wedding,
                link: {
                    mobileWebUrl: divisionUrl,
                },
            },
            buttons: [
                {
                    title: '모바일청첩장',
                    link: {
                        mobileWebUrl: divisionUrl,
                    },
                }
            ],
        });
    }

    const share = () => {
        if (navigator.share) {
            navigator.share({
                title: '아람❤인재 결혼합니다',
                text: '11월 25일 (토) 오후 2시\n채플웨딩홀 아벤티움',
                url: divisionUrl,
            });
        }else{
            alert("공유하기가 지원되지 않는 환경 입니다.")
        }
    }
    return (
        <div className="card container1">
            <div className="text-center card1">
                <div style={{fontSize: '18px', letterSpacing: '5px', flex: '1'}}>
                    <div style={{display: 'flex'}}>
                        <img src={divider} style={{width: '60px', height: '18px', transform: 'scaleX(-1)', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                        <div style={{margin: '5px'}}>
                            <div >마음 전하실 곳</div>
                        </div>
                        <img src={divider} style={{width: '60px', height: '18px', filter: 'opacity(0.6) drop-shadow(0 0 0 #001e35)'}} alt=""/>
                    </div>
                </div>
                <div className="message" style={{flex: '10', width: '100%', padding: '0 20px'}}>
                    {/*<p style={{fontWeight: 'bold'}}>마음 전해주실 곳</p>*/}
                    <div className='name'>
                        <div style={{fontSize: '16px', lineHeight: '2.2'}}>
                            신랑에게 연락하기
                        </div>
                        <div style={{display:'flex'}}>
                            <div style={{marginTop: '2px'}}>
                                <a href="tel:01076151510">
                                    <img style={{width:'23px'}} src={phoneIcon} alt="전화 아이콘"/>
                                </a>
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                <a href="sms:01076151510">
                                    <img style={{width:'28px'}} src={smsIcon} alt="문자 아이콘"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div style={{fontSize: '16px', lineHeight: '2.2'}}>
                            신부에게 연락하기
                        </div>
                        <div style={{display:'flex'}}>
                            <div style={{marginTop: '2px'}}>
                                <a href="tel:01053941039">
                                    <img style={{width:'23px'}} src={phoneIcon} alt="전화 아이콘"/>
                                </a>
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                <a href="sms:01053941039">
                                    <img style={{width:'28px'}} src={smsIcon} alt="문자 아이콘"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='buttonWrapper' data-toggle="1" onClick={(e)=>toggleAccordion('1', e)}>
                        <div className='button'>
                            혼주에게 연락하기
                        </div>
                        <img className='info_detail' src={arrowIcon} alt="화살표 아이콘"/>
                    </div>
                    <Collapse isOpened={isOpened1}>
                        <div className='mg-top-5'></div>
                        <div className='name' style={{fontSize: '14px'}} id='info'>

                            <div>신랑측</div>
                        </div>
                        <div>
                            <div className='name'>
                                <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                    아버지  황선익
                                </div>
                                <div style={{display:'flex', justifyContent: 'center'}}>
                                    <div style={{marginTop: '2px'}}>
                                        <a href="tel:01052852752">
                                            <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                        </a>
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <a href="sms:01052852752">
                                            <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='name'>
                                <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                    어머니 이미정
                                </div>
                                <div style={{display:'flex', justifyContent: 'center'}}>
                                    <div style={{marginTop: '2px'}}>
                                        <a href="tel:01036872752">
                                            <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                        </a>
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <a href="sms:01036872752">
                                            <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mg-top-5'></div>
                        <div className='name' style={{fontSize: '14px'}} id='info'>
                            <div>신부측</div>
                        </div>
                        <div>
                            <div className='name'>
                                <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                    아버지  홍원기
                                </div>
                                <div style={{display:'flex', justifyContent: 'center'}}>
                                    <div style={{marginTop: '2px'}}>
                                        <a href="tel:01087141039">
                                            <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                        </a>
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <a href="sms:01087141039">
                                            <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='name'>
                                <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                    어머니 류영진
                                </div>
                                <div style={{display:'flex', justifyContent: 'center'}}>
                                    <div style={{marginTop: '2px'}}>
                                        <a href="tel:01062901039">
                                            <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                        </a>
                                    </div>
                                    <div style={{marginLeft: '10px'}}>
                                        <a href="sms:01062901039">
                                            <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <div className='buttonWrapper mg-top-5 ' data-toggle="2" onClick={(e)=>toggleAccordion('2', e)}>
                        <div className='button'>
                            신랑측 계좌번호
                        </div>
                        <img className='info_detail' src={arrowIcon} alt="화살표 아이콘"/>
                    </div>

                    <Collapse isOpened={isOpened2}>
                        <div className='mg-top-5'></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    황인재
                                </div>
                                <div>
                                    우리 1002 960 176173
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('우리 1002 960 176173')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    황선익
                                </div>
                                <div>
                                    NH농협 207177 52 040235
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('농협 207177 52 040235')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    이미정
                                </div>
                                <div>
                                    NH농협 1076 02 004066
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('농협 1076 02 004066')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                    </Collapse>
                    <div className='buttonWrapper mg-top-5 ' data-toggle="2" onClick={(e)=>toggleAccordion('3', e)}>
                        <div className='button'>
                            신부측 계좌번호
                        </div>
                        <img className='info_detail' src={arrowIcon} alt="화살표 아이콘"/>
                    </div>

                    <Collapse isOpened={isOpened3}>
                        <div className='mg-top-5'></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    홍아람
                                </div>
                                <div>
                                    KB국민 605301 04 099523
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('국민 605301 04 099523')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    홍원기
                                </div>
                                <div>
                                    NH농협 302 1119 4788 71
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('NH농협 302 1119 4788 71')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', fontSize: '14px'}}>
                            <div style={{textAlign: 'left'}}>
                                <div>
                                    류영진
                                </div>
                                <div>
                                    우리 1002 131 540884
                                </div>

                            </div>
                            <div>
                                <img onClick={() => copyToClipboard('우리 1002 131 540884')} src={clipboardIcon} style={{width: '24px'}} alt='복사하기 아이콘'/>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div style={{flex: '1'}}>
                    <img onClick={() => {
                        shareKakao()
                    }} src={kakaoIcon} style={{width: '40px'}} alt='카카오톡 공유하기 아이콘'/>
                    {navigator.share && <img onClick={() => {
                        share()
                    }} src={shareIcon} style={{width: '40px', marginLeft: '20px'}} alt='공유하기 아이콘'/>}
                </div>
            </div>
        </div>
    )
}

export default Hero;