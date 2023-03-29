import React from "react";
// import Preview from "../views/Preview";
// import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
// import HomeLightProfessional2 from "../views/all-home-version/HomeLightProfessional2";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeLightRtlAnimation from "../views/all-home-version/HomeLightRtlAnimation";
// import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/kerwinthompson" element={<HomeDarkAnimation />} />
        {/* <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route
            path="/home-light-rtl-animation"
            component={HomeLightRtlAnimation}
          />
          <Route path="/dark-particle-effect" component={HomeDarkParticles} />
          <Route
            path="/home-light-professional"
            component={LightProfessionalAnimation}
          />
          <Route
            path="/home-light-professional-2"
            component={HomeLightProfessional2}
          />
          <Route path="/home-dark-animation" component={HomeDarkAnimation} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
