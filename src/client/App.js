import React from "react";
import { createGlobalStyle } from "styled-components";
import globalStyle, { Layout } from "./components/style";
import Homepage from "./containers/Homepage";
import { ElderApiProvider } from "./contexts/ElderApiContext";
import "gestalt/dist/gestalt.css";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ElderApiProvider>
        <Layout>
          <Homepage />
        </Layout>
      </ElderApiProvider>
    </React.Fragment>
  );
}

export default App;
