import { Main } from '@/layouts/Main';
import { fetchMenu } from '@/utils/FetchMenu';

const ContactUs = ({beauty, hair, esthetics}) => (
  <Main meta={{title: 'title', description: 'description'}} beautyItems={beauty} hairItems={hair} estheticsItems={esthetics}>
  <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export default ContactUs;

export const getStaticProps = async () => {
  return fetchMenu()
}