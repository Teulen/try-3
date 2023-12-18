'use client'
import Image from 'next/image'
import Header from './header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faHome , faArrowDown, faArrowRight, faChevronDown, faChevronRight, faCheck, faCircleCheck, faCircleChevronRight, faCircleChevronDown, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Footer from './footer';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-white'>
      <Header/>

      {/* Zurag */}
      <div className='w-full h-1/2'>
        <img src='https://www.unitel.mn/img/Upoint.jpg' className='object-fit'/>
      </div>


      {/* text */}
      <div className='w-full h-[400px] flex justify-center max-sm:h-[540px]'>
        <div className='h-full w-[1000px] flex flex-col'>
          <h1 className='text-black font-semibold  mt-10'>ТАНИЛЦУУЛГА</h1>
          <p className='text-black mt-5'>U-Point карт болон аппликейшнийг ашиглан хөтөлбөрт нэгдсэн бүх компаниар үйлчлүүлэх бүрдээ урамшууллын оноо цуглуулж, цуглуулсан оноогоо зарцуулах боломжийг “U-Point” олгодог.</p>
          <p className='text-black mt-5'>Юнител Группийн хэрэглэгчид дансаа цэнэглэх, төлбөр төлөх бүрдээ үнийн дүнгийн 3-10%-ийн “U-Point” оноо цуглуулан, зарцуулах боломжтой.</p>
          <h2 className='text-black font-semibold mt-5'>Хөтөлбөрт хамрагдсанаар үүсэх давуу талууд:</h2>
          <div className='grid grid-cols-3 mt-5 gap-2 max-sm:grid-cols-1'>
            <div className='flex '>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black '>Илүү өргөн хүрээ</p>
            </div>
            <div className='flex '>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black max-sm:mb-2'>Бүгдийг нэгтгэсэн карт</p>
            </div>
            <div className='flex '>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black '>Хялбар хэрэглээ</p>
            </div>
            <div className='flex '>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black max-sm:mb-2'>Давхар давхар</p>
            </div>
            <div className='flex '>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black '>Онцгой боломжууд</p>
            </div>
            <div className='flex items-center'>
              <img src='https://www.unitel.mn/unitel/assets/scss.bb97e8aac2eafeaa8d02663566d521c5.svg' className='w-4 h-4 ml-2 mr-2 mt-1'/>
              <p className='text-black '>Дуусашгүй</p>
            </div>
          </div>
        </div>
      </div>


      {/* Saaral heseg */}
      <div className='w-full h-[350px] flex bg-slate-200 justify-center max-sm:h-[1060px] sm:h-[450px]'>
        <div className='h-full w-[1000px] grid grid-cols-3 max-sm:grid-cols-1'>
          <div className=' flex flex-col items-center mt-12'>
            <img className='w-20 h-20' src='https://www.unitel.mn/unitel/assets/u-icon1.e664dc37b88d5a1387a30a4f48c4b8ce.svg'/>
            <div className='w-[90%] h-1/2  flex items-center flex-col justify-center text-center'>
              <h1 className='mb-3 text-black font-semibold'>ХӨТӨЛБӨРТ ХАМРАГДАХ</h1>
              <p className='text-wrap text-black'>Хэрэглэгч мессэжээр хүсэлт илгээх, U-Point карт авснаар хөтөлбөрт хамрагдах боломжтой болно.</p>
            </div>
            <div className='w-2/3 h-[10%] flex justify-center items-center cursor-pointer'>
              <a className='text-green-300'>ДЭЛГЭРЭНГҮЙ</a>
              <FontAwesomeIcon icon={faCircleChevronRight} style={{width: '15px'}} className='ml-2 text-green-300'/>
            </div>
          </div>
          <div className=' flex flex-col items-center mt-12'>
            <img className='w-20 h-20' src='https://www.unitel.mn/unitel/assets/u-icon2.24cf53abc888cd5435acaf40b2364b2b.svg'/>
            <div className='w-[75%] h-1/2  flex items-center flex-col justify-center text-center'>
              <h1 className='mb-3 text-black font-semibold'>ОНОО ЦУГЛУУЛАХ</h1>
              <p className='text-wrap text-black'>Хэрэглэгч дансаа цэнэглэх, хугацаандаа төлбөр төлөх бүрдээ U-Point оноо цуглуулна.</p>
            </div>
            <div className='w-2/3 h-[10%] flex justify-center items-center cursor-pointer'>
              <a className='text-green-300'>ДЭЛГЭРЭНГҮЙ</a>
              <FontAwesomeIcon icon={faCircleChevronRight} style={{width: '15px'}} className='ml-2 text-green-300'/>
            </div>
          </div>
          <div className=' flex flex-col items-center mt-12'>
            <img className='w-20 h-20' src='https://www.unitel.mn/unitel/assets/u-icon3.0c5e92f178abd3c682fb1741df775d5e.svg'/>
            <div className='w-[75%] h-1/2  flex items-center flex-col justify-center text-center'>
              <h1 className='mb-3 text-black font-semibold'>ОНОО ЗАРЦУУЛАХ</h1>
              <p className='text-wrap text-black'>Хэрэглэгч U-Point оноогоо 1 U-Point = 1 төгрөг гэсэн зарчмаар зарцуулах боломжтой.</p>
            </div>
            <div className='w-2/3 h-[10%] flex justify-center items-center cursor-pointer'>
              <a className='text-green-300'>ДЭЛГЭРЭНГҮЙ</a>
              <FontAwesomeIcon icon={faCircleChevronRight} style={{width: '15px'}} className='ml-2 text-green-300'/>
            </div>
          </div>
        </div>
      </div>


      {/* Uilchilgee */}
      <div className='w-full flex justify-center max-sm:h-[1000px] sm:h-[600px] md:h-[600px] lg:h-[460px] xl:h-[460px]'>
        <div className='h-full w-[1000px] flex flex-col items-center'>
          <div className='w-full h-[100px] flex justify-center items-center'>
            <h1 className='text-black text-xl'>U-POINT-Р АВАХ БОЛОМЖТОЙ ҮЙЛЧИЛГЭЭ</h1>
          </div>
          <div className=' w-full h-[72%] flex flex-col'>
            <div className='flex'>
              <a className='w-40 h-12 cursor-pointer flex items-center justify-center'>
                <p className='text-black active:font-bold'>Юнител</p>
              </a>
              <a className='w-40 h-12 cursor-pointer flex items-center justify-center'>
                <p className='text-black active:font-bold'>Юнивишн</p>
              </a>
              <a className='w-40 h-12 cursor-pointer flex items-center justify-center'>
                <p className='text-black active:font-bold'>Гэр интернэт</p>
              </a>
            </div>
            <div className='grid gap-5 mt-5 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
              <button className='flex flex-col border-slate-500 shadow-xl border-opacity-20 py-10 gap-3 justify-center items-center border-2 rounded'>
                <img src='https://www.unitel.mn/unitel/assets/uni-data.2db0f1a822b69ba091e23b4a19319b9c.svg'/>
                <p className='text-black'>Дата Багц</p>
              </button>
              <button className='flex flex-col border-slate-500 shadow-xl border-opacity-20 py-10 gap-3 justify-center items-center border-2 rounded'>
                <img src='https://www.unitel.mn/unitel/assets/uni-negj.4ae37238660cd3af5d89243ae60667e9.svg'/>
                <p className='text-black'>Нэгж</p>
              </button>
              <button className='flex flex-col border-slate-500 shadow-xl border-opacity-20 py-10 gap-3 justify-center items-center border-2 rounded'>
                <img src='https://www.unitel.mn/unitel/assets/uni-tulbur.596f919d82d8c3d9def4262f1c9cf02e.svg'/>
                <p className='text-black'>Төлбөр</p>
              </button>
              <button className='flex flex-col border-slate-500 shadow-xl border-opacity-20 py-10 gap-3 justify-center items-center border-2 rounded'>
                <img src='https://www.unitel.mn/unitel/assets/uni-zadgai.b1a643cde75d6706eb06f77ee6ba6586.svg'/>
                <p className='text-black'>Задгай нэгж</p>
              </button>
            </div>
            <div className='w-full h-[100px] flex justify-center items-center mt-8'>
              <h1 className='text-black text-lg text-cyan-500'>Бүгдийг харах</h1>
              <FontAwesomeIcon icon={faCircleChevronDown} style={{width:'14px'}} className='ml-2 text-cyan-500'/>
            </div>
          </div>
        </div>
      </div>


      {/* Tuslamj */}
      <div className='w-full h-[1200px] flex justify-center items-center bg-slate-100 max-sm:h-[1800px]'>
        <div className='w-[1000px] h-full'>
          <div className='flex mt-10'>
              <a className='w-60 h-28 gap-2 cursor-pointer flex flex-col items-center justify-center'>
                <img src='https://www.unitel.mn/unitel/assets/tips_hvr.c498713e0de71470f560252292053f54.svg' className='w-10 h-10'/>
                <p className='text-black active:font-bold text-center'>Үйлчилгээний заавар</p>
              </a>
              <a className='w-40 h-28 gap-2 cursor-pointer flex flex-col items-center justify-center'>
                <img src='https://www.unitel.mn/unitel/assets/instra.36e9a91f1aa07e3e54a97eeac8c2e5cd.svg' className='w-10 h-10'/>
                <p className='text-black active:font-bold text-center'>Тусламж</p>
              </a>
          </div>

          <div className='h-[150px] w-full mt-5 flex flex-col justify-evenly'>
            <h1 className='ml-3 text-black'>U-POINT ХӨТӨЛБӨРТ НЭГДЭХ</h1>
            <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 rounded border-2 border-slate-500 border-opacity-30 text-black text-center'>On</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
          </div>

          <div className='h-[800px] w-full grid grid-cols-2 max-sm:grid-cols-1 max-sm:h-[1600px]'>
            <div className='h-full w-full grid grid-rows-6 gap-1'>
              <div className='h-full w-full flex flex-col justify-evenly'>
                 <p className='ml-3 text-sm text-black'>ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЭЛ АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>UNITEL</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ЗАДГАЙ ДАТА АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>UDATA</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>НЭГЖ АВАХ МЭДЭЭЛЭЛ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Negj</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ҮЙЛЧИЛГЭЭНИЙ ХОНОГИЙН МЭДЭЭЛЭЛ АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Honog</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ТӨЛБӨР ТӨЛӨХ МЭДЭЭЛЭЛ АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-32 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Unitel Bolomj</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ОНООНЫ ҮЛДЭГДЭЛ ШАЛГАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Onoo</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>4422</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-full w-full grid grid-rows-6 gap-1'>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>НЭМЭЛТ ДАТА БАГЦ АВАХ МЭДЭЭЛЭЛ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Databagts</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>300MB ДАТА АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>DATA</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ЗАДГАЙ НЭГЖ АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-32 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>ZADGAINEGJ</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>U-POINT ОНООГООРОО НЭМЭЛТ ҮЙЛЧИЛГЭЭ /ЮНИМЮЗИК, МААЗ ДУУДЛАГА, ОРЧНЫ ЧИМЭЭ/ АВАХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-24 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Nemelt</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-col justify-evenly'>
              <p className='ml-3 text-sm text-black'>ТӨЛБӨР ТӨЛӨХ</p>
                <div className='flex items-center'>
                  <div className='ml-3 py-2 w-28 text-center rounded border-2 border-slate-500 border-opacity-30 text-black'>Unitel Tuluh</div>
                  <FontAwesomeIcon icon={faChevronRight} style={{width: '10px'}} className='ml-5 mr-5 text-slate-500'/>
                  <div className='flex py-2 px-4 rounded border-2 border-slate-500 border-opacity-30'>
                    <p className='text-black'>1415</p>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '20px'}} className='ml-4 text-black'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}
