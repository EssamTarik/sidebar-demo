import React from 'react';
import cn from 'classnames';
import { IProps } from './interfaces';
import "./SidebarMenuItem.css";

const SidebarMenuItem = ({ onClick, label, active = false }: IProps) => (
  <button
    className={cn('sidebar__menu__item', { 'sidebar__menu__item--active': active })}
    onClick={onClick}>
    {label}
  </button>
);

export default SidebarMenuItem;