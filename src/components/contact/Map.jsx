import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56034.3048224035!2d-81.47226197607422!3d28.625444449524213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770e5a686928b%3A0x4fabf182ac718435!2sLockhart%2C%20FL!5e0!3m2!1sen!2sus!4v1666818497379!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
