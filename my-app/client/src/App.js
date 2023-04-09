import { Accordion } from '@material-tailwind/react';
import React from 'react';
import Banner from './Components/Banner';
import Card from './Components/Card';
import Cards from './Components/Cards';

// import Footer from './Components/Footer';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Midsec from './Components/Midsec';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  // palette: {

  // },
});



function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Banner />
      <div className='flex mx-16'>
        <Card step="Step-1" />
        <Card step="Step-2" />
        <Card step="Step-3" />
      </div>

      <Cards
      />
      {/* <Midsec /> */}
      {/* <Home /> */}
      {/* <Analysis /> */}
      {/* <Accordian /> */}
      {/* <Footer/> */}
      {/* <Home/> */}
    </ThemeProvider>
  )
}

export default App
