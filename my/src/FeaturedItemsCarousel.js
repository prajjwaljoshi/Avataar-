import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function FeaturedItemsCarousel({ items }) {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showArrows={true}
    >
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default FeaturedItemsCarousel;
