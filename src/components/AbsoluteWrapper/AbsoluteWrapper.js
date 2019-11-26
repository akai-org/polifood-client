import React from 'react';

const AbsoluteWrapper = ({ children }) => {
  return <div className="absolute-wrapper">{children}</div>;
};

const withAbsoluteWrapper = Component => props => {
  return (
    <AbsoluteWrapper>
      <Component {...props} />
    </AbsoluteWrapper>
  );
};

export default withAbsoluteWrapper;
