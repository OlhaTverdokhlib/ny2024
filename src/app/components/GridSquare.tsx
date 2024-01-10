"use client";

import React, { useState, useEffect } from "react";
import Square from "./Square";
import gridSquareStyles from "./grid-square.module.scss";
import Image from "next/image";

type ImageData = {
  image: string;
  answer: string;
};

const imageDataList: ImageData[] = [
  { image: "/pictures/kriper.png", answer: "Крипер" },
  { image: "/pictures/parusnik.png", answer: "Парусник" },
  { image: "/pictures/holka.png", answer: "Голка" },
  { image: "/pictures/laptop.png", answer: "Ноутбук" },
  { image: "/pictures/hellokitti.png", answer: "Hello Kitty" },
  { image: "/pictures/eye.png", answer: "Око" },
  { image: "/pictures/door.png", answer: "Дверь" },
  { image: "/pictures/cup.png", answer: "Чашка" },
  { image: "/pictures/backpack.png", answer: "Рюкзак" },
  { image: "/pictures/komar.png", answer: "Комар" },

  // { image: "/pictures/ravl.png", answer: "Равлик" },
  // { image: "/pictures/tree.png", answer: "Ялинка" },
  // { image: "/pictures/kovzany.png", answer: "Ковзани" },
  // { image: "/pictures/icecream.png", answer: "Морозиво" },
  // { image: "/pictures/apple.png", answer: "Яблуко" },
  // { image: "/pictures/sky.png", answer: "Скай" },
];

const GridSquare: React.FC = () => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(() => {
    const savedIndex = isLocalStorageAvailable
      ? localStorage.getItem("currentImageIndex")
      : null;
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("currentImageIndex", currentImageIndex.toString());
    }
  }, [currentImageIndex, isLocalStorageAvailable]);

  const [imageData, setImageData] = useState<ImageData>(() => {
    return imageDataList[currentImageIndex];
  });

  const [showAnswer, setShowAnswer] = useState(false);
  const [revealedSquares, setRevealedSquares] = useState<boolean[]>(
    Array(25).fill(false)
  );

  useEffect(() => {
    localStorage.setItem("currentImageIndex", currentImageIndex.toString());
  }, [currentImageIndex]);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("currentImageIndex", currentImageIndex.toString());
    }
    setImageData(imageDataList[currentImageIndex]); // Додайте цей рядок
  }, [currentImageIndex, isLocalStorageAvailable]);


  const handleSquareClick = (index: number) => {
    if (!showAnswer) {
      const updatedRevealedSquares = [...revealedSquares];
      updatedRevealedSquares[index] = !updatedRevealedSquares[index];
      setRevealedSquares(updatedRevealedSquares);
    }
  };

  const handleNextImage = () => {
    setShowAnswer(false);
    const nextIndex = (currentImageIndex + 1) % imageDataList.length;
    setImageData(imageDataList[nextIndex]);
    setRevealedSquares(Array(25).fill(false)); // Reset squares
    setCurrentImageIndex(nextIndex);
  };

  const checkAnswer = () => {
    setShowAnswer(true);
    setRevealedSquares(Array(25).fill(false)); // Залити всі квадратики
  };

  const renderGrid = () => {
    const squares = [];
    for (let i = 0; i < 25; i += 1) {
      squares.push(
        <Square
          key={i}
          number={i + 1}
          handleClick={() => handleSquareClick(i)}
          revealed={revealedSquares[i]}
        />
      );
    }
    return squares;
  };

    return (
      <div className={gridSquareStyles.block}>
        <div className={gridSquareStyles.block__grid}>
          <div className={gridSquareStyles.block__image}>
            <Image
              src={imageData.image}
              alt="Зображення галереї - випадкова картинка для відгадування"
              width={700}
              height={700}
              objectFit="cover" // Встановлюємо тип об'єкта fit
              objectPosition="center" // Встановлюємо позицію об'єкта
              sizes="(max-width: 640px) 400px, (max-width: 768px) 300px, 700px"
            />
          </div>
          {renderGrid()}
        </div>

        <div className={gridSquareStyles.block__buttons__box}>
          <button
            className={gridSquareStyles.block__button}
            onClick={checkAnswer}
          >
            Перевірка відповіді
          </button>
          {showAnswer && <p>{imageData.answer}</p>}
          {showAnswer && (
            <button
              className={gridSquareStyles.block__button}
              onClick={handleNextImage}
            >
              Наступне зображення
            </button>
          )}
        </div>
      </div>
    );
};

export default GridSquare;
