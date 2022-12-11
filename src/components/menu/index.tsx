/* import Link from 'next/link';

export default function Menu() {
  return (
    <div className="mt-5 border-b border-gray-300">
      <ul className="flex flex-wrap text-xl">
        <ul>
          <li className="mr-6">
            <Link
              href="/beauty/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Beauty
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/hair/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Hair
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/esthetics/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Esthetics
            </Link>
          </li>
        </ul>
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
}*/

import Link from 'next/link';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronDownIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronDownIcon />}
      sx={{ flexGrow: 1, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}


export default function Menu() {
  const collapseItems = [
    {
      title: "service",
      items: [
        {
          title: "beauty",
          items: [
            "b1", "b2", "b3"
          ]
        },
        {
          title: "Hair",
          items: [
            "b1", "b2", "b3"
          ]
        },
        {
          title: "Esthetics",
          items: [
            "b1", "b2", "b3"
          ]
        }
      ]
    },
    {
      title: "Preise",
    },
    
  ];

  return (
    <nav className="mx-auto px-4 md:px-12  fixed px-3 py-3 shadow-lg z-40 w-screen max-w-full flex justify-between">
      <Link href="/">ISI NOOR</Link>
        {/*<FileSystemNavigator></FileSystemNavigator>*/}
      <Burger />
    </nav>
  )
}

const Burger = () => {
  return (
    <>
      <button>
        X
      </button>
    </>
  )
}