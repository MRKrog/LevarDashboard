import React, { Component } from "react";

class OverviewCarousel extends Component {
  render() {

    return (
      <div className="OverviewCarousel">
        <div className="CarouselContainer">
          <section className="CarouselTitle">
            <h3>High Return</h3>
          </section>
          <section className="CarouselBody">
            <div className="CarouselCopy">
              <h4>Product Title</h4>
              <p>Returns over 30 days: 10</p>
              <p>Return $ over 30 days: $500</p>
              <br/>
              <p>Potential Savings from AR: $125 - $250</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default OverviewCarousel;
