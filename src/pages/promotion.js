'use client'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/navigation';
import Header from './header';
import Footer from './footer';

export default function Promotion() {
    const router = useRouter();
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-white'>
        <Header/>
        <div className='w-full h-[1100px] flex items-center flex-col max-sm:h-[3200px] sm:h-[1830px] md:h-[1830px] lg:h-[1100px] xl:h-[1100px]'>
            <div className='w-[900px] h-full grid grid-cols-3 gap-4 mt-10 max-sm:w-full max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <div onClick={() => {router.push("/promotion/1")}} className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/6af20-new-message_unitel-banner_500x266.png' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>New Message: Бүх хэрэглэгчдэдээ өдөр бүр бэлэгтэй</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Юнител группийн бүх хэрэглэгч 12-р сарыг дуустал өдөр бүр... </p>
                    </div>
                </div>
                <div onClick={() => {router.push("/promotion/2")}} className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/0cbcc-500x266-2-.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Монголын анхны branded Roblox тоглоом</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Roblox тоглоом нь анх 2006 онд бий болсон цагаасаа хойш... </p>
                    </div>
                </div>
                <div onClick={() => {router.push("/promotion/3")}} className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/14520-jijig-banner.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>700'000₮ хүртэлх хөнгөлөлттэй үнээр гар утсаа шинэчлээрэй</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Юнителийн хэрэглэгчид Toki лизингийн үйлчилгээ ашиглан... </p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/c3077-500x266-1-.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>U brand-ийн залуус автобусаар зорчих бүрд дататай</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Сайн уу U brand-ийн залуусаа. Та нарт зориулсан гоё ур...</p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/3d06f-t-r-lzh-alhana-unitel-500x266.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Өнгөрсөн, одоо, ирээдүйд хамтдаа түрүүлж алхана</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Юнител групп нь үүсгэн байгуулагдсан цагаасаа эхлэн хэрэглэгч т... </p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/bbbbf-medee-banner-500x266.png' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Юнител групп орон даяар 5G сүлжээний туршилтын станцаа асаалаа</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>ХХЗХ-ны А287 тоот тушаал, 20030009 тоот зөвшөөрлийн да... </p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/2e1bb-500x266_web.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Юнител групп: 5G is here</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Мэдээллийн технологи харилцаа холбооны салбарт олон чиглэл...</p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/71f2b-artboard-1-copy.jpg' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Монголд 5G сүлжээний туршилтын станц цар хүрээгээ тэлсээр 14 байршилд аслаа</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Хэдхэн хоногийн өмнө Юнител групп Монголд анх удаа нийслэл...</p>
                    </div>
                </div>
                <div className='bg-transparent shadow-sm rounded-xl border-2 border-slate-300 hover:scale-105 cursor-pointer duration-150 hover:shadow-2xl'>
                    <img src='https://www.unitel.mn/img/news/c0fd2-dizai-n_500x266.png' className='object-fit rounded-t-xl'/>
                    <div className='flex items-center flex-col'>
                        <h1 className='mt-5 text-black ml-3 mr-3'>Дараа төлбөрт үйлчилгээ: Таны entertainment боломж</h1>
                        <p className='mt-3 text-xs text-slate-300 opacity-90 ml-3 mr-3'>Дараа төлбөрт үйлчилгээний хэрэглэгч та өөрийн ...</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100px] flex justify-center mt-10'>
                <div className='w-[1000px] h-full flex  justify-end gap-0.5'>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded hover:bg-lime-600 group'>
                        <FontAwesomeIcon icon={faChevronLeft} style={{width: '10px'}} className='group-hover:text-white text-slate-500'/>
                    </button>
                    <button className='h-9 w-8 opacity-70 bg-lime-600 rounded'>1</button>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded text-black hover:bg-lime-600 hover:text-white'>2</button>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded text-black hover:bg-lime-600 hover:text-white'>3</button>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded text-black hover:bg-lime-600 hover:text-white'>4</button>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded text-black hover:bg-lime-600 hover:text-white'>5</button>
                    <button className='h-9 w-8 opacity-70 bg-slate-300 rounded hover:bg-lime-600 group'>
                        <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='group-hover:text-white text-slate-500'/>
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
