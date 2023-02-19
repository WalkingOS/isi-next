
import { Main } from '@/layouts/Main';

export default function NotFound({beauty, hair, esthetics}) {
  return (
    <Main meta={{title: 'title', description: 'description'}} beautyItems={beauty} hairItems={hair} estheticsItems={esthetics}>
      <section className="py-[30vh]">
        <p className="text-title-3 text-center">404 Error Not Found </p>
      </section>
    </Main>
  );
}