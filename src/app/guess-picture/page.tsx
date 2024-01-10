import React from "react";
import GridSquare from "../components/GridSquare";
import guessPictureStyles from "./page.module.scss";

const GuessPicture: React.FC = () => {
  return (
      <div className={guessPictureStyles.block}>
      <GridSquare />
    </div>
  );
};

export default GuessPicture;