import React from 'react'
import './Home.css'
import Carousel from '../components/Carousel'
import InputCard from '../components/InputCard'
import TL_Logo from '../assets/Logo-TL.png'

const Home = () => {
  return (
    <div className='main-container'>
        <div className='container'>

            <div className='nav'>
            <h1 style={ {fontWeight: 'bolder',fontFamily:'monospace',textShadow: '0 0 6px black'}}>
              TL TECHNOLOGIES PVT LTD</h1>
            <img src={TL_Logo} className='logo'></img>
            </div>
            <div className='content-container'>
                <div className='carousel-container' >
                    <Carousel/>
                </div>
           <div className='carousel-container'>
                <InputCard/>
           </div>
           </div>
        </div>
    </div>    
  )
}

export default Home