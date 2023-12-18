'use client'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';

export default function Pro2() {
    const router = useRouter();
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-white'>
        <Header/>
        <div className='w-full h-[1300px] flex justify-center'>
          <div className='w-[880px] h-full flex flex-col'>
            {/* <div className='w-full h-[220px]  flex flex-col gap-3 max-sm:h-[600px]'> */}
              <h1 className='text-black font-normal mt-10 text-lg'>Монголын анхны branded Roblox тоглоом</h1>
              <p className='text-black'>Roblox тоглоом нь анх 2006 онд бий болсон цагаасаа хойш өдгөө 50 гаруй сая тоглоомуудыг нэгтгэсэн асар том платформ юм. Тэгвэл энэхүү тоглоомын жагсаалтад Юнител групп нь Монголд анх удаа өөрсдийн хөгжүүлсэн Roblox тоглоомын серверийг бүтээж буйг бахархалтайгаар танилцуулж байна.</p>
              <p className='text-black mt-6'>Бид бүхэн “Welcome to U Planet” гэсэн тоглоомын серверт тааруулж 14-23 насны залуусын брэнд болох U brand-ийн дүр төрх, урамшууллыг шингээж өгснөөрөө анхдагч нь болж байна. Энэхүү тоглоомын серверийг бүтээснээрээ Монгол тоглогчид дэлхийн томоохон платформоор дамжуулан бусад орны хүүхэд залуустай харилцаж,  өөрсдийн  брэндийг сурталчлах, танилцуулж өгөхөд туслах болно. </p>
              <p className='text-black mt-6'>Мөн Юнител групп нь залуу үеийнхэндээ зориулж, Монголын анхны брэнд болсон Roblox тоглоомыг бүтээснээрээ  технологи, инновацлаг байдлын оролцоог дэмжиж, дижитал орон зайд цагаа зөв боловсон, зугаатай өнгөрүүлэх боломжийг энэхүү тоглоомоороо бүрдүүлж байна. Мөн адал явдлыг эрэлхийлдэг, найз нөхөдтэйгөө өрсөлдөх дуртай хэн бүхэн U Planet-т тоглох боломжтой юм шүү. U Planet нь нийт дөрвөн том тоглоомтой. Үүнд: </p>
              <p className='text-black ml-10 mt-6'>Чиний авхаалж, самбааг шалгах  Data Tower</p>
              <p className='text-black ml-10 mt-3'>Мөснөөс зугтаах адал буюу Icy jumps</p>
              <p className='text-black ml-10 mt-3'>Халуун хайлмагаас бултах Floor is Lava</p>
              <p className='text-black ml-10 mt-3'>Нууцлаг нэгнийг олж, цасаар онох  Prop hunt гэсэн тоглоомууд бий.</p>
              <p className='text-black mt-6'> Юнителийн хэрэглэгч та U planet-ын ертөнцүүдээр аялахыг хүсвэл доорх QR кодоор дамжин аялаарай. Цаашдаа тоглоомын ертөнц гэлтгүй бүхий л виртуал орон зайд томоохон үсрэлтийг хийж түрүүлж алхахаар төлөвлөж байгаа тул хэрэглэгч та бүхэн бидэнтэй цаг үргэлж хамт байгаарай.  </p>

              <img src='https://www.unitel.mn/img/uploads/caab29dc56eb00f3de9f5ede985c5b28.jpg' className='mt-4 mb-6'/>

            <div className='w-full h-[100px] relative flex justify-end gap-2 max-sm:items-end'>
              <button className='w-16 h-6 bg-cyan-400 flex justify-center items-center rounded-lg'>
                <FontAwesomeIcon icon={faTwitter} style={{width: '15px'}} className=' mr-2 text-white'/>
                <p className='text-xs'>Tweet</p>
              </button>
              <button className='w-16 h-6 bg-cyan-800 flex justify-center items-center rounded-lg mr-3'>
                <FontAwesomeIcon icon={faFacebookF} style={{width: '15px'}} className=' mr-2 text-white'/>
                <p className='text-xs'>Share</p>
              </button>
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}
