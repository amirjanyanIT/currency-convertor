import { FunctionComponent, ReactElement } from "react";
import { Route, Routes } from 'react-router-dom';

import {
  ConvertorContainer,
  ActualRatesContainer
} from './containers';

import { GlobalStyles } from './assets';

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className="app">
      <GlobalStyles />
        <Routes>
            <Route path="/convertor" element={<ConvertorContainer />} />
            <Route path="/" element={<ActualRatesContainer />} />
        </Routes>
    </div>
  );
}

export default App;