import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #262626;
  z-index: 49;
  box-shadow: 0 0 8px #111827;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  max-width: 70rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    width: 100%;
    max-width: 100%;
  }
`;

const HomepageLink = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

const ResumeButton = styled.a`
  background-color: #fef08a;
  width: 4rem;
  height: 0.5rem;
  padding: 1rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactButton = styled.a`
  background-color: #bae6fd;
  width: 4rem;
  height: 0.5rem;
  padding: 1rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content;
align-items: center;
gap: .75rem;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <SectionContainer>
        <HomepageLink href="https://mattalcorn.com">
          Matthew Alcorn
        </HomepageLink>
        <ButtonContainer>
          <ResumeButton>Resume</ResumeButton>
          <ContactButton>Contact</ContactButton>
        </ButtonContainer>
      </SectionContainer>
    </HeaderContainer>
  );
}
