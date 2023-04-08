import Image from 'next/image';

export const ImageOverlay = ({src, className, fade}: {src: string, fade?: boolean, className?: string}) => {
  return (
    <div className={className}>

			<Image
				className='h-auto w-full object-cover '
				fill
				alt={``}
				src={src}
			/>
      <div
        className="absolute bg-isi  opacity-50 top-0 right-0 bottom-0 left-0"
      ></div>
      {fade && <div
        className="absolute bg-gradient-to-t from-white w-full h-[40%] -bottom-2 left-0"
      ></div>}
    </div>
  )
}