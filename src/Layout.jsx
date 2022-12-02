import React from 'react'
//static components
import Header from './static/Header';
import Nav from './static/Nav';
import Footer from './static/Footer';

import {Outlet} from 'react-router-dom';

const Layout = ({search, setSearch, width}) => {
  return (
    <div className='App'>
			<Header width={width} title='React JS Blog' />
			<Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
		</div>
  )
}

export default Layout