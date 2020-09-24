import React, { createContext, useState } from "react";

export const ElderApi = createContext({});

export const elderApiConstants = {
  NONE: "NONE",
  FETCHING: "FETCHING",
  ERROR: "ERROR",
};

export const ElderApiProvider = (props) => {
  const baseUrl = `https://api.elderscrollslegends.io/v1/cards`;
  const [apiState, setApiState] = useState(elderApiConstants.NONE);

  const getCards = async (page = 1, name, pagesize = 20) => {
    setApiState(elderApiConstants.FETCHING);
    const url = !!name
      ? `${baseUrl}?name="${name}"&page=${page}&pageSize=${pagesize}`
      : `${baseUrl}?page=${page}&pageSize=${pagesize}`;
    try {
      const cards = await fetch(url).then((res) => res.json());
      setApiState(elderApiConstants.NONE);
      return cards;
    } catch (e) {
      setApiState(elderApiConstants.ERROR);
      console.log(`fetch failed with error ${JSON.stringify(e)}`);
    }
  };

  return (
    <ElderApi.Provider
      value={{
        state: apiState,
        getCards: getCards,
      }}
    >
      {props.children}
    </ElderApi.Provider>
  );
};
