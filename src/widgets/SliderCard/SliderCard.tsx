import React, {useEffect, useState} from 'react';
import {Typography} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";


import './swiper.scss'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from "../../shared/ProductCard/ProductCard";

type Slider = {
    title: string,
    arr? : []
}

const SliderCard = ({title, arr}: Slider) => {
    const [sliderWidth, setSliderWidth] = useState(window.innerWidth); // Ширина окна по умолчанию
    const [slide, setSlide] = useState(5)
    const {innerWidth} = window;
    useEffect(() => {
        const handleResize = () => {
            setSliderWidth(innerWidth); // Обновляем состояние с новой шириной окна при изменении размера окна
        };

        window.addEventListener('resize', handleResize); // Добавляем слушатель события изменения размера окна
        if (sliderWidth <= 600) {
            setSlide(1)
        }
        else if (sliderWidth <= 1000) {
            setSlide(2)
        }
        else if (sliderWidth <= 1200) {
            setSlide(3)
        }
        else if (sliderWidth <= 1500) {
            setSlide(4)
        }
        else if (sliderWidth <= 1800) {
            setSlide(5)
        }
        else{
            setSlide(6)
        }
        return () => {

            window.removeEventListener('resize', handleResize); // Удаляем слушатель при размонтировании компонента
        };
    }, [innerWidth, sliderWidth]);



    return (
        <section className={'swiper_product'}>
            <Typography className={"title_section"}>{title}</Typography>
            <Swiper
                style={{display: "flex", justifyContent: "center", width: "90%"}}
                slidesPerView={slide}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={true}
                modules={[Pagination, Autoplay, Navigation]}
                className={"mySwiper"}
                navigation
            >
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
                <SwiperSlide style={{height:200, width: 300}}><ProductCard/></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SliderCard;