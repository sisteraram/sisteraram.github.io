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
import Pic_1 from "../../assets/img/PICT0031.jpg";
import Pic_3 from "../../assets/img/ririfrifrd.jpg";
import Pic_2 from "../../assets/img/zlzlzlz.jpg";
import MapImg from "../../assets/img/map.png";
import phoneIcon from "../../assets/img/phone.png";
import smsIcon from "../../assets/img/message.png";
import arrowIcon from "../../assets/img/arrow.png";

//import Modal from 'react-modal';
import Modal from '../../components/Modal'

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
      </Swiper>
  );
}

function Card1({ onClick, selected, title, itemId }) {
    return (
        <div className="card container">
            <img src={Wedding_1} alt="표지"/>
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
        console.log(Kakao.isInitialized());
    });
    return (
        <div className="card container1">
            <div className="text-center card1">
                <div style={{fontSize: '18px', letterSpacing: '5px', flex:'2'}}>
                    - 초대합니다 -
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
                    - 오시는 길 -
                </div>
                <div style={{background: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '20px', flex:'10'}}>
                    {/*<div style={{fontFamily: 'iceJaram-Rg', fontSize: '25px', fontWeight: 'bold', lineHeight: '0', letterSpacing: '3px', color: '#001e35'}}>
                    오시는 길
                </div>*/}

                    <div>
                        <a href='https://map.naver.com/p/entry/place/37117082?c=15.00,0,0,0,dh'>
                            <img style={{height: '250px'}} src={MapImg} alt=''/>
                        </a>
                    </div>
                    <div style={{textAlign: 'start'}}>
                        <div className='name'>
                            <div style={{flex: '1'}}>
                                <span style={{fontSize: '12px'}}>주소</span>
                            </div>
                            <div style={{margin: '0 5px'}}>
                                <span>|</span>
                            </div>
                            <div style={{flex: '5'}}>
                                <span style={{fontSize: '12px'}}>서울 중구 청파로 464 3층 채플웨딩홀 아벤티움</span>
                            </div>
                        </div>
                        <div className='name'>
                            <div style={{flex: '1'}}>
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
                            <div style={{flex: '1'}}>
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
            </div>

        </div>
    )
}

