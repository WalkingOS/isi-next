"use client"

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { IMenuItem } from '../header';
import Link from 'next/link';


export const RenderItems = ({menuItem, onLinkClick}: {menuItem: IMenuItem; onLinkClick: () => void}) => {

  const collapseItems:IMenuItem[] = [
    menuItem,
    {
      title: "Preise",
    },
    {
      title: "Über Uns",
    },
    {
      title: "Kontakt",
    },
    {
      title: "Datenschutz",
    },
    {
      title: "Impressum",
    },
  ];

  return (
    <div className='flex gap-5 flex-col'>
      {collapseItems?.map((item) => {
        if (item.items && item.items.length) {
          return (
            <>
            <TreeView
              className="text-white"
              defaultCollapseIcon={<KeyboardArrowUpIcon />}
              defaultExpandIcon={<ExpandMoreIcon />}
              sx={{ flexGrow: 1, overflowY: 'auto' }}
              multiSelect={false}
            >
              <TreeItem nodeId={item.title} label={item.title}>
                {item.items?.map((it) => {
                  return (
                    <>
                      <TreeItem className="my-4" nodeId={it.title} label={it.title}>
                        <ul>
                          {it.items?.map((i) => {
                            return (
                              <>
                                <li>
                                  <Link onClick={onLinkClick} className={`py-1 pl-4 block hover:bg-[#0000000a] active:bg-red-100`} href={"/" + it.title.toLowerCase() + "/" + i.slug}>{i.title}</Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </TreeItem>
                    </>
                  );
                })}
              </TreeItem>
            </TreeView>
            </>
          );
        } else {
          return (
            <>
              <Link onClick={onLinkClick} className="px-3 text-white font-bold text-[1.2rem] hover:bg-[#0000000a]" href={"/" + (item.title === "Über Uns" ? "ueber-uns" : item.title?.toLowerCase())}>{item.title}</Link>
            </>
          );
        }
      })}
    </div>
  );
};