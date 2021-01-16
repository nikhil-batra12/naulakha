import React from "react";
import * as constants from "./constants";
import ImageCarousel from "components/imageCarousel/imageCarousel";

class HomeModule extends React.PureComponent<any, any> {
  render() {
    return (
      <>
        <ImageCarousel config={constants.MAIN_CAROUSEL} />
        <h4>About Us</h4>
      </>
    );
  }
}

export default HomeModule;
