import React from 'react';
import {Carousel,Typography} from 'antd';
import i18next from '../../locale/LocalUtil';
import { uniqueId } from 'lodash';
// import { useTranslation } from 'react-i18next';
import { LOGIN_SLIDE } from '../../constants/Login.constants';


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const LoginCarousel = () => {
    return (
        <div className="carousal-container" data-testid="carousel-container">
            <Carousel autoplay dots autoplaySpeed={2000} easing="ease-in-out">
                {/*将LOGIN_SLIDE传递给map函数，同时每个元素返回一个div*/}
                {LOGIN_SLIDE.map((data) => (
                    <div className="text-center"
                        data-testid="slider-container"
                        key={uniqueId()}>
                        <Typography.Title className="text-primary" level={1}>
                            {i18next.t(`label.${data.title}`)}
                        </Typography.Title>
                        <p
                            className="m-b-lg carousal-description text-grey-muted"
                            data-testid="carousel-slide-description">
                            {i18next.t(`message.${data.descriptionKey}`)}
                        </p>
                        <img
                            alt="slider"
                            loading="lazy"
                            src={data.image}
                            style={{ display: 'initial'}}
                            width="750px"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
export default LoginCarousel;