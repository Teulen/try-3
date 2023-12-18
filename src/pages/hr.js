'use client'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/navigation';
import Header from './header';
import Footer from './footer';

export default function Hr() {
    const router = useRouter();
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-white'>
        <Header/>
        
        <Footer/>
    </div>
  )
}
