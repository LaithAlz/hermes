import React from 'react';
import Translator from './Translator';
import ConvexClientProvider from "./ConvexClientProvider";

function App() {
  return (
    <ConvexClientProvider>
      <div className="App">
        <Translator />
      </div>
    </ConvexClientProvider>
  );
}

export default App;
