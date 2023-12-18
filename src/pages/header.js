'use client'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight, faFaceGrimace} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Promotion from './promotion';

export default function Header() {
    const router = useRouter();
  return (
    <div className='w-full max-sm:h-16 sm:h-28 md:h-28 lg:h-36 xl:h-36'>
    <div className='w-full flex flex-col max-sm:h-16 sm:h-16 md:h-16 lg:h-24 xl:h-24'>
        <div className='w-full h-2/6 bg-slate-700 flex justify-center relative max-sm:invisible sm:invisible md:invisible lg:visible xl:visible max-sm:fixed sm:fixed md:fixed lg:relative xl:relative'>
            <div className='w-[900px] h-full flex absolute'>
                <div className='w-5/12 h-full grid grid-cols-6 grid-flow-row gap-4 ml-3'>
                    <a className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>Юнител</a >
                    <a className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>Юнивишн</a >
                    <a className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>Байгуулга</a >
                    <a onClick={() => {
                        router.push("/")
                    }} className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>U-Point</a >
                    <a className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>LookTV</a >
                    <a className='w-full h-full flex justify-center items-center cursor-pointer text-xs'>Expat</a >
                </div>
            </div>
        </div>
        <div onClick={() => {
                        router.push("/page")
                    }} className='w-full max-sm:h-full sm:h-full md:h-full lg:h-4/6 xl:h-4/6 bg-white flex justify-center relative shrink'>
            <div className='max-sm:w-full sm:w-full md:w-full lg:w-[900px] xl:w-[900px] h-full shrink-0 flex items-center justify-end relative'>
                <a className='w-[12%] h-full flex items-center cursor-pointer left-0 absolute'>
                    <img src='https://www.unitel.mn/img/logo1.svg' className='w-9 h-9'/>
                    <h1 className='text-black font-semibold text-2xl max-sm:invisible   sm:invisible md:visible lg:visible xl:visible'>UNITEL</h1>
                </a>

                <div className='w-[50%] h-full justify-between flex flex items-center max-sm:hidden sm:invisible md:invisible lg:visible xl:visible 2xl:visible'>
                    <a className='w-[30%] h-full flex items-center cursor-pointer justify-center'>
                        <h1 className='text-black text-sm'>БҮТЭЭГДЭХҮҮН</h1>
                        <FontAwesomeIcon icon={faChevronDown} style={{width: '10px'}} className='ml-2 text-slate-500'/>
                    </a>
                    <a className='w-[20%] h-full flex items-center cursor-pointer justify-center'>
                        <h1 className='text-black text-sm'>ГАР УТАС</h1>
                    </a>
                    <a onClick={() => {router.push("/promotion")}} className='w-[28%] h-full flex bg-red-500 items-center cursor-pointer justify-center'>
                        <h1 className='text-black text-sm'>УРАМШУУЛАЛ</h1>
                    </a>
                    <a className='w-[20%] h-full flex items-center cursor-pointer justify-center'>
                        <h1 className='text-black text-sm'>ТУСЛАМЖ</h1>
                        <FontAwesomeIcon icon={faChevronDown} style={{width: '10px'}} className='ml-2 text-slate-500'/>
                    </a>
                </div>
                <button className='h-2/4 w-[8%] bg-green-500 rounded-xl font-bold ml-5 max-sm:w-1/6'>НӨАТ</button>
                <a className='cursor-pointer'><FontAwesomeIcon icon={faUser} style={{width: '20px'}} className='ml-2 mr-2 text-slate-500'/></a>
            </div>
        </div>
    </div>
    <div className='w-full h-[40px] bg-gray-100 flex justify-center max-sm:invisible sm:visible md:visible lg:visible xl:visible relative'>
        <div className='w-[880px] h-full flex items-center'>
            <a className='text-slate-500 cursor-pointer text-xs'>Нүүр хуудас</a>
            <FontAwesomeIcon icon={faChevronRight} style={{width: '4px'}} className='ml-5 mr-5 text-slate-500'/>
            <a className='text-slate-500 cursor-pointer text-xs'>U-Point</a>
        </div>
    </div>
    </div>
  )
}
