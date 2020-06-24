import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Sidebar, RoundedView } from '../../components';
import "./HomePage.css";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = useCallback(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen])

  return (
    <RoundedView className='home-page'>
      <Sidebar onClose={handleSidebarClose} title="Viktor" />
      <RoundedView className={cn('home-page__content', { 'home-page__content--sidebar-open': sidebarOpen })}>
        <button onClick={handleSidebarOpen}>open sidebar</button>
      </RoundedView>
    </RoundedView>
  )

}

export default HomePage;