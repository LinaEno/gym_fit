import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './index.css';
import Exercise from './pages/Exercise';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PageNotFound404 from 'components/Error404';
// import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<Exercise />} />
      <Route path="*" element={<PageNotFound404 />}/>
    </Routes>
    {/* <Footer /> */}
  </Box>
);

export default App;
