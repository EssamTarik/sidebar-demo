import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IProps } from './interfaces';
import "./HomePageContent.css";

const sidebarToggleIconColor = "#E8E5E5";

const HomePageContent = ({ onSidebarOpen }: IProps) => (
  <>
    <div className='home-page__content__header'>
      <button onClick={onSidebarOpen} className='home-page__content__header__toggle'>
        <GiHamburgerMenu size={30} color={sidebarToggleIconColor} />
      </button>
      <div className='home-page__content__header__title'>start</div>
    </div>
  </>
)

export default HomePageContent;

