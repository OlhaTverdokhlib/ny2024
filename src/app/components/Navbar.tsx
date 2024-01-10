"use client";

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/pictures/christmas-lights.svg";
import navbarStyles from "./navbar.module.scss";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleResize = () => {
    setIsPhone(window.innerWidth < 481);
    if (window.innerWidth >= 481 && isModalOpen) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleResizeEvent = () => {
      const handleResize = () => {
        setIsPhone(window.innerWidth < 481);
        if (window.innerWidth >= 481 && isModalOpen) {
          closeModal();
        }
      };
      handleResize();
    };

    handleResizeEvent(); // Перевірка при завантаженні сторінки

    document.addEventListener("keydown", handleKeyDownEvent);
    window.addEventListener("resize", handleResizeEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEvent);
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, [isModalOpen]);

  
  return (
    <nav className={navbarStyles.block}>
      <div className={navbarStyles.block__logo}>
        <Link href="/" className={navbarStyles.block__logo__link}>
          <Image className={ navbarStyles.block__logo__img} src={logo} width={80} height={80} alt="New Year Logo" />
          <h2 className={navbarStyles.block__logo__title}>
            <p>New Year</p>
            <p>2024</p>
          </h2>
        </Link>
      </div>
      <div className={navbarStyles.block__burger} onClick={toggleMenu}>
        <div className={navbarStyles.block__burgerIcon}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className={navbarStyles.block__mobile}>
        <div className={navbarStyles.block__center__links}>
          <Link href="#">Конкурси</Link>
          <Link href="#">Інформація</Link>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`${navbarStyles.block__modal} ${
            isModalOpen ? navbarStyles.block__modal_active : ""
          }`}
          onClick={closeModal}
          tabIndex={0}
          role="button"
        >
          <AiOutlineClose
            onClick={closeModal}
            className={navbarStyles.block__close_icon}
          />
          <ul>
            <li>
              <Link href="#">Конкурси</Link>
            </li>
            <li>
              <Link href="#">Інформація</Link>
            </li>
            <li>
              <Link href="#">Контакти</Link>
            </li>
          </ul>
        </div>
      )}
      <div className={navbarStyles.block__contact}>
        <Link href="#">Контакти</Link>
      </div>
    </nav>
  );
}
