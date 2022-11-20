import Link from 'next/link';

import { Main } from '@/layouts/Main';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SERVICES } from "../queries/queries.js"

const Services = ({services}: any) => (
  
  <Main meta={{title: 'title', description: 'description'}}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    {services?.map((service: any) => {
      {console.log(service)
      }
      return (
        <Link href={`/services/${service.attributes.urlSlug}`} key={service.attributes.title}>
          <div className="my-4 block w-full rounded-md border-2 border-gray-400 py-1 px-2">{`${service.attributes.title}`}</div>
        </Link>
      );
    })}
  </Main>
);

export default Services;

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: GET_ALL_SERVICES
  })

  return {
    props: {
      services: data.services.data
    }
  }
}