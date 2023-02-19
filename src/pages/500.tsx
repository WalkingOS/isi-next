
import { Main } from '@/layouts/Main';
import { fetchMenu } from '@/utils/FetchMenu';

export default function ServerError({beauty, hair, esthetics}) {

  return (
    <Main meta={{title: 'title', description: 'description'}} beautyItems={beauty} hairItems={hair} estheticsItems={esthetics}>
    <section className="py-[30vh]">
        <p className="text-title-3 text-center">500 Server Error</p>
      </section>
    </Main>
  );
}

export const getStaticProps = async () => {
  return fetchMenu()
}