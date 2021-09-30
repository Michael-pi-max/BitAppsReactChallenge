import React, { useContext } from "react";
import { TimePeriodContext } from "../App";
import styled from "styled-components";
import { colorsPallete } from "../utilities/colors";

const Wrapper = styled.div`
  position: relative;
  color: #fff;
  background-color: ${(props) => props.background};
  grid-row: 1/3;
  grid-column: 1;
  height: 100%;
  width: 95%;
  border-radius: 18px;
  @media (max-width: 1023px) {
    padding-bottom: 4%;
    grid-row: 1/3;
    height: fit-content;
  }
`;

const PersonalInformationWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 10% 10%;
  width: 80%;
  height: 50%;
  border-radius: 18px;
  background-color: ${(props) => props.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    padding: 6% 10%;
    gap: 10%;
  }
`;

const CircularProfilePicture = styled.img`
  border-radius: 50%;
  border: 3px solid #fff;
  width: 40%;
  height: auto;
  @media screen and (max-width: 1023px) {
    width: 25%;
  }
`;

const ReportText = styled.small`
  font-weight: 400;
  opacity: 0.6;
`;

const Username = styled.h1`
  font-weight: 300;
  font-size: 40px;
`;

const TimePeriodSelectionWrapper = styled.div`
  padding: 5% 10%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    padding-top: 3%;
  }
`;

const TimePeriod = styled.button`
  color: #fff;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  font-weight: 200;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  font-size: 18px;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  &:hover {
    opacity: 1;
  }
`;

const ProfileCard = ({ gridPosition }) => {
  const { selectedPeriod, setSelectedPeriod } = useContext(TimePeriodContext);

  const timePeriod = ["Daily", "Weekly", "Monthly"];
  return (
    <Wrapper gridPos={gridPosition} background={colorsPallete['darkBlue']}>
      <PersonalInformationWrapper background={colorsPallete['blue']}>
        <CircularProfilePicture src="/images/image-jeremy.png"></CircularProfilePicture>
        <div style={{paddingTop: '40px'}}>
          <ReportText>Report for</ReportText>
          <Username>Michael Solomon</Username>
        </div>
      </PersonalInformationWrapper>
      <TimePeriodSelectionWrapper>
        {timePeriod.map((period) => (
          <TimePeriod
            key={period}
            opacity={period === selectedPeriod ? 1 : 0.4}
            onClick={() => {
              setSelectedPeriod(period);
            }}
          >
            {period}
          </TimePeriod>
        ))}
      </TimePeriodSelectionWrapper>
    </Wrapper>
  );
};

export default ProfileCard;