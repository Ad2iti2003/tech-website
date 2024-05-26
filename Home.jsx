import React from 'react'
import vg from '../assets/3.jpg'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Tech</h1>
            <p>Solution to all your problem</p>
        </main>
      
    </div>

    <div className="home2" id='about'>
        <img src={vg} alt="Graphic" />
        <div>
            <p>
                Lorem ipsum dolor, s neque facilis eaque in dem rem corporis.sectetur adipisicing elit. Mollitia dolore id dicta quae nobis ipsa cumqu
                Veniam, iure similique! Eligenero vero qui amet. In voluptatem ab 
            </p>
        </div>
    </div>
    <div className="home3">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus id, in nobis, quae esse ullam suscipit obcaecati accusamus doloremque, recusandae dolorem magni omnis dicta odit? Velit nesciunt ipsa possimus dicta itaque autem, facilis aliquam nulla explicabo quid voluptates quis laudantium eveniet, provident exceptnem minus corrupti similique nisi, et tenetur commodi molestiae. Adipisci reprehenderit iure architecto id magni sit dolore itaque esse, minus quas officia accusamus quae provident corporis necessitatibus, fuga sint, perspiciatis accusantium? Maxime, laboriosam? Dicta nam nemo vel?</p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
        <div>
            <h1>Brands</h1>
        </div>
        <article>
            <div style={{animationDelay:"0.3s",}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s",}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s",}}>
                <AiFillYoutube/>
                <p>YouTube</p>
            </div>
            <div style={{animationDelay:"1s",}}>
                <AiFillInstagram/>
                <p>Instragram</p>
            </div>
        </article>
        </div>

    </div>
    </>
  )
}

export default Home
