import Button from "./Button";
import Modal from "react-modal";
import React from "react";
import { Text } from "gestalt";
import { cardTypes } from "../components/style";
import { mqMedium } from "../components/style";
import styled from "styled-components";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const modalStyle = {
  content: {
    maxHeight: "810px",
    maxWidth: "400px",
    top: "20px",
    bottom: 0,
    left: "50%",
    right: 0,
    transform: "translateX(-50%)",
  },
  overlay: { zIndex: 1000 },
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em;
`;

const CloseBtn = styled(Button)`
  position: absolute;
  top: 0px;
  right: -40px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
  @media ${mqMedium} {
    max-width: 410px;
    right: -20px;
  }
`;

const CardImage = styled.img`
  max-width: 200px;
  @media ${mqMedium} {
    max-width: 410px;
  }
`;

const ElderModal = (props) => {
  const { data, isOpen, closeModal } = props;
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Wrapper>
        <CloseBtn onClick={closeModal} title="Close">
          X
        </CloseBtn>
        <CardImage src={data.imageUrl} alt={data.name} />
        <Text align="center" weight="bold" size="lg">
          {data.name}
        </Text>
        <Text align="center">{data.text}</Text>
        <Text
          align="center"
          color={cardTypes[data.type.toLowerCase()]}
          weight="bold"
        >
          {data.type}
        </Text>
        <Text align="center" italic={true}>
          {data.set.name}
        </Text>
      </Wrapper>
    </Modal>
  );
};

export default ElderModal;
