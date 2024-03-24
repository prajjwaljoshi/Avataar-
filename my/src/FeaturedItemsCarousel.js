import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

function FeaturedItemsCarousel({ items }) {
  return (
    <Carousel
      infiniteLoop // Enable continuous looping
      autoPlay // Set autoplay with an optional delay
      showThumbs={false} // Hide item thumbnails (optional)
      showArrows={true} // Show navigation arrows
    >
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          {/* Content for each featured item */}
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {/* Add a button or link if needed */}
        </div>
      ))}
    </Carousel>
  );
}

export default FeaturedItemsCarousel;
