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
    autoplaySpeed:3000
  }
  return(
<Slider {...settings} className="slider">
  {sliderData.map((item) => (
    <div key={item.id} className="slider-item">
      <a href="#">
       <img src={item.image} alt={item.alt} />
        </a>
    </div>
  ))}
</Slider>
  )
}