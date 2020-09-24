import { Box, Card, Image, Text } from "gestalt";
import React, { useState } from "react";

import ElderModal from "./ElderModal";
import { cardTypes } from "../components/style";

const ElderCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = props;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Box paddingY={1} alignSelf="center" alignContent="center">
        <Card>
          <div onClick={openModal}>
            <Box height={200}>
              <Image
                src={data.imageUrl}
                alt={data.name}
                fit="contain"
                color="#f3f3f3"
                naturalHeight={580}
                naturalWidth={350}
              />
            </Box>
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
          </div>
        </Card>
      </Box>
      <ElderModal data={data} closeModal={closeModal} isOpen={isModalOpen} />
    </div>
  );
};

export default ElderCard;
