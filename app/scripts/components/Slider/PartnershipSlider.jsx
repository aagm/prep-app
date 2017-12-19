import React from 'react';
import Slider from 'react-slick';

const engagementSlide = '/images/partnerships/engagement-slide.jpg';
const dataSlide = '/images/partnerships/data-slide.jpg';
const platformsSlide = '/images/partnerships/platforms-slide.jpg';

const settings = {
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
  speed: 500,
  slidesToShow: 1
};

function PartnersSlider() {
  return (
    <div className="c-partnership-slider">
      <Slider {...settings}>
        <div className="partnership-slider-item -inverse" style={{ backgroundImage: `url(${engagementSlide})` }}>
          <div className="row align-center">
            <div className="column small-12 medium-8">
              <h2>Engagement workgroup</h2>
              <p>Entities that develop, engage, or mobilize user communities to understand the information needs of those seeking to build preparedness and resilience.</p>
            </div>
          </div>
        </div>
        <div className="partnership-slider-item -inverse" style={{ backgroundImage: `url(${dataSlide})` }}>
          <div className="row align-center">
            <div className="column small-12 medium-8">
              <h2>Data workgroup</h2>
              <p>Entities that work to ensure interoperability in access and use of climate-relevant data and information.</p>
            </div>
          </div>
        </div>
        <div className="partnership-slider-item -inverse" style={{ backgroundImage: `url(${platformsSlide})` }}>
          <div className="row align-center">
            <div className="column small-12 medium-8">
              <h2>Platforms workgroup</h2>
              <p>Entities that collaborate on building platforms to enhance access and usability of data.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PartnersSlider;
