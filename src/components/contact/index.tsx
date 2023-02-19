export const Contact = ({className}: {className?: string}) => {
  return (
    <>
      <div className={`flex flex-col justify-center min-h-[230px] mx-auto px-4 md:px-12 lg:px-24 bg-white-100 shadow-lg py-8 ${className}`}>
        <h2 className="mb-6 leading-none text-[18px] text-center font-bold">Noch unklar? Für eine Erstberatung oder Kontaktierung sind wir offen.</h2>
        <div className="flex flex-col	 md:flex-row gap-4 md:gap-6 justify-center">
          <a href="/kontakt" className="md:w-[256px] hover:cursor-pointer text-[16px] font-bold py-3 text-white-100 w-full text-center bg-isi rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 object-center overflow-hidden hover:scale-[1.01] active:scale-[1]">Termin ausmachen</a>
          <a href="/kontakt" className="md:w-[256px] hover:cursor-pointer text-[16px] font-bold py-3 text-isi-100 w-full text-center bg-white-100 rounded-xl shadow-lg hover:shadow-xl ease-in-out duration-300 object-center overflow-hidden hover:scale-[1.01] active:scale-[1]">Kontaktieren</a>
        </div>
      </div>
    </>
  )
}