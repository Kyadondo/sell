// TeamSection.jsx
import React from 'react';
import styled from 'styled-components';

const TeamSection = () => {
  return (
    <TeamContainer>
      <TeamTitle>Meet Our Team</TeamTitle>
      <TeamGrid>
        <TeamMember>
          <MemberPhoto src="path/to/photo1.jpg" alt="Team Member 1" />
          <MemberName>John Doe</MemberName>
          <MemberRole>CEO</MemberRole>
          <MemberBio>
            John is the visionary behind our company, leading us with his strategic expertise.
          </MemberBio>
        </TeamMember>
        <TeamMember>
          <MemberPhoto src="path/to/photo2.jpg" alt="Team Member 2" />
          <MemberName>Jane Smith</MemberName>
          <MemberRole>CTO</MemberRole>
          <MemberBio>
            Jane ensures our technology remains cutting-edge, driving innovation across our projects.
          </MemberBio>
        </TeamMember>
        {/* Add more team members as needed */}
      </TeamGrid>
    </TeamContainer>
  );
};

export default TeamSection;

const TeamContainer = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const TeamTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 300px;
`;

const MemberPhoto = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const MemberBio = styled.p`
  font-size: 1rem;
  color: #777;
`;
