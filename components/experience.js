import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import Modal from "./modal";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.stopScroll ? "hidden" : "")};
  }`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e5e7eb;
  height: auto;
  gap: 2rem;
  padding: 3rem 0;
`;

const ListItem = styled.div`
  width: 45rem;
  height: 10rem;
  background-color: white;
  border-radius: 5px;
  background-color: white;
  backdrop-filter: blur(3px);
  border: 1px solid #9ca3af;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    border: 1px solid #3b82f6;
  }

  &:active {
    transform: scale(1);
  }
`;

const ItemContent = styled.div`
  margin: 1rem;
  display: flex;
  background-color: white;
`;

const TestSlide = keyframes`
  0% {
    left: 33rem;
    opacity: 0;
  }

  60%{
    left: 38.5rem;
  }

  100% {
    left: 38rem;
    opacity: 1;
  }
`;

const TestSlideOut = keyframes`
  from {
    left: 38rem;
    opacity: 1;
  }

  to {
    left: 41rem;
    opacity: 0;
  }
`;

const ListItemArrow = styled.div`
  position: relative;
  top: -6.5rem;
  left: 38rem;
  height: 3rem;
  width: 3rem;
  background-color: #3b82f6;
  border-radius: 1000px;
  animation: ${TestSlideOut} 0.15s ease-out;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: white;

  ${ListItem}:hover & {
    opacity: 1;
    animation: ${TestSlide} 0.2s ease-in;
  }
`;

const Heading = styled.h1`
  z-index: 48;
  font-size: 3rem;
  font-family: "Inter", sans-serif;
  color: white;

  &::first-letter: {
    font-size: 4rem;
  }
`;

const ImagePlaceholder = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: gray;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem 0 .5rem 1rem;
  justify-content: space-between;
`;

export default function Experience() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <GlobalStyle stopScroll={showModal}></GlobalStyle>
      {showModal && <Modal clickHandler={() => setShowModal(false)} />}

      <ListItemContainer>
        <ListItem onClick={() => setShowModal(true)}>
          <ItemContent>
            <ImagePlaceholder></ImagePlaceholder>
            <TextContainer>
              <h1>Project Name</h1>
              <p>Place</p>
              <p>Dates</p>
            </TextContainer>
          </ItemContent>
          <ListItemArrow>&#10140;</ListItemArrow>
        </ListItem>
        <ListItem onClick={() => setShowModal(true)}>
          <ItemContent>
            <ImagePlaceholder></ImagePlaceholder>
            <TextContainer>
              <h1>Project Name</h1>
              <p>Place</p>
              <p>Dates</p>
            </TextContainer>
          </ItemContent>
          <ListItemArrow>&#10140;</ListItemArrow>
        </ListItem>
        <ListItem onClick={() => setShowModal(true)}>
          <ItemContent>
            <ImagePlaceholder></ImagePlaceholder>
            <TextContainer>
              <h1>Project Name</h1>
              <p>Place</p>
              <p>Dates</p>
            </TextContainer>
          </ItemContent>
          <ListItemArrow>&#10140;</ListItemArrow>
        </ListItem>
      </ListItemContainer>
    </>
  );
}
