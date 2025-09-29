"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import slides from "../data/IndexCarouselData.json";

type Slide = {
  name: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
};

export default function IndexCarousel() {
  return (
    <Carousel className="cloApp-carousel" interval={8000}>
      {(slides as Slide[]).map((item, idx) => (
        <Carousel.Item key={idx}>
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  width={380}
                  height={380}
                  priority={idx === 0}
                />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1">{item.name}</h1>
                  <h3 className="h2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}