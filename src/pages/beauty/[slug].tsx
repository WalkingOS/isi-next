import type { GetStaticPaths } from 'next';
// import { serialize } from 'next-mdx-remote/serialize';
import { sanityClient, urlFor } from "../../../sanity.js";
import { GET_SERVICES } from "../../queries/queries";
import { ImageOverlay } from "@/components/imageoverlay";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

import React from 'react';

import {Detail } from '@/layouts/Detail';
// import { MDXRemote } from 'next-mdx-remote';

export default function BeautyService({beauty, hair, esthetics, beautyService}) {
  return (
    <Detail beautyItems={beauty} hairItems={hair} estheticsItems={esthetics} meta={{title: 'title', description: 'description'}}>
    <div className="pb-[40vh]">
      <div className='mx-auto px-4 md:px-12 lg:px-24 fixed top-[15%] z-[-1]'>
          <h1 className="mb-2 leading-none text-white text-[43px] font-bold">
            {beauty.title}
          </h1>
      </div>

      {beauty.mainImage && <div className="block w-full h-[68vh] fixed z-[-3]">
      <ImageOverlay src={urlFor(beautyService.mainImage).url()} />
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
          {beautyService.title}
        </span>
      </Breadcrumbs>

      <h2 className="mb-8 pt-8 leading-none text-[24px] text-center font-bold">
        {beautyService.subtitle}
      </h2>
      <p className="mb-6">
        {beauty.description}
      </p>

      <div>
        {
          beautyService.body?.map(item => 
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

  const beautyService = await sanityClient.fetch(GET_SINGLE_SERVICE,{
      slug: params.slug,
    }
  );

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


  return {
    props: {
      beauty,
      hair,
      esthetics,
      beautyService
    }
  }
}