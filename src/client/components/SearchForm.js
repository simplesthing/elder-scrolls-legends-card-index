import React, { useState } from "react";

import Button from "./Button";
import { accent1 } from "./style";
import { mqMedium } from "../components/style";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  width: 100%;
  background: #fff;
  padding: 2em 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-content: center;
  max-width: 530px;

  @media ${mqMedium} {
    flex-direction: row;
  }
`;

const TextInput = styled.input`
  display: inline-block;
  height: 35px;
  padding-left: 4px;

  @media ${mqMedium} {
    min-width: 400px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 10px;

  @media ${mqMedium} {
    margin: 0;
  }
`;

const Submit = styled(Button)`
  margin-left: 1em;
  width: 100px;
`;

const Reload = styled.span`
  font-family: Lucida Sans Unicode;
  color: ${accent1};
  font-weight: bold;
`;
const SearchForm = (props) => {
  const [cardName, setCardName] = useState("");

  const onEnter = (e) => {
    if (e.key === "Enter") {
      props.onSubmit(cardName);
    }
  };

  const reset = () => {
    setCardName("");
    props.onSubmit();
  };

  return (
    <Wrapper>
      <Form>
        <label htmlFor="cardName" className="visually-hidden">
          Search for card by name &nbsp;
        </label>
        <TextInput
          type="search"
          id="cardName"
          name="cardName"
          placeholder="Search for card by name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          onKeyPress={onEnter}
        />
        <ButtonWrapper>
          <Submit onClick={() => props.onSubmit(cardName)} title="Search">
            Search
          </Submit>
          <Submit
            style={{ backgroundColor: "#fff" }}
            title="Reset"
            onClick={reset}
          >
            <Reload>&#x21bb;</Reload>
          </Submit>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
