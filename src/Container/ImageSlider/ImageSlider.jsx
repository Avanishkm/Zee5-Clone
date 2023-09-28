import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import haddi from '../../Assets/haddi.png'
// import movie2 from '../../Assets/movie2.jpg'
import movie3 from '../../Assets/movie3.jpg'
import sirf from '../../Assets/sirf.jpg'
import gadder from '../../Assets/gadder.webp'
import tvImg1 from '../../Assets/tvImg1.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ImageSlider() {
  const carouselOptions = {
    responsive: responsive,
    autoPlay: true,
    Infinite: true,
    autoPlaySpeed: 2000,
    KeyboardControl: true,
    customTransition: "transform 500ms ease-in-out",
    removeArrowOnDeviceType: ["tablet", "mobile"],
  };

  return (
    <div className="largerCarousel" style={{marginTop:"5rem"}}>
      <Carousel {...carouselOptions}>
        <div>
          <img className="large-slider-img" src={haddi} alt="movie1" />
        </div>
        <div>
          <img className="large-slider-img" src={movie3} alt="movie2" />
        </div>
        <div>
          <img className="large-slider-img" src={sirf} alt="movie3" />
        </div>
        <div>
          <img className="large-slider-img" src={gadder} alt="movie4" />
        </div> 

        <div>
          <img className="large-slider-img" src={tvImg1} alt="tvImg1" />
        </div> 
      </Carousel>
    </div>
  );

}

export default ImageSlider;