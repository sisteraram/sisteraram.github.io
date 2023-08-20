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

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const getItems = () =>
    Array(3)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function Hero() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
      (id) =>
          ({ getItemById, scrollToItem }) => {
            const itemSelected = isItemSelected(id);

            setSelected((currentSelected) =>
                itemSelected
                    ? currentSelected.filter((el) => el !== id)
                    : currentSelected.concat(id)
            );
          };

  return (
      // <ScrollMenu>
      //   {items.map(({ id }) => (
      //       <Card
      //           itemId={id} // NOTE: itemId is required for track items
      //           title={id}
      //           key={id}
      //           onClick={handleClick(id)}
      //           selected={isItemSelected(id)}
      //       />
      //   ))}
      // </ScrollMenu>
      <ScrollMenu>
          <Card
             itemId='element-0' // NOTE: itemId is required for track items
             title='element-0'
             key='element-0'
             onClick={handleClick('element-0')}
             selected={isItemSelected('element-0')}
         />
          <Card1
              itemId='element-1' // NOTE: itemId is required for track items
              title='element-1'
              key='element-1'
              onClick={handleClick('element-1')}
              selected={isItemSelected('element-1')}
          />
          <Card2
              itemId='element-2' // NOTE: itemId is required for track items
              title='element-2'
              key='element-2'
              onClick={handleClick('element-2')}
              selected={isItemSelected('element-2')}
          />
      </ScrollMenu>
  );
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '100vw',
            }}
            tabIndex={0}
        >
            <div className="card">
                <img src={Wedding_1} alt="표지"/>
            </div>
        </div>
    )
}

function Card1({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.5656, 126.9769);
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
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '100vw',
            }}
            tabIndex={0}
        >
            <div className="card">
                <div ref={mapElement} style={{ minHeight: '400px' }} />;
            </div>
        </div>
    )
}

function Card2({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
      <div
          onClick={() => onClick(visibility)}
          style={{
            width: '100vw',
          }}
          tabIndex={0}
      >
        <div className="card">
          <div>{title}</div>
          <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
      </div>
  )
}
export default Hero;