
// import type { GetStaticProps } from 'next';
import { sanityClient } from "../../sanity.js";

import Link from 'next/link';
// import { GET_POST } from "./../queries/queries.js";
// import { sanityClient } from "./../../sanity.js";

import { Main } from '@/layouts/Main';
// import { GET_ALL_BEAUTY } from "../queries/queries.js"

const Services = ({services}: any) => (
  
  <Main meta={{title: 'title', description: 'description'}}>
    <p>

    </p>
    {services.map((service: any) => {
      return (
        <Link href={`/beauty/${service.slug.current}`} key={service.title}>
          <div className="my-4 block w-full rounded-md border-2 border-gray-400 py-1 px-2">{`${service.title}`}</div>
        </Link>
      );
    })}
  </Main>
);

export default Services;

export async function getStaticProps() {

  const services = await sanityClient.fetch(`*[_type == "service"]`)

  return {
    props: {
      services
    }
  }
}
