import type { GetStaticPaths } from 'next';
// import { serialize } from 'next-mdx-remote/serialize';
import { sanityClient, urlFor } from "../../../sanity.js";
import { GET_SERVICES } from "../../queries/queries";
import { ImageOverlay } from "@/components/imageoverlay";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

import React from 'react';

import {Detail } from '@/layouts/Detail';
// import { MDXRemote } from 'next-mdx-remote';

export default function BeautyService({beauty}) {
  return (
    <Detail meta={{title: 'title', description: 'description'}}>
    <div className="pb-[40vh]">
      <div className='mx-auto px-4 md:px-12 lg:px-24 fixed top-[15%] z-[-1]'>
          <h1 className="mb-2 leading-none text-white text-[43px] font-bold">
            {beauty.title}
          </h1>
      </div>

      {beauty.mainImage && <div className="block w-full h-[68vh] fixed z-[-3]">
      <ImageOverlay src={urlFor(beauty.mainImage).url()} />
      </div>}
    </div>
    <div className="bg-white pb-8 min-h-[16em] text-white text-sm text-black rounded-tr-[2em]">
      <div className="container pt-6">

      <Breadcrumbs className="" aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link className="hover:text-isi" href="/">
          Start
        </Link>
        <Link className="hover:text-isi" href="/beauty">
          Beauty
        </Link>
        <span className="font-bold">
          {beauty.title}
        </span>
      </Breadcrumbs>

      <h2 className="mb-8 pt-8 leading-none text-[24px] text-center font-bold">
        {beauty.subtitle}
      </h2>
      <p className="mb-6">
        {beauty.description}
      </p>

      <div>
        {
          beauty.body?.map(item => 
            item.children?.map(it => (
              it.text
            ))
          )
        }
      </div>
      </div>

    </div>
  </Detail>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await sanityClient.fetch(GET_SERVICES);
  
  const paths = data?.map((b: any) => {
    return { params: {slug: b.slug.current}}
  })

  return {paths, fallback: false};

};

export const getStaticProps = async ({ params }) => {
  const GET_SINGLE_SERVICE = '*[_type == "service" && slug.current == $slug][0]'

  const beauty = await sanityClient.fetch(GET_SINGLE_SERVICE,{
      slug: params.slug,
    }
  );

  return {
    props: {
      beauty
    }
  }
}