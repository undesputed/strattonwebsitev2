import React, { useState } from 'react';

import deception from "../../assets/images/backgrounds/100-YEARS-OF-DECEPTION_web.jpg";
import atlastians from "../../assets/images/backgrounds/ALASTIANS_WEB.jpg";
import blueberry from "../../assets/images/backgrounds/BLUEBERRY-DREAMS_web.jpg";
import dyingwell from "../../assets/images/backgrounds/DYING-WELL-PREPARED_WEB.jpg";
import erichoffer from "../../assets/images/backgrounds/ERIC-HOFFER-AWARD_WEB.jpg"

import {
    Carousel,
    Button
} from "react-bootstrap";


const Item = ({ item: { img, alt } }) => (
    <Carousel.Item interval={1000}>
        <a className="thumbnail" href="javascript: void(0)">
            <img className="media-object"
                src={img}
                alt={alt}
            />
        </a>
    </Carousel.Item>
)


const MyCarousel2 = ({ items }) => (
    <div className="root">
        <Carousel controls={true} fade>
            {items.map((item, i) =>
                <Carousel.Item key={i}>
                    <a className="thumbnail" href="javascript:void(0)">
                        <img className="media-object"
                            src={item.img}
                            alt={item.alt}
                        />
                    </a>
                </Carousel.Item>)}
        </Carousel>
    </div>
)

const ITEMS = [
    {
        img: deception,
        alt: 'Slide 1'
    },
    {
        img: atlastians,
        alt: 'Slide 2'
    },
    {
        img: blueberry,
        alt: 'Slide 3'
    },
    {
        img: dyingwell,
        alt: 'Slide 4'
    },
    {
        img: erichoffer,
        alt: 'Slide 5'
    }
]


class Awards extends React.Component {
    render() {
        return (
            <div>
                <MyCarousel2 items={ITEMS} />
            </div>
        )
    }
}

export default Awards;