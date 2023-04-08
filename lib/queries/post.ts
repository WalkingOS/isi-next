import {groq} from 'next-sanity';

export const postQuery = groq`
	*[_type == 'post' && slug.current == $slug][0] {
		...,
		author-> {name, title, phone, email, image}
	}
`;

export const postsQuery = groq`
	*[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
`;

export const allPostSlug = groq`
	*[_type == 'post' && defined(slug.current)][].slug.current
`;



// me

export const GET_SERVICES= '*[_type == "service"]';

export const GET_CATEGORY= '*[_type == "category"]';

export const GET_ADVANTAGE = /* groq */ `*[_type == "advantage"][0]`;

export const GET_BEAUTY = `*[_type == "service" && "Beauty" in categories[]->title]{
  title,
  "slug": slug.current
}`

export const GET_HAIR = `*[_type == "service" && "Hair" in categories[]->title]{
  title,
  "slug": slug.current
}`

export const GET_ESTHETICS = `*[_type == "service" && "Esthetics" in categories[]->title]{
  title,
  "slug": slug.current
}`;