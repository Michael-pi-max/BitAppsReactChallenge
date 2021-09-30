import React, { useState } from "react";
import styled from "styled-components";
import TaskCard from "./components/TaskCard";
import ProfileCard from "./components/ProfileCard";
import sampleData from "./utilities/data";
import { colorsPallete } from "./utilities/colors";

export const TimePeriodContext = React.createContext({});

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  height: 52vh;
  padding: 24vh 14%;
  @media screen and (max-width: 1023px) {
    min-height: 100vh;
    padding: 6vh 4%;
    height: auto;
  }
`;

const GridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  gap: 2em;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, fit-content);
    gap: 2em;
  }
`;

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

  return (
        <Wrapper background={colorsPallete["veryDarkBlue"]}>
          <TimePeriodContext.Provider value={{ selectedPeriod, setSelectedPeriod }}>
              <GridLayout>
                <ProfileCard/>
                  {sampleData.map((item, index) => (
                    <TaskCard key={item.title} {...item} index={index}></TaskCard>
                ))}
              </GridLayout>
          </TimePeriodContext.Provider>
        </Wrapper>
  );
}

export default App;