

export const Footer = ({appconfig}) => {
  return (
    // rounded-tr-[2em]
    <footer className="isi-footer relative px-4 lg:px-24 bg-black text-white text-sm">
      <div className='pb-8 pt-12 flex justify-between'>
        <span className='text-[32px] self-center'>
          ISI NOOR
        </span>

        <section className="w-[260px]">
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
        <div className='flex justify-between border-t border-white py-8'>
          © Copyright {new Date().getFullYear()} {appconfig}.
          <ul className="flex">
            <li className="self-center border-r border-white px-2"><a href="/impressum">Impressum</a></li>
            <li className="self-center border-r border-white px-2"><a href="/datenschutz">Datenschutz</a></li>
            <li className="self-center pl-2"><a href="/kontakt">Kontakt</a></li>
          </ul>
        </div>
 
      </div>
    </footer>
  )
}