import React from 'react';
import Carousel from "react-multi-carousel";
import projects from '../projectData.js';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const carouselItems = projects.map(project => {
        console.log(project)
        return (
            <div className="rounded-md h60 w-3/4 mx-auto my-7 p-2 shadow-2xl bg-gray-200">
                <a href={project.link}>
                    <img className="rounded-lg object-contain p-1 shadow-lg" src={project.img} alt={`${project.title} image.`} />
                </a>
                <h4 className="pt-2">{project.title}</h4>
                <p className="text-lg py-2">{project.linkText}</p>
            </div>
        )
    })

export default function Projects() {
    return (
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            //customTransition="all 0.5"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {carouselItems}
        </Carousel>
)
};