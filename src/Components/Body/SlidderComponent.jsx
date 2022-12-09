import React from "react";
import styled from "styled-components";

function SliderComponent({ value, handleChange, min, max, step,color }) {
    return (
      <Container>
        <Slider
          type="range"
          defaultValue={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
        />
      </Container>
    );
  }
  
  export default SliderComponent;
  const Container = styled.div`
    display: grid;
    place-items: center;
    margin-left: 10px;
  `;
  
  const Slider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: linear-gradient(90.11deg, #DF54C8 1.64%, #616DD7 98.86%);
    outline: none;
    opacity: 1;
    --webkit-transition: 0.2s;
    transition: opacity 0.2s;
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #767676;
      cursor: pointer;
      border: 3px solid #FFFFFF;
    }
    ::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }
  `;