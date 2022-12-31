
import Link from 'next/link'
import Image from 'next/image'

interface ICard {
  title: string;
  description: string;
  href:string;
  src: string;
  alt: string;
}


export const Card = ({ src, alt, title, description, href }: ICard) => (
  <Link className="group relative block w-full h-[260px] rounded-3xl shadow-lg hover:shadow-xl object-center overflow-hidden ease-in-out duration-300" href={href}>
    <Image
      // loader={({ src, width }) => `${process.env.NEXT_PUBLIC_IMAGE_CDN_URL + src}?w=${width}`}
      loader={({ src, width }) => `${src}?w=${width}`}
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className='group-hover:scale-105 group-hover:ease-in-out ease-in-out duration-300 '
      // sizes="(min-width:1500px): 200px, (min-width:1024px): 200px, (min-width:500px) 200px, (min-width:0px) 200px"
    />
    <span className='text-white absolute px-[16px] py-[8px] pb-[20px] bg-[#FFDCDC] w-full h-fit bottom-0 bg-opacity-50 backdrop-blur-md drop-shadow-md'>
      <h3 className='text-lg font-bold whitespace-no-wrap'>{title}</h3>
      <p className='text-sm	 line-clamp-2'>{description}</p>
    </span>
  </Link>
);