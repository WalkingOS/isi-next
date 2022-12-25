import Image from 'next/image';


export const ImageOverlay = ({src, classNmae, fade}: {src: string, fade?: boolean, classNmae?: string}) => {
  return (
    <div className={classNmae}>
      <div
        className="absolute bg-isi  opacity-50 top-0 right-0 bottom-0 left-0 z-[-1]"
      ></div>
      {fade && <div
        className="absolute bg-gradient-to-t from-white w-full h-[40%] -bottom-2 left-0 z-[-1]"
      ></div>}
      <Image
        src={src}
        alt=""
        layout="fill"
        objectFit="cover"
        className="z-[-2]"
        objectPosition='top'
      /> 
    </div>
  )
}