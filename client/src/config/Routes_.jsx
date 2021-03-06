import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Home from '../pages/Home';


function Routes_() {
  return <div>
      <Routes>
          <Route path='/:category/search/:keyword' element={<Catalog/>}/>
          <Route path='/:category/:id' element={<Detail /> }/>
          <Route path='/:category' element={<Catalog/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
  </div>;
}

export default Routes_;
