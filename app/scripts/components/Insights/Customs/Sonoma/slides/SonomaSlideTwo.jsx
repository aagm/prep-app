import React from 'react';

class SonomaSlideOne extends React.Component {

  render() {
    return (<section>
        <section className="sonoma-slide slide-map-2-1">
          <div className="container content-section">
            <div className="row">
              <div className="columns medium-6 wrapper">
                <header className="header">
                  <h2 className="title">Overall temperatures projected to rise in both summer and
                    winter seasons</h2>
                </header>
                <p className="content">
                  This map visualization shows temperatures are projected to rise in both summer and
                  winter seasons in Sonoma County. There are positive and negatives aspects to this
                  change.
                </p>
              </div>
              <div className="columns medium-6 wrapper map-card">
                <div id="map2-1" className="map"></div>
                <div className="map-legend">
                  <div className="range years">
                    <span className="-selected">1951-1980</span>
                    <span>1981-2010</span>
                    <span>2011-2039</span>
                    <span>2040-2069</span>
                    <span>2070-2099</span>
                  </div>
                  <div id="timelineSlider2-1" className="slide"></div>
                  <span className="title">Explanation</span>
                  <span className="legend"> Areas showing where the 30-yr average maximum monthly temperature exceeds average maximum temperature between 1981 to 2010 (>72.2 °F)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sonoma-slide">
          <div className="container content-section">
            <div className="row">
              <div className="overlapping-cards">
                <div className="card">
                  <h1>What does this mean for you?</h1>
                  <p>Fire frequencies could increase by 20%, requiring more readiness planning.</p>
                  <p>Plants that grow best in these temperatures are different than those that
                    thrive in current temps.</p>
                  <p>Water demand will increase, as well as costs.<br/>Lower heating use and costs
                    in winter.<br/>Increase air conditioning use and costs in summer.</p>
                </div>
                <div className="card slide-2-2"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SonomaSlideOne;

