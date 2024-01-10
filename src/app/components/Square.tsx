"use client";

import React, { useState } from "react";
import squareStyles from "./square.module.scss";
import Image from "next/image";

const Square: React.FC<{
  number: number;
  handleClick: () => void;
  revealed: boolean;
}> = ({ number, handleClick, revealed }) => {
  return (
    <div
      className={`${squareStyles.block} ${
        revealed ? "" : squareStyles.block__revealed
      }`}
      onClick={handleClick}
    >
      {revealed ? (
        <div className={squareStyles.block__image}></div>
      ) : (
        <p className={squareStyles.block__number}>{number}</p>
      )}
    </div>
  );
};

export default Square;
