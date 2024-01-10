import React from "react";

import testStyles from "./page.module.scss";


const Test: React.FC = () => {
  return (
    <div className={testStyles.block}>
      test
      {/* <h1>Test</h1> */}
    </div>
  );
};

export default Test;