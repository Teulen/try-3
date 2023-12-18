import Image from 'next/image'
import Header from './header'
import Footer from "./footer"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Home() {


  return (
    
    <main className='bg-white'>
     <Header/>
     <FontAwesomeIcon icon={faFacebook} style={{width: '50px'}} className='ml-2 text-cyan-700 fixed right-5 top-40'/>
  
      {}
      <div classname='h-28 w-full'  >
       
            <img className='max-sm:hidden' src='https://www.unitel.mn/img/banners/e7ec9-new-message_unitel-banner_1920x541.png'  />   
            <button className='right-16 bottom-48 h-10 w-32 text-white bg-lime-500 rounded-md max-sm:hidden absolute '>ДЭЛГЭРЭНГҮЙ</button> 
          
      </div>
      <div className='h-full w-full flex justify-center'>
      <div className=' h-full w-[1000px] gap-4 pt-4  grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6'>
                           
         <div className='h-40 w-36  text-center  rounded-md   bg-white hover:bg-lime-500 group flex justify-center items-center flex-col gap-4 '>
           <Image
        src="https://www.unitel.mn/unitel/assets/1_cll.ae84732b801f01f474ca65b137f90826.svg"
        alt="Description of the image" 
        width={48}
        height={100} 
      />
          <h4 class="text-black font-bold ">ДАТА</h4>
           <p className='text-slate-500 group-hover:text-white'>Багц авах</p>
         </div>                     
         <div className='h-40 w-36 text-center rounded-md bg-white  hover:bg-lime-500  group mb-2 flex justify-center items-center flex-col gap-4'>
          <Image
        src="https://www.unitel.mn/unitel/assets/2_pmnt.75da4ad94c0a0cb9cdd5064057f0ee2d.svg" 
        alt="Description of the image" 
        width={48}
        height={100} 
        />
           <h4 class="text-black font-bold">ТӨЛБӨР</h4>
           <p className='text-slate-500  group-hover:text-white'>Шалгах , Төлөх</p>
         </div>     
         <div className='h-40 w-36 text-center rounded-md bg-white  hover:bg-lime-500 group flex justify-center items-center flex-col gap-4'>
         <Image
        src="https://www.unitel.mn/unitel/assets/3_nwnmbr.501a8c76d8091be8c5902ccf64661ee3.svg" 
        alt="Description of the image" 
        width={48}
        height={100} 
        /> 
           <h4 class="text-black font-bold">ШИНЭ ДУГААР</h4>
           <p className='text-slate-500 group-hover:text-white '>Захиалах , Авах</p>
         </div>     
         <div className='h-40 w-36  text-center rounded-md bg-white hover:bg-lime-500 group flex justify-center items-center flex-col gap-4'>
         <Image
        src="https://www.unitel.mn/unitel/assets/4_unt.f1d2b897338f3f90be3ff9d07fa46160.svg" 
        alt="Description of the image" 
        width={48}
        height={100} 
        />
           <h4 class="text-black font-bold">НЭГЖ</h4>
           <p className='text-slate-500 group-hover:text-white'>Авах</p>
         </div>     
         <div className='h-40 w-36  text-center rounded-md bg-white  hover:bg-lime-500 group flex justify-center items-center flex-col gap-4'>
         <Image
        src="https://www.unitel.mn/unitel/assets/5_simcrd.8d03783af0b40a5b62002b48969815c3.svg" 
        alt="Description of the image" 
        width={48}
        height={100} 
        />
           <h4 class="text-black font-bold">СИМ КАРТ</h4>
           <p className='text-slate-500 group-hover:text-white'>идэвхжүүлэх</p>
         </div>     
         <div className='h-40 w-36 rounded-md bg-white     hover:bg-lime-500 group flex justify-center items-center flex-col gap-4'>
         <Image
        src="https://www.unitel.mn/unitel/assets/6_rming.3fc0b6a4f36b360675bfb11529df27e8.svg" 
        alt="Description of the image" 
        width={48}
        height={100} 
        />
          <h4 class="text-black font-bold ">РОУМИНГ</h4>
           <p className='text-slate-500 group-hover:text-white'>Нээх , Хаах</p>
         </div>   
          </div>
        </div> 
        <Footer/>
    </main>
  )
}