import { Masonry, MasonryUniformRowLayout, Spinner } from "gestalt";
import {
  mqLarge,
  mqMedium,
  mqSmall,
  mqXlarge,
  mqXxlarge,
} from "../components/style";

import Button from "./Button";
import ElderCard from "./ElderCard";
import React from "react";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 100;
  max-width: 280px;
  margin: 0 auto;
  padding-bottom: 40px;
  background: #fff;
  @media ${mqSmall} {
    max-width: 600px;
  }
  @media ${mqMedium} {
    max-width: 880px;
  }
  @media ${mqLarge} {
    max-width: 1200px;
  }
  @media ${mqXlarge} {
    max-width: 1780px;
  }
  @media ${mqXxlarge} {
    max-width: 2380px;
  }
`;

const LoadMore = styled(Button)`
  position: absolute;
  bottom: 40px;
  left: calc(50% - 150px);
  width: 300px;
  height: 40px;
  display: ${(props) => (!!props.isVisible ? "inherit" : "none")};
`;

const BackToTop = styled(Button)`
  position: fixed;
  top: calc(100vh - 60px);
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 111;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  padding: 10px;
`;

const ElderGrid = (props) => {
  const { cards, end, loading, loadItems, loadMore } = props;
  return (
    <React.Fragment>
      <Container>
        <Masonry
          comp={ElderCard}
          items={cards}
          loadItems={loadItems}
          gutterWidth={20}
          minCols={1}
          columnWidth={280}
          layout={new MasonryUniformRowLayout()}
        />
        <Spinner
          show={loading}
          accessibilityLabel="Loading more Elder Scrolls: Legends Cards"
        />
        <Waypoint topOffset={100} onEnter={loadMore} />
      </Container>
      <BackToTop title="back to top" onClick={() => window.scrollTo(0, 0)}>
        ^
      </BackToTop>
      <LoadMore
        text="load more"
        onClick={loadMore}
        isVisible={!end && !loading}
        title="load more"
      >
        load more
      </LoadMore>
    </React.Fragment>
  );
};

export default ElderGrid;
