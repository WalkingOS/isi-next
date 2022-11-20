
import { Main } from '@/layouts/Main';

export default function NotFound() {
  return (
    <Main meta={{title: 'title', description: 'description'}}>
      <section>
        <p className="text-title-3">404 Error Not Found </p>
      </section>
    </Main>
  );
}