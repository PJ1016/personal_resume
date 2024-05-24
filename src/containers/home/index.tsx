import React from "react";
import styled from "styled-components";
import PersonalDetails from "../personalDetails";
import Summary from "../summary";
import Education from "../education";
const HomeWrapper = styled.div`
  border: 1px solid;
  padding: 1rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <PersonalDetails />
      <Summary />
      <Education />
    </HomeWrapper>
  );
};

export default Home;
