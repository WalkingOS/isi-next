
import { Main } from '@/layouts/Main';

export default function NotFound() {
  return (
    <Main meta={{title: 'title', description: 'description'}}>
      <section className="py-[30vh]">
        <p className="text-title-3 text-center">404 Error Not Found </p>
      </section>
    </Main>
  );
}