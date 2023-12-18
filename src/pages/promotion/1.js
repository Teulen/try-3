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

export default function Pro1() {
    const router = useRouter();
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-white'>
        <Header/>
        <div className='w-full h-[1650px] flex justify-center'>
          <div className='w-[880px] h-full flex flex-col'>
            {/* <div className='w-full h-[220px]  flex flex-col gap-3 max-sm:h-[600px]'> */}
              <h1 className='text-black font-normal mt-10 text-lg'>New Message: Бүх хэрэглэгчдэдээ өдөр бүр бэлэгтэй</h1>
              <div className='flex items-center'>
                <img src='https://www.unitel.mn/unitel/assets/calendar.f1b4b7efbebc6e614a366b8dc91b7f50.svg' className='w-3 h-3'/>
                <p className='text-gray-400 italic text-xs ml-1 my-4'>2023-12-01</p>
              </div>
              <p className='text-md text-black'>Юнител группийн бүх хэрэглэгч 12-р сарыг дуустал өдөр бүр бэлэг авах боломжтой боллоо. Та Toki апп-ийн New Message цэс рүү орж 31 өдрийн турш бэлэг авах боломжтой ба үүний тулд танд Toki апп байхад л хангалттай. Бэлгээ өөрөө ашиглахаас гадна хайртай дотны хүмүүстээ бэлэглэж болно шүү. Бусад операторын хэрэглэгчид Юнителийн шинэ дугаар аван Toki апп-д бүртгүүлснээр бэлгээ идэвхжүүлэх боломжтой болох юм.</p>
            {/* </div> */}

            <img src='https://www.unitel.mn/img/uploads/add07d9e4eb0f557c5ffd9ce168b4ae2.png'/>
            <p className='text-black text-md my-3'>Бэлгээ авсны дараа “Даалгавар” цэс дэх даалгавруудыг биелүүлэн супер бэлгүүдийн төлөө өрсөлдөх боломжтой. Үүнд Apple, Samsung загварын гар утас, ухаалаг цаг, чихэвч, зөөврийн компьютер зэрэг олон бэлгүүд багтаж байгаа бөгөөд нэг хэрэглэгч Дубай руу хосоороо аялах эрхийн эзэн болно. Шинэ оноо хайртай хүнтэйгээ, хамтдаа, халуун оронд угтахыг хүсэхгүй байна гэж үү?</p>
            <img src='https://www.unitel.mn/img/uploads/5d9ceae8c05003b4a653cb22fa29652b.png'/>
            <p className='text-black my-3'>Даалгавар биелүүлэх бүрд таны дансанд GEM оноо цугларах бөгөөд та оноогоороо супер шагналын эрх болон дата багц авахад зарцуулах боломжтой юм. Уг оноо нь урамшууллын үе бүрд хуримтлагдах бөгөөд та нэг супер бэлгийн төлөө хэдэн ч удаа өрсөлдөж болно.</p>
            <p className='text-black my-3'>Супер бэлгийн эздийг 12-р сарын 8, 18, 28-нд Unitel албан ёсны фейсбүүк хуудсаар тодрууна. Бэлгээ аван, даалгавраа биелүүлж “Шинэ бүхнийг догдлол дүүрэн угтаарай”.</p>
            <div className='w-full h-[100px] relative flex justify-end gap-2 max-sm:items-end'>
              <p className='text-black italic ml-8 absolute left-1'>Урамшуулал дуусах: 2023-12-31</p>
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
