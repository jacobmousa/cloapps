"use client";
import Carousel from "react-bootstrap/Carousel";
import jsonData from '../data/indexCarouselData.json'; // Adjust the path as needed
import Image from 'next/image';
export default function IndexCarousel(){
    return(
        <Carousel className="cloApp-carousel">
        {jsonData.map((item, itemIndex) => (
        <Carousel.Item key={itemIndex}>
            <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            {/*<img className="img-fluid" src={item.image} alt="" />*/}
                            <Image src={item.image} alt="Ecommerse site"  width={380} height={380} />

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
    )

}