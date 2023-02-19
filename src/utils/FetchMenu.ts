import { sanityClient } from "../../sanity.js";


export const fetchMenu = async () => {

  const beauty = await sanityClient.fetch(`*[_type == "service" && "Beauty" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const hair = await sanityClient.fetch(`*[_type == "service" && "Hair" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  const esthetics = await sanityClient.fetch(`*[_type == "service" && "Esthetics" in categories[]->title]{
    title,
    "slug": slug.current
  }`);

  return {
    props: {
      beauty,
      hair,
      esthetics
    }
  }
}