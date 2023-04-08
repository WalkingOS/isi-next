"use client"

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


export const PreFooter = () => {
  return (
    <ul className='flex flex-wrap justify-between w-full '>
          <li className='w-1/2 md:w-1/4 mb-8'>
            <div className='text-center'>
              <LocationOnOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>ISI Noor</h5>
              <span className='text-black-50 text-[14px]'>Schleifweg 25, 90409, Nürnberg</span>
            </div>
          </li>
          <li className='w-1/2 md:w-1/4'>
            <div className='text-center'>
              <PhoneAndroidOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>Rufen sie an</h5>
              <span className='text-black-50 text-[14px]'>0911 92348906</span>
            </div>
          </li>
          <li className='w-1/2 md:w-1/4'>
            <div className='text-center'>
              <EmailOutlinedIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>schreiben sie uns</h5>
              <span className='text-black-50 text-[14px]'>sie sind eine email von uns entfernt</span>
            </div>  
          </li>
          <li className='w-1/2 md:w-1/4 '>
            <div className='text-center'>
              <InstagramIcon className='h-[36px] w-[36px]'/>
              <h5 className='font-bold text-[16px]'>Instagram</h5>
              <span className='text-black-50 text-[14px]'>folgen sie uns Instagram</span>
            </div>  
          </li>
        </ul>
  )
}