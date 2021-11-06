import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  ActualRatesContainer,
  ConvertorContainer
} from './containers';

import { GlobalStyles } from './assets';

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className="app">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/convertor">
            <ConvertorContainer />
          </Route>
          <Route path="/">
            <ActualRatesContainer />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;