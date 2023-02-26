import { Main } from '@/layouts/Main';
import { sanityClient, urlFor } from "../../sanity.js";
import { motion } from "framer-motion"


import { GET_SERVICES, GET_CATEGORY } from "../queries/queries";
import MuiButton from '@mui/material/Button';
import { Card } from '@/components/card';
import { Advantage } from '@/components/advantage';
import { ImageOverlay } from '@/components/imageoverlay';
import { Swiper, SwiperSlide } from 'swiper/react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import { Contact } from '@/components/contact';
import { useEffect, useRef, useState } from 'react';

// import MuxPlayer from '@mux/mux-player-react'

const Index = ({beauty, hair, esthetics, category, hero, advantage}) => {  
  const [domLoaded, setDomLoaded] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (  
    <Main meta={{title: 'title', description: 'description'}} beautyItems={beauty} hairItems={hair} estheticsItems={esthetics}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative w-full h-screen mb-12">
        <div className='absolute top-1/4 max-w-[520px]'>
          <h1 className='mb-2 relative leading-none text-white text-[64px] lg:text-[124px] font-bold after:absolute after:content-[""] after:bg-isi after:w-1/2 lg:after:w-[60%] after:h-[7px] after:left-[-50px] lg:after:left-[-100px] lg:after:top-[105px] after:top-[55px]'>
            {hero.title}
          </h1>
          <span className='text-[24px] lg:text-[42px] text-white'>{hero.subtitle}</span>
        </div>
        <MuiButton id="ctaButton" onClick={() => handleClick()} className="ease-in duration-300 shadow-lg hover:shadow-xl overflow-hidden hover:scale-[1.01] active:scale-[1] hover:bg-isi-light absolute bg-isi text-white lg:text-[20px] font-bold px-4 bottom-[15%] left-1/2 -translate-x-2/4 capitalize">{hero.calltoaction}</MuiButton>
        <div>
          {/*<MuxPlayer playbackId={playbackId} metadata={{video_title: title}} />*/}
        </div>
      </motion.div>

      <ImageOverlay fade src={urlFor(hero.mainImage).url()} /> 
    

      <section className='mb-16'>
        <h2  ref={ref} className='mb-6 lg:mb-18 text-center font-bold'>Was machen wir?</h2>

        <ul className="flex mx-auto max-w-[360px] gap-4 flex-col lg:flex-row lg:flex-row lg:max-w-full lg:gap-8 xl:gap-32 justify-center lg:justify-between">
          {
            category.map((c) => 
              <motion.li 
                key={c.title} 
                className="lg:w-[360px]">
                <Card 
                  title={c.title} 
                  description={c.description} 
                  href={"/" + c.slug.current}
                  src={urlFor(c.mainImage).url()}
                  alt={c.title}
                />
              </motion.li>
            )
          }
        </ul>
      </section>

      <section className='mb-16 relative'>
        <div className="flex flex-col-reverse	md:flex-row md:justify-between gap-10">
          <div className='relative block md:w-1/2'>
            <div className='block relative w-full h-0 pb-[80%]'>
              <Image
                src={urlFor(advantage.mainImage).url()}
                alt=""
                layout="fill"
                objectFit="cover"
                className='rounded-xl shadow-xl'
              /> 
            </div>
          </div>
          <div className='md:w-1/2'>
            <h2 className='mb-6 lg:mb-18 text-center md:text-left font-bold'>{advantage.title}</h2>

            <ul className="flex w-full flex-wrap">
              {
                advantage.advantages.map((item, i:number) =>
                  i < advantage.amount && (
                    <li key={i} className="w-1/2 pt-0 pl-0 p-4">
                      <Advantage 
                        title={item.title}
                        description={item.description}
                        number={i + 1}
                      />
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </div>
      </section>

      <section className='mb-16 -mx-4 md:mx-0'>
          <Contact className='md:rounded-xl'/>
      </section>

      <section className='-mx-4 md:-mx-12 lg:-mx-24 mb-16 2xl:mx-0'>
        <h2 className='mb-6 lg:mb-18 text-center font-bold'>Zufriedene Kunden.</h2>
        {domLoaded && (<Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          centeredSlides
          loop
          breakpoints={{
            "768": {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            "1536": {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          <SwiperSlide>
            <div className='cursor-grab bg-white-100 px-8 pt-2 pb-5 relative block w-full min-h-[80px] rounded-xl shadow-lg'>
              <div className='block relative pt-12'>
                <span className='text-isi text-[84px] absolute -top-4'>“</span>
              </div>
              <p className="italic leading-6 text-[14px] line-clamp-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed...</p>
              <div className='flex mt-4'>
                <span className='rounded-full shadow-lg bg-white-100 w-12 h-12'></span>
              <p className='ml-4 self-center text-[14px] line-clamp-1'>Elif 3</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-white-100 px-8 pt-2 pb-5 relative block w-full min-h-[80px] rounded-xl shadow-lg'>
              <div className='block relative pt-12'>
                <span className='text-isi text-[84px] absolute -top-4'>“</span>
              </div>
              <p className="italic leading-6 text-[14px] line-clamp-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed...</p>
              <div className='flex mt-4'>
                <span className='rounded-full shadow-lg bg-white-100 w-12 h-12'></span>
              <p className='ml-4 self-center text-[14px] line-clamp-1'>Elif 3</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-white-100 px-8 pt-2 pb-5 relative block w-full min-h-[80px] rounded-xl shadow-lg'>
              <div className='block relative pt-12'>
                <span className='text-isi text-[84px] absolute -top-4'>“</span>
              </div>
              <p className="italic leading-6 text-[14px] line-clamp-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed...</p>
              <div className='flex mt-4'>
                <span className='rounded-full shadow-lg bg-white-100 w-12 h-12'></span>
              <p className='ml-4 self-center text-[14px] line-clamp-1'>Elif 3</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>)}
      </section>

      <hr className='bg-isi-dark h-[1.5px]'></hr>

      <section className='my-16'>
        <ul className='flex flex-wrap justify-between w-full '>
          <li className='w-1/2 md:w-1/4 mb-8'>
            <div className='text-center'>
              <LocationOnOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>ISI Noor</h5>
              <span className='text-black-50 text-[14px]'>Schleifweg 25, 90409, Nürnberg</span>
            </div>
          </li>
          <li className='w-1/2 md:w-1/4'>
            <div className='text-center'>
              <PhoneAndroidOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>Rufen sie an</h5>
              <span className='text-black-50 text-[14px]'>0911 92348906</span>
            </div>
          </li>
          <li className='w-1/2 md:w-1/4'>
            <div className='text-center'>
              <EmailOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>schreiben sie uns</h5>
              <span className='text-black-50 text-[14px]'>sie sind eine email von uns entfernt</span>
            </div>  
          </li>
          <li className='w-1/2 md:w-1/4 '>
            <div className='text-center'>
              <InstagramIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>Instagram</h5>
              <span className='text-black-50 text-[14px]'>folgen sie uns Instagram</span>
            </div>  
          </li>
        </ul>
      </section>
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const property = await sanityClient.fetch(GET_SERVICES);
  const category = await sanityClient.fetch(GET_CATEGORY);
  const GET_HERO = /* groq */ `*[_type == "hero"][0]`;
  const GET_ADVANTAGE = /* groq */ `*[_type == "advantage"][0]`;

  const beauty = await sanityClient.fetch(`*[_type == "service" && "Beauty" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const hair = await sanityClient.fetch(`*[_type == "service" && "Hair" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const esthetics = await sanityClient.fetch(`*[_type == "service" && "Esthetics" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  
  const hero = await sanityClient.fetch(GET_HERO);
  const advantage = await sanityClient.fetch(GET_ADVANTAGE);

  return {
    props: {
      beauty,
      hair,
      esthetics,
      property,
      category,
      hero,
      advantage
    }
  }
}

      // loader={({ src, width }) => `${process.env.NEXT_PUBLIC_IMAGE_CDN_URL + src}?w=${width}`}

