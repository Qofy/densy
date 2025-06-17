import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "../styles/imageSlider.scss"
import { sliderData } from "../data/slider-data.ts"
export function ImageSlider(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
  }
  return(
<Slider {...settings} className="slider">
<div>
  {sliderData.map((item, index) => (
    <div key={item.id}>
      <a href="#">
       <img src={item.image} alt={item.alt} />
        </a>
    </div>
  ))}
</div>
</Slider>
  )
}