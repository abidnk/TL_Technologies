import React from 'react'
import './Home.css'
import Carousel from '../components/Carousel'
import InputCard from '../components/InputCard'

const Home = () => {
  return (
    <div className='main-container'>
        <div className='container'>

            {/* Heading section  */}
            <div className='nav'>
            <h1 style={ {fontWeight: 'bolder',fontFamily:'monospace',textShadow: '0 0 6px black'}}>TL TECHNOLOGIES PVT LTD</h1>
            <img src='src/assets/Logo-TL.png' className='logo'></img>
            </div>
            {/* End Heading Section */}
            <div className='content-container'>


                {/* Carousel */}
                <div className='carousel-container' >
                    <Carousel/>
                </div>
            {/* End of Carousel */}


            
            {/* Input Container  */}
           <div className='carousel-container'>
                <InputCard/>
           </div>
            {/*End of Input Container  */}


            </div>
        </div>
    </div>    
  )
}

export default Home