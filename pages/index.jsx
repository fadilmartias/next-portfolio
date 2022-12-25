import Link from 'next/link';
import Image from 'next/image'
import ilus from '../public/home.svg'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <section className='hero'>
        <div className="container">
          <div className="text-wrapper">
            <h1 className='text-title'>Halo, saya M. Fadil Martias</h1>
            <p className='description'>Saya seorang pekerja lepas, pengembang web, dan desainer antarmuka</p>

            <Link href='/contact' legacyBehavior><a className='cta'>Kontak Saya</a></Link>
          </div>
          <div className="image-wrapper">
            <Image
              src={ilus}
              alt="Ilustration"
              />
          </div>
        </div>
      </section>
              </>
  )
}

export default Home;
