import { fireEvent, render, screen } from "@testing-library/react";

import ElderCard from "../components/ElderCard";
import React from "react";

const data = {
  name: "Spine of Eldersblood",
  rarity: "Rare",
  type: "Creature",
  subtypes: ["Dragon"],
  cost: 6,
  power: 6,
  health: 6,
  set: {
    id: "hos",
    name: "Heroes of Skyrim",
    _self: "https://api.elderscrollslegends.io/v1/sets/hos",
  },
  collectible: true,
  soulSummon: 100,
  soulTrap: 20,
  text: "Summon: Gaint +1 max magicka.",
  attributes: ["Endurance"],
  unique: false,
  imageUrl:
    "https://images.elderscrollslegends.io/hos/spine_of_eldersblood.png",
  id: "e0dddbb1a3ffe37da8c3b3c7ff8f321365b1eb27",
};

describe("<ElderCard/>", () => {
  it("renders content", () => {
    render(<ElderCard data={data} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Spine of Eldersblood/)).toBeInTheDocument();
    expect(screen.getByText(/Creature/)).toBeInTheDocument();
    expect(screen.getByText(/Heroes of Skyrim/)).toBeInTheDocument();
  });

  it("calls openModal when clicked", () => {
    const { getByRole, getByTitle } = render(<ElderCard data={data} />);
    fireEvent.click(getByRole("img"));
    expect(screen.getByTitle("Close")).toBeInTheDocument();
  });
});
