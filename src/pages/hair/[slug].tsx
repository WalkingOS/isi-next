import type { GetStaticPaths } from 'next';
// import { serialize } from 'next-mdx-remote/serialize';
import { sanityClient } from "../../../sanity.js";
import { GET_SERVICES } from "../../queries/queries";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

import { Detail } from '@/layouts/Detail';
// import { MDXRemote } from 'next-mdx-remote';

export default function BeautyService({beauty, hair, esthetics, beautyService}) {
  return (
    <Detail beautyItems={beauty} hairItems={hair} estheticsItems={esthetics} meta={{title: 'title', description: 'description'}}>
      <h1 className="font-bold">{beautyService.title}</h1>
     <p className="text-xs">
       <FontAwesomeIcon  icon={faCoffee} size="1x" />
     </p>
     <div>
     <p className="text-xs">
afsdfasdf</p>
       fasdf
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

  const esthetics = await sanityClient.fetch(`*[_type == "service" && "Hair" in categories[]->title]{
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