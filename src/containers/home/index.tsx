import React from "react";
import styled from "styled-components";
import PersonalDetails from "../personalDetails";
import Summary from "../summary";
const HomeWrapper = styled.div`
  border: 1px solid;
  padding: 1rem;
`;
interface IHome {
  data: {
    name: string;
    mobileNumber: string;
    emailAddress: string;
    address: string;
    linkedInAddress: string;
  };
}
const Home = ({ data }: IHome) => {
  return (
    <HomeWrapper>
      <PersonalDetails />
      <Summary />
    </HomeWrapper>
  );
};

export default Home;
