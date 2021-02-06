import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const LeadspaceStyle = styled.div`
  margin-top: 4rem;
  height: 30rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-image: url("/Colorful-Stingrays-2.svg");
`;

const LeadspaceContent = styled.div`
  height: 20rem;
  width: 75%;
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeadspaceMainText = styled.div`
  font-size: 2.5rem;
  color: #404040;
  text-align: center;
`;

const LeadspaceSubText = styled.div`
  font-size: 1.5rem;
  color: #737373;
  padding-top: 1rem;
  text-align: center;
  max-width: 45rem;
  font-weight: 300;
  line-height: 1.5;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 100%;
  align-self: flex-end;
  margin-top: auto;
`;

const Box = styled.div`
  height: 6.25rem;
  width: 12rem;
  background-color: #E5E7EB;
  border-radius: 200px;
  margin: 0 0rem;
  margin-bottom: -10rem;
`;

export default function Leadspace() {
  return (
    <LeadspaceStyle>
      <LeadspaceContent>
        <LeadspaceMainText>Frontend Developer</LeadspaceMainText>
        <LeadspaceSubText>
          Bacon ipsum dolor amet ground round sausage prosciutto shank sirloin,
          venison cow chuck landjaeger pork strip steak jerky corned beef filet
          mignon t-bone. Shoulder ribeye andouille strip steak capicola. Doner
          chicken beef shoulder, jerky leberkas bacon andouille pastrami.
        </LeadspaceSubText>
      </LeadspaceContent>
      <BoxContainer>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </BoxContainer>
    </LeadspaceStyle>
  );
}
