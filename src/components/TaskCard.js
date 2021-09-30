import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TimePeriodContext } from "../App";
import { colorsPallete } from "../utilities/colors";
import Modal from 'react-modal';
import sampleData from "../utilities/data";

const Wrapper = styled.article`
  position: relative;
  @media screen and (max-width: 1023px) {
    height: 150px;
  }
`;

const HeaderSection = styled.main`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.background};
  border-radius: 18px;
  overflow: hidden;
  @media screen and (max-width: 1023px) {
    padding: 0;
  }
`;

const BodySection = styled.header`
  position: absolute;
  border-radius: 18px;
  bottom: -1px;
  left: -1px;
  border: 1px solid ${(props) => props.background};
  height: 80%;
  width: 80%;
  background-color: ${(props) => props.background};
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media screen and (max-width: 1023px) {
    justify-content: space-evenly;
  }
`;

const HeaderImaeg = styled.img`
  position: absolute;
  top: -2%;
  right: 6%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const HoursElapsedText = styled.p`
  color: #fff;
  font-size: 48px;
  font-weight: 300;
  margin: 0;
`;

const BodyTop = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(40);
  }
`;

const ElippsiesIcon = styled.img``;

const PreviousTimePeriodText = styled.small`
  color: #fff;
  opacity: 0.6;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 300;
`;

const BodyBottom = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const headerColorPicker = (index) => {
  switch(index){
    case 0:
      return "liglhtRed"
    case 1:
      return "softBlue"
    case 2:
      return "lightRed"
    case 3:
      return "limeGreen"
    case 4:
      return "violet"
    case 5:
      return "softOrange"
    default:
      return "lightRed"
  }
}

const headerImage = (imageName) => {
  let imagePath = `./images/icon-`;
  switch(imageName){
    case "Work":
      return imagePath.concat("work.svg");
    case "Play":
      return imagePath.concat("play.svg");
    case "Study":
      return imagePath.concat("study.svg");
    case "Exercise":
      return imagePath.concat("exercise.svg");
    case "Social":
      return imagePath.concat("social.svg");
    case "Self Care":
      return imagePath.concat("self-care.svg");
    default:
      return imagePath.concat("work.svg");
  }
}

const handlePreviousTime = (timeframes) => {
  console.log("+++++++++++++");
  console.log(timeframes);
  if(timeframes === "Daily"){
    return "Yesterday";
  }
  else if(timeframes === "Weekly"){
    return "Last Week";
  }else if(timeframes === "Monthly"){
    return "Last Month";
  }else{
    return "Last Week";
  }
}

const TaskCard = ({ title, timeframes, index }) => {
  const { selectedPeriod } = useContext(TimePeriodContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <HeaderSection background={colorsPallete[headerColorPicker(index)]}>
        <HeaderImaeg src={headerImage(title)}></HeaderImaeg>
      </HeaderSection>
      <BodySection background={colorsPallete["darkBlue"]} hover={colorsPallete["veryDarkBlue"]}>
        <BodyTop>
          <Title>{title}</Title>
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              border:0
            },
            content: {
              opacity: 1,
              borderRadius: 28,
              backgroundColor: colorsPallete[headerColorPicker(index)],
              position: 'absolute',
              top:'30%',
              bottom: '30%',
              right: '40%',
              left: '40%',
              padding: 0,
              overflow: 'clip',
              margin: 0,
            }          
          }}>
            <div style={{
              position: 'relative', 
              backgroundColor: colorsPallete[headerColorPicker(index)], 
              height: '15%', 
              border: 0,}}>
                <Title style={{fontSize: '30px', paddingLeft: '40px', paddingTop: '10px'}}>{title}</Title>
                <img src={headerImage(title)} alt="" style={{position: 'absolute',
                  top: '-2%',
                  right: '6%',
                  objectFit: 'cover'}}/>
            </div>
            <div style={{
              position: 'absolute', 
              backgroundColor: colorsPallete['darkBlue'], 
              width: '100%', 
              height: '85%', 
              border: 0, 
              borderRadius: '28px',
              bottom: '-1px',
              left: '-1px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
              }}
              >
                
                 <BodyBottom>
                    <HoursElapsedText>{`${timeframes[selectedPeriod.toLowerCase()].current}hrs`}</HoursElapsedText>
                    <PreviousTimePeriodText>{`Last Week - ${timeframes[selectedPeriod.toLowerCase()].previous}hrs`}</PreviousTimePeriodText>
                  </BodyBottom>
              </div>
          </Modal>
          <Button onClick={() => setIsOpen(true)}>
            <ElippsiesIcon src="./images/icon-ellipsis.svg"></ElippsiesIcon>
          </Button>
        </BodyTop>
        <BodyBottom>
          <HoursElapsedText>{`${timeframes[selectedPeriod.toLowerCase()].current}hrs`}</HoursElapsedText>
          <PreviousTimePeriodText>{`${handlePreviousTime(selectedPeriod)} - ${timeframes[selectedPeriod.toLowerCase()].previous}hrs`}</PreviousTimePeriodText>
        </BodyBottom>
      </BodySection>
    </Wrapper>
  );
};

export default TaskCard;