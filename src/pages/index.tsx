import { Main } from '@/layouts/Main';
import { sanityClient, urlFor } from "../../sanity.js";
import { GET_SERVICES, GET_CATEGORY } from "../queries/queries";
import Button from '@mui/material/Button';
import { Card } from '@/components/Card';

const Index = ({property, category}) => {
  
  return (  
    <Main meta={{title: 'title', description: 'description'}}>

      <div className="relative w-full h-screen">
        <div className='absolute top-1/3'>
          <h1 className="mb-2 leading-none	text-[64px] font-bold">
            {property[0].title}
          </h1>
          <span className='text-[24px]'>in Nürnberg</span>
        </div>
        <Button className="absolute bottom-1/4 left-1/2 -translate-x-2/4">Hello World</Button>
      </div>

      <section>
        <h2 className='mb-6 lg:mb-18 text-center'>Was machen wir?</h2>

        <ul className="flex mx-auto max-w-[360px] gap-4 flex-col lg:flex-row lg:flex-row lg:max-w-full lg:gap-8 xl:gap-32 justify-center lg:justify-between">
          {
            category.map((c) => 
              <li key={c.title} className="lg:w-[360px]">
                <Card 
                  title={c.title} 
                  description={c.description} 
                  href={"/" + c.slug.current}
                  src={urlFor(c.mainImage).url()}
                  alt={c.title}
                />
              </li>
            )
          }
        </ul>
      </section>
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const property = await sanityClient.fetch(GET_SERVICES);
  const category = await sanityClient.fetch(GET_CATEGORY);

  return {
    props: {
      property,
      category
    }
  }
}

      // loader={({ src, width }) => `${process.env.NEXT_PUBLIC_IMAGE_CDN_URL + src}?w=${width}`}
