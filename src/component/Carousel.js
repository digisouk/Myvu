import React from "react";
import Flickity from 'react-flickity-component'
import './Carousel.css';
import img from '../component/img/Trimmer.jpeg';
import imag from '../component/img/trimsale.jpeg';
import image from '../component/img/Trimmer.jpeg';

export default function Carousel() {
  const settings = {wrapAround: true, infinite: true,
  speed: 500,};
    return (
    <Flickity style={{wrapAround:true}}>
      <img src={img} alt={img} />
      <img src={imag} alt={imag} style={{width: '60%'}}/>
      <img src={image} alt={image} />
    </Flickity>
  );
}

