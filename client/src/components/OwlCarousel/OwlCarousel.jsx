import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/libs/owl.carousel/dist/assets/owl.carousel.min.css";
import "./index.css";

const OwlCarouselComponent = ({ images = [] }) => {

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (images?.length > 0) {
      setCurrentImage(images[0]);
    }
  }, [images]);

  const [sync1, setSync1] = useState(null);
  const [sync2, setSync2] = useState(null);

  const options1 = {
    items: 1,
    nav: false,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<svg width="12" height="12" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="12" height="12" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
    ],
  };

  const options2 = {
    items: 4,
    margin: 16,
    dots: true,
    nav: false,
    smartSpeed: 200,
    slideBy: 4,
    responsiveRefreshRate: 100,
  };

  const handleSync1Change = (event) => {
    const { count, index } = event.item;
    const currentIndex = Math.round(index - count / 2 - 0.5);
    const newIndex =
      currentIndex < 0 ? count - 1 : currentIndex >= count ? 0 : currentIndex;

    sync2?.to(newIndex, 100, true);
  };

  const handleSync2Change = (event) => {
    const { index } = event.item;
    sync1?.to(index, 100, true);
  };

  const handleThumbnailClick = (index) => {
    sync1?.to(index, 300, true);
  };

  return (
    <>
      <OwlCarousel
        id="sync1"
        ref={(carousel) => setSync1(carousel)}
        events={{
          onChanged: handleSync1Change,
        }}
        data-slide-speed="2000"
        rtl={"true"}
        className="owl-carousel owl-theme"
        {...options1}
      >
        {images?.map((image, index) => (
          <div key={index} className="item rounded overflow-hidden">
            <img
              src={image?.url}
              alt={`Image ${index}`}
              className="img-fluid"
            />
          </div>
        ))}
      </OwlCarousel>

      <OwlCarousel
        id="sync2"
        className="thumbnail-carousel"
        ref={(carousel) => setSync2(carousel)}
        data-slide-speed="500"
        rtl={"true"}
        options={options2}
        events={{
          onChanged: handleSync2Change,
        }}
      >
        {images?.map((image, index) => (
          <div
            key={index}
            className="item rounded overflow-hidden"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image?.url}
              alt={`Thumbnail ${index}`}
              className="img-fluid"
            />
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default OwlCarouselComponent;
