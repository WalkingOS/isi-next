import type { GetStaticPaths } from "next";
// import { serialize } from 'next-mdx-remote/serialize';
import { sanityClient, urlFor } from "../../../sanity.js";
import { GET_SERVICES } from "../../queries/queries";
import { ImageOverlay } from "@/components/imageoverlay";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

import { useEffect, useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Detail } from "@/layouts/Detail";
import RichTextToReact from "@/components/richtext";


const prices = [
  {
    heading: "Wedding Pure",
    price: 100,
    services: ["probetermin für 50€"],
    termin: "",
  },
  {
    heading: "Wedding Pure",
    price: 100,
    services: [
      "probetermin für 50€",
      "probetermin für 50€",
      "probetermin für 50€",
    ],
    termin: "",
  },
  {
    heading: "Wedding Pure",
    price: 100,
    services: ["probetermin probetermin probetermin probetermin probetermin probetermin probetermin probetermin probeterminfür 50€ probetermin für 50€ probetermin für 50€ probetermin für 50€", "fasdf"],
    termin: "www.google.de",
  },
  {
    heading: "Wedding Pure",
    price: 100,
    services: ["probetermin für 50€ probetermin für 50€ probetermin für 50€ probetermin für 50€", "fasdf"],
    termin: "www.google.de",
  },
  {
    heading: "Wedding Pure",
    price: 100,
    services: ["probetermin für 50€", "fasdf"],
    termin: "www.google.de",
  },
];
// import { MDXRemote } from 'next-mdx-remote';

export default function BeautyService({
  beauty,
  hair,
  esthetics,
  beautyService,
}) {


const [maxHeight, setMaxHeight] = useState(0);

useEffect(() => {
  const listItems = document.querySelectorAll(".priceList");

listItems.forEach(item => {
  if (item.clientHeight > maxHeight) {
    setMaxHeight(item.clientHeight);
  }
});
}, [maxHeight]);

  return (
    <Detail
      beautyItems={beauty}
      hairItems={hair}
      estheticsItems={esthetics}
      meta={{ title: "title", description: "description" }}
    >
      <div className="pb-[40vh]">
        <div className="mx-auto px-4 md:px-12 lg:px-24 fixed top-[15%] z-[-1]">
          <h1 className="mb-2 leading-none text-white text-[43px] font-bold">
            {beautyService.title}
          </h1>
        </div>

        {beautyService.mainImage && (
          <div className="block w-full h-[68vh] fixed z-[-3]">
            <ImageOverlay src={urlFor(beautyService.mainImage).url()} />
          </div>
        )}
      </div>
      <section className="bg-white pb-8 min-h-[16em] text-white text-sm text-black rounded-tr-[2em]">
        <div className="container pt-6">
          <Breadcrumbs
            className=""
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link className="hover:text-isi" href="/">
              Start
            </Link>
            <Link className="hover:text-isi" href="/beauty">
              Beauty
            </Link>
            <span className="font-bold">{beautyService.title}</span>
          </Breadcrumbs>

          <h2 className="mb-8 pt-8 leading-none text-[24px] text-center font-bold">
            {beautyService.subtitle}
          </h2>
          <p className="mb-6">{beauty.description}</p>

          <div>
            <RichTextToReact data={beautyService.body} />
          </div>

          {!!prices.length && (
            <>
            <h3 className="mt-10 mb-8 font-bold text-[1.2rem]">Unsere Leistungen</h3>
            <ul className=" flex w-full flex-wrap -mx-2 justify-center md:justify-start">
              {prices.map((price) => {
                return (
                  <>
                    <li className={`priceList mb-4 w-full sm:w-1/3 px-2 max-h-[${maxHeight}px]`}>
                      <div className="flex relative flex-col justify-between h-min-8 h-full bg-[#f6f6f6] p-4 relative rounded-xl shadow-lg  object-center overflow-hidden">
                        <div>
                          <h4 className="text-center mb-2 font-bold text-isi">{price.heading}</h4>
                          <hr className="m-2"></hr>
                            <p className="text-center font-bold">{price.price} €</p>
                          <hr className="m-2"></hr>
                          {!!price.services && <ul>
                            {price.services.map((service) => {
                              return (
                                <>
                                  <li>
                                    <TaskAltIcon className="text-isi pr-2" />{service}
                                  </li>
                                </>
                              );
                            })}
                          </ul>}
                        </div>
                        {
                          price.termin ?
                        (<Link href={price.termin} className=" text-white text-center py-3 mt-4 block font-bold py-3text-center bg-isi rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 overflow-hidden hover:scale-[1.01] active:scale-[1]">
                          Online Termin buchem
                        </Link>) : (<Link href="/kontakt" className=" text-white text-center py-3 mt-4 block font-bold py-3text-center bg-isi rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 overflow-hidden hover:scale-[1.01] active:scale-[1]">
                      Termin via Anruf
                    </Link>)
                        }
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
            </>
            
          )}
        </div>
      </section>
    </Detail>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await sanityClient.fetch(GET_SERVICES);

  const paths = data?.map((b: any) => {
    return { params: { slug: b.slug.current } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const GET_SINGLE_SERVICE =
    '*[_type == "service" && slug.current == $slug][0]';

  const beautyService = await sanityClient.fetch(GET_SINGLE_SERVICE, {
    slug: params.slug,
  });

  const beauty =
    await sanityClient.fetch(`*[_type == "service" && "Beauty" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const hair =
    await sanityClient.fetch(`*[_type == "service" && "Hair" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const esthetics =
    await sanityClient.fetch(`*[_type == "service" && "Esthetics" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  return {
    props: {
      beauty,
      hair,
      esthetics,
      beautyService,
    },
  };
};
