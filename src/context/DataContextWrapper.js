import React from 'react';

// example of provider import, please follow this pattern
import { Provider as MapProvider } from './mapContext';

const DataContextWrapper = ({ children }) => {
  // When you create new type of context, add new Provider to the tree down below
  // children element is our whole App
  return <MapProvider>{children}</MapProvider>;
};

// After approval of this idea, we need to wrap whole App with this DataContextWrapper

export default DataContextWrapper;
