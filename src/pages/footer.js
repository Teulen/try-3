import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <div className='w-full h-12 bg-slate-600 flex justify-center max-sm:h-80'>
        <div className='w-[900px] h-full flex items-center max-sm:flex-col max-sm:items-start max-sm:ml-5 '>
            <a className='h-10 text-xs flex justify-center items-center cursor-pointer mr-1'>
            Бидний тухай
            </a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Тогтвортой хөгжил</a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Салбарын байршил</a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Хэвлэлийн мэдээ</a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Хүний нөөц</a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Холбоо барих</a>
            <p className='max-sm:hidden'>|</p>
            <a className='h-10 text-center text-xs cursor-pointer justify-center items-center flex ml-1 mr-1'>Лого</a>
            <div className='ml-10 text-slate-400 text-xs '>© 2006-2023 Юнител групп</div>
        </div>
    </div>
  )
}
