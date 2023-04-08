import Link from "next/link"


export const Footer = () => {
  return (
    // rounded-tr-[2em]
    <footer className="isi-footer relative bg-black text-white text-sm">
      <div className="container">
      <div className='flex flex-col sm:flex-row pb-8 pt-12 justify-between '>
        <span className='text-[32px] self-center'>
          ISI NOOR
        </span>

        <section className="w-[auto] md:w-[260px]">
          <h6 className='mb-2'>Öffnungszeiten</h6>
          <ul >
            <li className='flex justify-between'>
              <span>
                Mo-Fr:
              </span>
              <span>
                <time>10:00</time> - <time>19:00</time>
              </span>
            </li>
            <li className='flex justify-between'>
              <span>
                Sa:
              </span>
              <span>
                <time>09:00</time> - <time>15:00</time>
              </span>
            </li>
          </ul>
        </section>
      </div>
      <div className=''>
        <div className='flex flex-col sm:flex-row items-center justify-between border-t border-white py-8'>
          © Copyright {new Date().getFullYear()} {"ISI NOOR"}.
          <ul className="flex flex-wrap">
            <li className="self-center border-r border-white px-2"><Link href="/impressum">Impressum</Link></li>
            <li className="self-center border-r border-white px-2"><Link href="/datenschutz">Datenschutz</Link></li>
            <li className="self-center pl-2"><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
 
      </div>
      </div>

    </footer>
  )
}