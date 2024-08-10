// ServiceDetails.jsx
import React from 'react';
import styled from 'styled-components';

const ServiceDetails = ({ title, description, image, features, caseStudy }) => {
  return (
    <ServiceContainer>
      <ServiceImage src={image} alt={title} />
      <ServiceContent>
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceDescription>{description}</ServiceDescription>
        <ServiceFeatures>
          <FeaturesTitle>Key Features</FeaturesTitle>
          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>
        </ServiceFeatures>
        {caseStudy && (
          <CaseStudySection>
            <CaseStudyTitle>Case Study</CaseStudyTitle>
            <CaseStudyText>{caseStudy}</CaseStudyText>
          </CaseStudySection>
        )}
      </ServiceContent>
    </ServiceContainer>
  );
};

export default ServiceDetails;

const ServiceContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const ServiceImage = styled.img`
  width: 50%;
  margin-right: 20px;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.div`
  margin-bottom: 20px;
`;

const FeaturesTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const FeaturesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CaseStudySection = styled.div`
  margin-top: 20px;
`;

const CaseStudyTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const CaseStudyText = styled.p`
  font-size: 1.2rem;
`;
