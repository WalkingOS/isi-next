import {groq} from 'next-sanity';

export const siteSettingsQuery = groq`
	*[_id == "siteSettings"][0]{
		...,
		navigation[]{
			...,
			link->{_type, slug}
		}
	}
`;

export const menuQuery = groq`
{
  "title": "Behandlungen",
  "items": [
    {
      "title": "Beauty",
      "items": *[_type == "service" && "Beauty" in categories[]->title] | { "title": title, "slug": slug.current }
    },
    {
      "title": "Hair",
      "items": *[_type == "service" && "Hair" in categories[]->title] | { "title": title, "slug": slug.current }
    },
    {
      "title": "Esthetics",
      "items": *[_type == "service" && "Esthetics" in categories[]->title] | { "title": title, "slug": slug.current }
    }
  ]
}
`;