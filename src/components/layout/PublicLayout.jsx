import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicLayout = () => {
  return (
    <div className="public-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="main-content" style={{ flex: 1, paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
