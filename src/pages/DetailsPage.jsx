import React from "react";
import FormSection from "../components/FormSection.jsx";
import ImageSection from "../components/ImageSection.jsx";

const DetailsPage = () => {
  return (
    <div className="details-page-container">
      <div className="details-page">
        <FormSection />
        <div className="vertical-divider"></div>
        <ImageSection />
      </div>
    </div>
  );
};

export default DetailsPage;
