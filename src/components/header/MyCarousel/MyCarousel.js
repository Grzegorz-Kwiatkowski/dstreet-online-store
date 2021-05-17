import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './MyCarousel.scss';

import male_fashion from '../../../img/header/carousel/male-fashion.png'
import male_fashion_2 from '../../../img/header/carousel/male-fashion-2.jpg'
import male_fashion_discount from '../../../img/header/carousel/male-fashion-discount.jpg'
import female_fashion_2 from '../../../img/header/carousel/female-fashion-2.jpg'
import female_fashion from '../../../img/header/carousel/female-fashion.jpg'
import female_fashion_4 from '../../../img/header/carousel/female-fashion-4.jpeg'
import feshion_shop from '../../../img/header/carousel/feshion-shop.jpg'
import discount_banner from '../../../img/header/carousel/discount-banner.png'

function MyCarousel() {
    return (
        <Carousel
            className="my-carousel"
            autoPlay={true}
            infiniteLoop={true}
            interval={4000}
            axis="vertical"
            showThumbs={false}
        >
            <div className="my-carousel__container">
                <img src={male_fashion_discount} />
                <img src={male_fashion} />
                <img src={male_fashion_2} />
            </div>
            <div className="my-carousel__container">
                <img src={female_fashion_2} />
                <img src={female_fashion_4} />
            </div>
            <div className="my-carousel__container">
                <img src={feshion_shop} />
                <img src={discount_banner} />
                <img src={female_fashion} />
            </div>

        </Carousel>
    )
}

export default MyCarousel
