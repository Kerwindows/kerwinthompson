import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.0581590572215!2d-87.33419108798856!3d36.62498667744027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886526fd29f07fcf%3A0x7ee2d6e57c1c551!2sJockey%20Dr%2C%20Clarksville%2C%20TN%2037042%2C%20USA!5e0!3m2!1sen!2stt!4v1693732703358!5m2!1sen!2stt"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
