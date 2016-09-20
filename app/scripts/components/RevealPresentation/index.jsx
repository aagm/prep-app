import React from 'react';
import Reveal from 'reveal.js';

class RevealPresentation extends React.Component {

  componentDidMount() {
    // Add event listeners
    this.initializeReveal();
  }
  componentWillUnmount() {
    // Remove event listeners
  }
  goToSlide(indexh, indexv) {
    Reveal.slide(indexh, indexv);
  }
  initializeReveal() {
    Reveal.initialize({
      controls: false,
      progress: false,
      slideNumber: false,
      history: true,
      keyboard: true,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      hideAddressBar: true, // Hides the address bar on mobile devices
      transition: 'slide', // none/fade/slide/convex/concave/zoom
      transitionSpeed: 'default', // default/fast/slow
    });
    // Slide number formatting can be configured using these variables:
    //  "h.v":  horizontal . vertical slide number (default)
    //  "h/v":  horizontal / vertical slide number
    //    "c":  flattened slide number
    //  "c/t":  flattened slide number / total slides
    Reveal.slide(0, 0);
    Reveal.configure({ slideNumber: 'c/t' });
    // Reveal.addEventListener('ready', (event) => this.updateSlidesInfo(event).bind(this));
    // Reveal.addEventListener('slidechanged', (event) => this.updateSlidesInfo(event).bind(this));
  }

  render() {
    return (<div className="reveal">
      {this.props.children}

      <div className="reveal-controls -horizontal -left">
        <div className="navigate-container">
          <a href="#" className="navigate-left">
          </a>
        </div>
      </div>
      <div className="reveal-controls -horizontal -right">
        <div className="navigate-container">
          <a href="#" className="navigate-right">
          </a>
        </div>
      </div>
      <div className="reveal-controls -vertical">
        <div className="navigate-container">
          <a href="#" className="navigate-up">
          </a>
        </div>
        <div className="navigate-container">
          <a href="#" className="navigate-down">
          </a>
        </div>
      </div>
      <div className="reveal-actions">
        <div className="index">
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a id="sliderTitles" href="#">Start</a>
        </div>
        <div className="toolbar">
          <a href="#" className="download">Download</a>
          <a href="#" className="share coming-soon">Share</a>
        </div>
      </div>
    </div>);
  }
}

RevealPresentation.propTypes = {
  /**
   * Define the content of the reveal presentation
   * Required
   */
  children: React.PropTypes.any,
  /**
   * Define the content of the reveal presentation
   * Required
   */
  slideTitles: React.PropTypes.array
};

export default RevealPresentation;
