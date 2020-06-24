import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import Divider from '../Divider';
import { IProps } from './interfaces';
import "./Sidebar.css";

const Sidebar = ({ onClose, title }: IProps) => (
  <div className='sidebar'>
    <div className='sidebar__title'>{title}</div>

    <div className='sidebar__menu'>
      <SidebarMenuItem onClick={onClose} label="start" active={true} />
      <SidebarMenuItem label="your cart" />
      <SidebarMenuItem label="favourites" />
      <SidebarMenuItem label="your orders" />
    </div>
    <Divider />
    <div className='sidebar__menu'>
      <SidebarMenuItem label="sign out" />
    </div>
    
  </div>
)

export default Sidebar;