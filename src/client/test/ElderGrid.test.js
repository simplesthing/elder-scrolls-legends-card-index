import { render, screen } from "@testing-library/react";

import ElderGrid from "../components/ElderGrid";
import React from "react";

const props = {
  cards: [
    {
      name: "Raise Dead",
      rarity: "Legendary",
      type: "Action",
      cost: 2,
      set: {
        id: "cs",
        name: "Core Set",
        _self: "https://api.elderscrollslegends.io/v1/sets/cs",
      },
      collectible: false,
      text: "Summon a random creature from each discard pile.",
      attributes: ["Endurance"],
      unique: false,
      imageUrl: "https://images.elderscrollslegends.io/cs/raise_dead.png",
      id: "ce7be2e72d6b06a52e50bed01952801ca4ecfade",
    },
    {
      name: "Reachman Shaman",
      rarity: "Common",
      type: "Creature",
      subtypes: ["Reachman"],
      cost: 2,
      power: 2,
      health: 2,
      set: {
        id: "cs",
        name: "Core Set",
        _self: "https://api.elderscrollslegends.io/v1/sets/cs",
      },
      collectible: true,
      soulSummon: 50,
      soulTrap: 5,
      text:
        "At the start of your turn, give another random friendly creature +1/+1.",
      attributes: ["Neutral"],
      unique: false,
      imageUrl: "https://images.elderscrollslegends.io/cs/reachman_shaman.png",
      id: "15d9c10821d4033fb045ed2cb4599ac76288ac67",
    },
    {
      name: "Redoran Enforcer",
      rarity: "Common",
      type: "Creature",
      subtypes: ["Dark Elf"],
      cost: 2,
      power: 2,
      health: 3,
      set: {
        id: "cs",
        name: "Core Set",
        _self: "https://api.elderscrollslegends.io/v1/sets/cs",
      },
      collectible: true,
      soulSummon: 50,
      soulTrap: 5,
      attributes: ["Intelligence"],
      unique: false,
      imageUrl: "https://images.elderscrollslegends.io/cs/redoran_enforcer.png",
      id: "ebbd44e57df2df1c46f7eaeb7e7847d3c1b2ed46",
    },
  ],
  end: false,
  loading: false,
  loadItems: () => {},
  loadMore: () => {},
};

describe("<ElderGrid/>", () => {
  it("renders content", () => {
    render(<ElderGrid {...props} />);
    expect(screen.getByText(/Raise Dead/)).toBeInTheDocument();
    expect(screen.getByText(/Reachman Shaman/)).toBeInTheDocument();
    expect(screen.getByText(/Redoran Enforcer/)).toBeInTheDocument();
  });

  it("shows a loading indicator when loading", () => {
    const _props = { ...props, loading: true };
    render(<ElderGrid {..._props} />);
    expect(
      screen.getByLabelText(/Loading more Elder Scrolls: Legends Cards/)
    ).toBeInTheDocument();
  });

  it("shows a load more button", () => {
    render(<ElderGrid {...props} />);
    expect(screen.getByText(/load more/i)).toBeInTheDocument();
  });
});
