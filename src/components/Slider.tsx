import React, { useState } from "react";
import "./Slider.sass";
import { sliderItems } from "./model";

interface IProps {
  [key: string]: any;
}

const Slider: React.FC<IProps> = () => {
  const [slide, setSlide] = useState(0);
  const [moveClass, setMoveClass] = useState("");

  const onMove = (dir: string) => {
    if (dir === "r") {
      setMoveClass("moveLeft");
      setTimeout(() => {
        setSlide(slide + 1);
        setMoveClass("");
      }, 1000);
      return;
    }

    setMoveClass("moveRight");
    setTimeout(() => {
      setSlide(slide - 1);
      setMoveClass("");
    }, 1000);
  };

  return (
    <>
      <button onClick={onMove.bind(null, "l")}>Move</button>
      <button onClick={onMove.bind(null, "r")}>Move</button>

      <div className="Slider">
        <div className="Slider-wrapp">
          {sliderItems.slice(slide, slide + 6).map(item => {
            return (
              <div className={`slide ${moveClass}`}>
                <img src={item.img} alt={item.title} className="slide-image" />
                <h5 className="slide-title"> {item.title}</h5>
                <div>{item.description}</div>
              </div>
            );
          })}

          {/*  <div className={`slide ${moveClass}`}>
            <img
              src={sliderItems[slide + 4].img}
              alt={sliderItems[slide + 4].title}
              className="slide-image"
            />
            <h5 className="slide-title"> {sliderItems[slide + 4].title}</h5>
            <div>{sliderItems[slide + 4].description}</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Slider;
