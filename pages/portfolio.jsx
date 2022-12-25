import Navbar from '../components/Navbar'
import Image from 'next/image'
import smartHouse from '../public/smart-house.png'
import aiMath from '../public/ai-math.png'
import Head from 'next/head'

const Portfolio = () => {
    return (
      <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <Navbar />
       <section className="hero">
          <div className="container">
            <div className="text-wrapper w-full">
              <h1 className="title">Portfolio</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <div className="portfolio-wrapper">
                <div className="portfolio-item">
                  <Image
                   src={smartHouse}
                   alt="smart-house"
                   className='portfolio-image'
                   />
                  <h4 className="portfolio-name">Smart House App</h4>
                  <div className="portfolio-category">Mobile Dev</div>
                </div>
                <div className="portfolio-item">
                  <Image
                   src={aiMath}
                   alt="ai-math"
                   className='portfolio-image'
                   />
                  <h4 className="portfolio-name">Ai Math Assistant</h4>
                  <div className="portfolio-category">Mobile Dev</div>
                </div>
              </div>
            </div>
          </div>
       </section>
      </>
    )
  }
  
  export default Portfolio;