function Card4({ onClick, selected, title, itemId }) {

    return (
        <div className='card container1'>
            <div className='text-center card1'>
                <div style={{fontSize: '18px', letterSpacing: '5px', flex:'1'}}>
                    - 갤러리 -
                </div>
                <div style={{flex:'10'}}>
                    <LightGallery plugins={[lgThumbnail]} mode="lg-fade" mobileSettings={{showCloseIcon:true,download:false}}>
                        <a href={Wedding_1}>
                            <img style={{width: '30%'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Pic_2}>
                            <img style={{width: '30%', margin: '0 5px 0 5px'}} alt="" src={Pic_2} />
                        </a>
                        <a href={Pic_3}>
                            <img style={{width: '30%'}} alt="" src={Pic_3} />
                        </a>
                        <a href={Wedding_1}>
                            <img style={{width: '30%'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Pic_2}>
                            <img style={{width: '30%', margin: '5px'}} alt="" src={Pic_2} />
                        </a>
                        <a href={Pic_3}>
                            <img style={{width: '30%'}} alt="" src={Pic_3} />
                        </a>
                        <a href={Wedding_1}>
                            <img style={{width: '30%'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Pic_2}>
                            <img style={{width: '30%', margin: '0 5px 0 5px'}} alt="" src={Pic_2} />
                        </a>
                        <a href={Pic_3}>
                            <img style={{width: '30%'}} alt="" src={Pic_3} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                        <a href={Wedding_1} style={{display: 'none'}}>
                            <img style={{width: '30vw', margin: '5px'}} alt="" src={Wedding_1} />
                        </a>
                    </LightGallery>
                </div>
            </div>
        </div>
    )
}

function Card5({ onClick, selected, title, itemId }) {
    const {Kakao} = window;
    const realUrl = "https://sisteraram.github.io";
    const wedding = {Wedding_1};

    const [modalOpen, setModalOpen] = useState(false);
    const [flag, setFlag] = useState("1");

    const showModal = (params, e) => {
        setFlag(params);
        setModalOpen(true);
    }

    useEffect(() => {
        //카카오 공유하기 기능 setting

        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('f5805a1aeb1ada33b0b17c8eeec4d185');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    });

    const setAccordion = () =>{
        let className = document.getElementById('info').className;
        if (className.includes('on')) {
            document.getElementById('info').className = 'name'
            document.getElementById('accordionContent').className = ''
        } else {
            document.getElementById('info').className = 'name on'
            document.getElementById('accordionContent').className = 'on'
        }

    }

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
                <div style={{fontSize: '18px', letterSpacing: '5px', flex: '1'}}>
                    - 마음 전해주실 곳 -
                </div>
                <div className="message" style={{flex: '10', width: '100%', padding: '0 40px'}}>
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
                    <div style={{padding:'0 10px 0 10px'}}>
                        <div className='name' style={{fontSize: '14px'}} id='info' onClick={() => {
                            setAccordion()
                        }}>
                            <div>신랑측</div>
                            <div >
                                <img className='info_detail' style={{width:'16px', transition : 'transform 1s'}} src={arrowIcon} alt="화살표 아이콘"/>
                            </div>
                            <div>신부측</div>
                        </div>
                        <div id='accordionContent'>
                            <div>
                                <div className='name' style={{flexDirection: 'column'}}>
                                    <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                        아버지  황선익
                                    </div>
                                    <div style={{display:'flex', justifyContent: 'center'}}>
                                        <div style={{marginTop: '2px'}}>
                                            <a href="tel:01076151510">
                                                <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                            </a>
                                        </div>
                                        <div style={{marginLeft: '10px'}}>
                                            <a href="sms:01076151510">
                                                <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='name' style={{flexDirection: 'column', marginTop: '10px'}}>
                                    <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                        어머니  이미정
                                    </div>
                                    <div style={{display:'flex', justifyContent: 'center'}}>
                                        <div style={{marginTop: '2px'}}>
                                            <a href="tel:01076151510">
                                                <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                            </a>
                                        </div>
                                        <div style={{marginLeft: '10px'}}>
                                            <a href="sms:01076151510">
                                                <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='name' style={{flexDirection: 'column'}}>
                                    <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                        아버지  홍원기
                                    </div>
                                    <div style={{display:'flex', justifyContent: 'center'}}>
                                        <div style={{marginTop: '2px'}}>
                                            <a href="tel:01076151510">
                                                <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                            </a>
                                        </div>
                                        <div style={{marginLeft: '10px'}}>
                                            <a href="sms:01076151510">
                                                <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='name' style={{flexDirection: 'column', marginTop: '10px'}}>
                                    <div style={{fontSize: '14px', lineHeight: '2.2'}}>
                                        어머니  류영진
                                    </div>
                                    <div style={{display:'flex', justifyContent: 'center'}}>
                                        <div style={{marginTop: '2px'}}>
                                            <a href="tel:01076151510">
                                                <img style={{width:'19px'}} src={phoneIcon} alt="전화 아이콘"/>
                                            </a>
                                        </div>
                                        <div style={{marginLeft: '10px'}}>
                                            <a href="sms:01076151510">
                                                <img style={{width:'26px'}} src={smsIcon} alt="문자 아이콘"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<p>신랑측 계좌번호</p>
                    <p>신부측 계좌번호</p>*/}
                    {/*<button onClick={() => {
                        shareKakao()
                    }}>공유하기</button>*/}
                    <div className='name' style={{fontSize: '14px'}}>
                        <button className='button' onClick={(e)=>showModal('1', e)}>신랑측 계좌번호</button>
                    </div>
                    <div className='name' style={{fontSize: '14px'}}>
                        <button className='button' onClick={(e)=>showModal('2', e)}>신부측 계좌번호</button>
                    </div>
                    {modalOpen && <Modal flag={flag} setModalOpen={setModalOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Hero;