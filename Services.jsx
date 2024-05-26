import React from 'react'
import '../styles/services.scss'
import {AiOutlineDesktop,AiFillFormatPainter,AiOutlineDeploymentUnit} from 'react-icons/ai'
import {Carousel} from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/5.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <>
    <div className='service'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </Carousel>
    
    <h1 className='ser'>Services</h1>
    <div className='services'>
      
      <div>
      <AiOutlineDesktop className='icon'/>
      <br />
        <h1>Web Design</h1>
        <p>Lorem ipsum dolor, sit ampa nisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
      <div>
        <AiFillFormatPainter className='icon'/>
        <br />
        <h1>Graphic Design</h1>
        <p>Lorem ipsum dolor, snisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
      <div>
        <AiOutlineDeploymentUnit className='icon'/>
        <br />
        <h1>Web Development</h1>
        <p>Lorem ipsum dolor, s nisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
    </div>
    
    <div className='services1'>
      
      <div>
      <AiOutlineDesktop className='icon'/>
      <br />
        <h1>Web Design</h1>
        <p>Lorem ipsum dolor, sit ampa nisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
      <div>
        <AiFillFormatPainter className='icon'/>
        <br />
        <h1>Graphic Design</h1>
        <p>Lorem ipsum dolor, snisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
      <div>
        <AiOutlineDeploymentUnit className='icon'/>
        <br />
        <h1>Web Development</h1>
        <p>Lorem ipsum dolor, s nisi porro iste, totam inventore nulla. Maiores.</p>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default Services
