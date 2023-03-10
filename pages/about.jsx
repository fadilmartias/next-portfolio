import Navbar from '../components/Navbar'
import Head from 'next/head';

const About = () => {
    return (
      <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <Navbar />
       <section className="hero">
          <div className="container">
            <div className="text-wrapper w-full">
              <h1 className="title">About</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci quas aspernatur vero quisquam eum earum ipsa amet sed! Earum quaerat necessitatibus inventore accusantium praesentium quis, iure vel suscipit labore!
              </p>
            </div>
          </div>
       </section>
      </>
    )
  }
  
  export default About;