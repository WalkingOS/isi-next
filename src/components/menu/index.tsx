import Link from 'next/link';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TreeItem from '@mui/lab/TreeItem';
import { useEffect, useState } from 'react';
// import { GetStaticProps } from 'next';

// import {
//   createClient
// } from "next-sanity";

export interface IMenuItem {
  title: string;
  slug?: string;
  items?: IMenuItem[];
}

const RenderItems = ({beautyItems, hairItems, estheticsItems}) => {

  const collapseItems:IMenuItem[] = [
    {
      title: "Behandlungen",
      items: [
        {
          title: "Beauty",
          items: beautyItems
        },
        {
          title: "Hair",
          items: hairItems
        },
        {
          title: "Esthetics",
          items: estheticsItems
        }
      ]
    },
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
              aria-label=""
              defaultCollapseIcon={<KeyboardArrowUpIcon />}
              defaultExpandIcon={<ExpandMoreIcon />}
              sx={{ flexGrow: 1, overflowY: 'auto' }}
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
                                  <Link className="py-1 pl-4 block hover:bg-[#0000000a]" href={"/" + it.title.toLowerCase() + "/" + i.slug}>{i.title}</Link>
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
              <Link  className="px-3 text-white font-bold text-[1.2rem] hover:bg-[#0000000a]" href={"/" + (item.title === "Über Uns" ? "ueber-uns" : item.title?.toLowerCase())}>{item.title}</Link>
            </>
          );
        }
      })}
    </div>
  );
};

type IMenu = {
  beautyItems: IMenuItem[];
  hairItems: IMenuItem[];
  estheticsItems: IMenuItem[]
};

export const Menu = (props: IMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const [navVisible, setNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  
  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollDirection = prevScrollPos > scrollY ? 'up' : 'down';

      // const cta = window.document.querySelector("#ctaButton");
      // cta.offsetTop - cta.clientHeight)
      if ((scrollY > 400)) {
        setNavVisible(false);
      } 
  
      if (scrollDirection === "up") {
        setNavVisible(true);
      }
      
      if ((scrollY < 400)) {
        setNavVisible(true);
      } 
  
      setPrevScrollPos(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`ease-in duration-300 ${navVisible ? '' : 'opacity-0'}`}>
      <div className="bg-isi bg-opacity-50 drop-shadow-md z-[300] mx-auto px-4 md:px-12 fixed top-0 px-3 py-3 z-40 w-screen max-w-full flex justify-between">
        <Link className='text-white' href="/">ISI NOOR</Link>
        <button className="relative" onClick={() => setIsOpen(!isOpen)}>
           <MenuRoundedIcon className={`text-white ease-in-out duration-300 ${isOpen ? 'opacity-0'  : 'opacity-100'}`}/>
           <CloseRoundedIcon className={`absolute left-0 md:-left-4 text-white ease-in-out duration-300 ${!isOpen ? 'opacity-0'  : 'opacity-100'}`}/>
        </button>
      </div>
      <div className={`overflow-auto fixed bg-isi-light z-[30] pt-[10em] px-8 md:px-10 h-[100vh] w-[100vw] md:w-[50vw] left-0 translate-x-[100vw] md:translate-x-[200%] ease-in-out duration-300 bg-opacity-50 backdrop-blur-lg drop-shadow-md opacity-0 ${isOpen ? 'opacity-100 translate-x-[0vw] md:translate-x-[100%]' : ''}`}>
        <RenderItems beautyItems={props.beautyItems} hairItems={props.hairItems} estheticsItems={props.estheticsItems} />
      </div>
      {
        isOpen && <div onClick={() => setIsOpen(false)} className={`ease-in duration-300 opacity-0 bg-opacity-10 backdrop-blur-sm drop-shadow-md overflow-auto fixed bg-isi-dark bg-opacity-10 h-[100vh] w-[100vw] top-0 left-0 right-0 bottom-0 ${isOpen ? 'opacity-100 z-10' : ''}`}></div>
      }
    </nav>
  )
}

/**
 * 
 * 
export const getStaticProps: GetStaticProps = async () => {
  const config = {

     projectId: "rm9qzj55",
     dataset: "production",
     apiVersion: "2022-10-10",
     useCdn: "production",
   
   }
   
   // Set up the client for fetching data in the getProps page functions
   const sanityClient = createClient(config as any)
 
 
   const services = await sanityClient.fetch('*[_type == "service"');
 
 
   // Return the services as a prop for the component
   return {
     props: {
       services,
     },
   }
 }
 
 * 
 */
