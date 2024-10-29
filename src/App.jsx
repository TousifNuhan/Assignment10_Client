
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Navigation } from 'swiper/modules';
import banner1 from "../src/assets/banner1.jpg";
import spain from "../src/assets/spain.jpg";
import italy from "../src/assets/Italy.jpg";
import swz from "../src/assets/switzerland.jpg";


function App() {

  const [banners1] = useTypewriter({
    typeSpeed:50,
    words: ['Customized', 'Travel', 'Plans'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [spains] = useTypewriter({
    typeSpeed:50,
    words: ['Explore', 'the', 'World', 'With','Us'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [italys] = useTypewriter({
    typeSpeed:50,
    words: ['Top-notch', 'Accommodations'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [swzs] = useTypewriter({
    typeSpeed:50,
    words: ['Exceptional','Customer','Support'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })


  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          stopOnLastSlide:false,
        }}

        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mb-16 min-h-full"
      >
        <SwiperSlide >
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundAttachment:"fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-xs md:max-w-md App">
              <h1 className='mb-5 mt-8 md:pt-0 pt-10 md:mt-0 text-3xl md:text-5xl font-bold '>{banners1}</h1>
                <p className="md:pt-0 pt-2 mb-24 md:mb-5 mt-6 md:mt-0 text-base md:text-lg">
                Tailor your journey to suit your preferences. From luxury escapes to budget adventures, our system provides personalized itineraries that cater to your unique needs and desires.
                </p>
               
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${spain})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundAttachment:"fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className='max-w-xs md:max-w-md App'>
                <h1 className='mb-5 mt-8 md:pt-0 pt-10 md:mt-0 text-3xl md:text-5xl font-bold '>{spains}</h1>
                <p className='md:pt-0 pb-3 mb-10 md:mb-5 mt-6 md:mt-0 text-base md:text-lg'>Discover breathtaking destinations and unforgettable experiences. Our Tourism Management System offers seamless planning and booking to ensure your travels are hassle-free and memorable.</p>
                <Cursor cursorColor='red' />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${italy})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundAttachment:"fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xs md:max-w-md App">
              <h1 className='mb-5 mt-8 md:pt-0 pt-10 md:mt-0 text-3xl md:text-5xl font-bold'>{italys}</h1>
                <p className="md:pt-0  mb-20 md:mb-5 mt-6 md:mt-0 text-base md:text-lg">
                Stay in the best hotels and resorts around the globe. With our Tourism Management System, you have access to a wide range of premium accommodations that guarantee comfort and quality service.
                </p>
               
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${swz})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundAttachment:"fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xs md:max-w-md App">
              <h1 className='mb-5 mt-8 md:pt-0 pt-10 md:mt-0 text-3xl md:text-5xl font-bold'>{swzs}</h1>
                <p className="md:pt-0  mb-20 md:mb-5 mt-6 md:mt-0 text-base md:text-lg">
                Our dedicated support team is here to assist you at every step of your journey. From booking inquiries to travel advice, we ensure you receive the help you need for a smooth and enjoyable experience.
                </p>
               
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </>
  )
}

export default App
