import type { GetStaticPaths, GetStaticProps } from 'next';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_SERVICE, GET_ALL_SERVICES } from "../../queries/queries.js"
import { serialize } from 'next-mdx-remote/serialize';

import React from 'react';

import { Main } from '@/layouts/Main';
import { MDXRemote } from 'next-mdx-remote';

export default function Service({ service }: { service: any }) {
  return (
    <Main meta={{title: 'title', description: 'description'}}>
      <h1 className="capitalize">{service?.title}</h1>
      <MDXRemote {...service.content} />
    </Main>
  );
}

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
});


export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await client.query({query: GET_ALL_SERVICES });
  const paths = data.services.data.map((service: any) => {
    return { params: {slug: service.attributes.urlSlug}}
  })  

  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}: any) => {

  const {data} = await client.query({
    query: GET_SERVICE,
    variables: {slugUrl: params.slug}
  });  

  const attr = data.services.data[0].attributes;

  const htmlContent = await serialize(attr.content)

  return {
    props: {
      service: {
        title: attr.title,
        content: htmlContent
      }
    }
  }
}