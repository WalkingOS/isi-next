import Link from 'next/link';

export default function Menu() {
  return (
    <div className="mt-5 border-b border-gray-300">
    <ul className="flex flex-wrap text-xl">
      <li className="mr-6">
        <Link
          href="/services/"
          className="border-none text-gray-700 hover:text-gray-900"
        >
          Services
        </Link>
      </li>
      <li className="mr-6">
        <Link
          href="/ueber-uns/"
          className="border-none text-gray-700 hover:text-gray-900"
        >
          Über Uns
        </Link>
      </li>
    </ul>
  </div>
  )
}