
// import type { GetStaticProps } from 'next';
import { sanityClient, urlFor } from "../../sanity.js";

import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { Detail } from '@/layouts/Detail';
import { ImageOverlay } from "@/components/imageoverlay";
import { Contact } from "@/components/contact";
import { Breadcrumbs } from "@mui/material";

const EstheticsServices = ({services, category, beauty, hair, esthetics}) => (
  
  <Detail meta={{title: 'title', description: 'description'}} beautyItems={beauty} hairItems={hair} estheticsItems={esthetics}>
    <div className="pb-[65vh]">
      <div className='mx-auto px-4 md:px-12 lg:px-24 fixed top-[15%] z-[-1]'>
          <h1 className="mb-2 leading-none text-white text-[43px] font-bold">
            {category[0].title}
          </h1>
          <span className='text-[24px] text-white'>{category[0].subtitle}</span>
      </div>

      <div className="block w-full h-[68vh] fixed z-[-3]">
        <ImageOverlay src={urlFor(category[0].mainImage).url()} /> 
      </div>
    </div>
    <div className="bg-white pb-8 min-h-[16em] text-white text-sm text-black rounded-tr-[2em]">
      <div className="container pt-6">

      <Breadcrumbs className="" aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link className="hover:text-isi" href="/">
          Start
        </Link>
        <span className="font-bold">
          {category[0].title}
        </span>
      </Breadcrumbs>

      <h2 className="mb-12 pt-8 leading-none text-[24px] text-center font-bold">
        {category[0].descriptionTitle}
      </h2>
      <p className="mb-6">
        {category[0].description}
      </p>
      <ul>
        {services?.map((service: any) => {
          return (
            <li className="mb-6 last:mb-0" key={service.title}>
              <Link href={`/beauty/${service.slug.current}`} className="bg-[#f6f6f6] p-4 relative block w-full min-h-[80px] rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 object-center overflow-hidden hover:scale-[1.01]">
                <div className="flex justify-between"> 
                  <div className="">
                    <h3 className="font-bold mb-2 text-isi-dark">{`${service.title}`}</h3>
                    <p className="line-clamp-2">{`${service.description}`}</p>
                  </div>
                  <span className="p-3 flex justify-center items-center"><ChevronRightIcon className="text-isi" /></span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      </div>


    <section className="container bg-white mt-10 pb-6">
      <Contact className="rounded-lg" />
    </section>
    </div>
  </Detail>
);

export default EstheticsServices;

export async function getStaticProps() {

  const services = await sanityClient.fetch('*[_type == "service" && "Esthetics" in categories[]->title]')
  const category = await sanityClient.fetch(`*[_type == "category" && title=="Esthetics"]`)
  const beauty = await sanityClient.fetch(`*[_type == "service" && "Esthetics" in categories[]->title]{
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

  return {
    
    props: {
      beauty,
      hair,
      esthetics,
      services,
      category
    }
  }
}
