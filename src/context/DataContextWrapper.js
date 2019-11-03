import React from 'react';

// example of provider import, please follow this pattern
import { Provider as SampleContextProvider } from './SampleContext';
import { Provider as AnotherContextProvider } from './AnotherContext';

const DataContextWrapper = ({ children }) => {
  // When you create new type of context, add new Provider to the tree down below
  // children element is our whole App
  return (
    <SampleContextProvider>
      <AnotherContextProvider>{children}</AnotherContextProvider>
    </SampleContextProvider>
  );
};

// After approval of this idea, we need to wrap whole App with this DataContextWrapper

export default DataContextWrapper;
