
import { Main } from '@/layouts/Main';

export default function ServerError() {

  return (
    <Main meta={{title: 'title', description: 'description'}}>
      <section className="py-[30vh]">
        <p className="text-title-3 text-center">500 Server Error</p>
      </section>
    </Main>
  );
}