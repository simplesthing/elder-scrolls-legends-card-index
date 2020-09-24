import React, { useContext, useEffect, useState } from "react";

import { ElderApi } from "../contexts/ElderApiContext";
import ElderGrid from "../components/ElderGrid";
import SearchForm from "../components/SearchForm";
import Sticky from "react-stickynode";
import styled from "styled-components";

const RelativeRoot = styled.div`
  position: relative;
  min-height: 99vh;
`;

const StickyWraper = styled(Sticky)`
  position: relative;
  z-index: 999;
  width: 100%;
`;

const NoResultsMessage = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-content: center;
  align-self: center;
  font-size: 24px;
  font-weight: bold;
`;

const Header = styled.h1`
  text-align: center;
`;

const Homepage = (props) => {
  const elderApi = useContext(ElderApi);
  const [cards, setCards] = useState([]);
  const [endOfList, setEndofList] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState(null);
  const [nextpage, setNext] = useState(1);
  const [noResultsMessage, setNoResultsMessage] = useState(false);

  const loadItems = async (page, name) => {
    setLoaded(false);
    if (elderApi.state !== "FETCHING") {
      const data = await elderApi.getCards(page, name);
      setCards(page > 1 ? cards.concat(data.cards) : data.cards);
      hasNext(data);
      setNoResultsMessage(data.cards.length === 0);
      setTimeout(() => {
        setLoaded(true);
      }, 0);
    }
  };

  const hasNext = (data) => {
    const { _links } = data;
    if (_links && _links.next) {
      let next = _links.next.split("=")[1].split("&")[0];
      setNext(next);
    } else {
      setEndofList(true);
    }
  };

  const loadMore = (props) => {
    if (!!loaded && !endOfList) {
      loadItems(nextpage);
    }
  };

  const onSubmit = (name) => {
    console.log(`name ${!!name}`);
    setName(name);
    setCards([]);
    setEndofList(false);
    setNext(1);
    loadItems(1, name);
    //send new query
  };

  useEffect(() => {
    loadItems(nextpage);
  }, []);

  return (
    <RelativeRoot>
      <Header>'The Elder Scrolls: Legends' Cards Index</Header>
      <StickyWraper enabled={true}>
        <SearchForm onSubmit={onSubmit} />
        <NoResultsMessage isVisible={noResultsMessage}>
          Sorry, no results were found matching your search query.
        </NoResultsMessage>
      </StickyWraper>
      <ElderGrid
        cards={cards}
        end={endOfList}
        loading={elderApi.state === "FETCHING"}
        loadMore={loadMore}
        name={name}
      />
    </RelativeRoot>
  );
};

export default Homepage;
