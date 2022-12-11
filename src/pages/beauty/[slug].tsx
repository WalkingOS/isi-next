import type { GetStaticPaths } from 'next';
// import { serialize } from 'next-mdx-remote/serialize';
import { sanityClient } from "../../../sanity.js";
import { GET_SERVICES } from "../../queries/queries";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

import { Main } from '@/layouts/Main';
// import { MDXRemote } from 'next-mdx-remote';

export default function BeautyService({beauty}) {
  return (
    <Main meta={{title: 'title', description: 'description'}}>
      <h1 className="font-bold">{beauty.title}</h1>
     {/* <MDXRemote {...beautyservice.content} /> */}

     <p className="text-xs">
       <FontAwesomeIcon  icon={faCoffee} size="1x" />
     </p>
     <div>
     <p className="text-xs">
afsdfasdf</p>
       fasdf
     </div>
    </Main>
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


/*
export const getStaticPaths: GetStaticPaths = async () => {

  const data = await sanityClient.fetch(GET_SERVICES);
  
  const paths = data?.map((b: any) => {
    return { params: {slug: b.current.slug}}
  })
  console.log(paths);

  return {paths, fallback: false};

};

export const getStaticProps = async () => {

  // const beauty = await sanityClient.fetch(GET_SERVICES);
  console.log("gfsdf");
  const a = "fasdf"
  return {
    props: {
      a
    }
  }
}*/


/*

export const getStaticPaths: GetStaticPaths = async () => {

  // const data = await sanityClient.fetch({query: GET_SERVICES });


  return {paths: [{params: {slug: "aaaaaaa"}}] , fallback: false};

};



export const getStaticProps = async () => {

  const beauty = await sanityClient.fetch(GET_SINGLE_SERVICE);

  return {
    props: {
      beauty
    }
  }
}
*/