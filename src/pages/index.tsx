import type { NextPage } from 'next'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Seo } from '../components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <div className='w-full h-64 bg-center bg-cover bg-[url(/images/pageCover.webp)]' />
      <main className='containered'>
        <h1 className='pt-16 text-6xl text-center sm:text-left text-h1 font-inter font-bold'>Максим Никонов</h1>
        <article className='mt-12 items-center flex gap-3 p-4 rounded-sm bg-[#F7F7F7]'>
          <div className="w-5 h-5">
            <svg className='w-5 h-5' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1111 6.14444C16.1111 9.72166 13.3334 10.2772 13.3334 13.6111C13.3334 15.3322 11.5984 15.4772 10.2778 15.4772C9.13725 15.4772 6.61892 15.0444 6.61892 13.61C6.61892 10.2778 3.88892 9.72222 3.88892 6.14444C3.88892 2.79389 6.82503 0.077774 10.0461 0.077774C13.2684 0.077774 16.1111 2.79389 16.1111 6.14444Z" fill="#FFD983"/>
              <path d="M12.3149 18.0556C12.3149 18.5156 11.0738 19.4444 9.99994 19.4444C8.92605 19.4444 7.68494 18.5156 7.68494 18.0556C7.68494 17.5956 8.92549 17.7778 9.99994 17.7778C11.0738 17.7778 12.3149 17.5956 12.3149 18.0556Z" fill="#CCD6DD"/>
              <path d="M12.615 5.71834C12.3977 5.50111 12.0466 5.50111 11.8294 5.71834L9.99996 7.54778L8.17052 5.71834C7.9533 5.50111 7.60218 5.50111 7.38496 5.71834C7.16774 5.93556 7.16774 6.28667 7.38496 6.50389L9.44441 8.56334V14.4444C9.44441 14.7517 9.6933 15 9.99996 15C10.3066 15 10.5555 14.7517 10.5555 14.4444V8.56334L12.615 6.50389C12.8322 6.28667 12.8322 5.93556 12.615 5.71834Z" fill="#FFCC4D"/>
              <path d="M13.3333 17.2222C13.3333 17.8356 12.8355 18.3333 12.2222 18.3333H7.77774C7.1644 18.3333 6.66663 17.8356 6.66663 17.2222V13.8889H13.3333V17.2222Z" fill="#99AAB5"/>
              <path d="M6.66611 17.7778C6.39944 17.7778 6.16388 17.585 6.11888 17.3133C6.06833 17.0111 6.27277 16.7244 6.57555 16.6744L13.2422 15.5633C13.5444 15.5089 13.8311 15.7172 13.8811 16.02C13.9317 16.3222 13.7272 16.6089 13.4244 16.6589L6.75777 17.77C6.72722 17.7756 6.69611 17.7778 6.66611 17.7778ZM6.66611 15.5556C6.39944 15.5556 6.16388 15.3628 6.11888 15.0911C6.06833 14.7889 6.27277 14.5022 6.57555 14.4522L13.2422 13.3411C13.5444 13.2872 13.8311 13.495 13.8811 13.7978C13.9317 14.1 13.7272 14.3867 13.4244 14.4367L6.75777 15.5478C6.72722 15.5533 6.69611 15.5556 6.66611 15.5556Z" fill="#CCD6DD"/>
            </svg>
          </div>
          <p>Это сайт-портфолио, блог и резюме. Ниже указаны все разделы сайта</p>
        </article>
        <section>
          <h2 className='text-3xl mb-2 mt-8 text-h2 font-bold'>Обо мне</h2>
          <p>Привет, меня зовут - Максим и я Front-End разработчик. Мне сейчас 20 лет. Я занимаюсь программированием и веб-дизайном.</p>
        </section>
        <section>
          <h2 className='text-3xl mb-2 mt-8 text-h2 font-bold'>Об этом сайте</h2>
          <p>todo</p>
        </section>
        <section>
          <h2 className='text-3xl mb-2 mt-8 text-h2 font-bold'>Опыт работы</h2>
          <p>todo</p>
        </section>
        <section id="cv">
          <h2 className='text-3xl mb-2 mt-8 text-h2 font-bold'>Резюме</h2>
          <p>todo</p>
        </section>
        <section>
          <h2 className='text-3xl mb-4 mt-8 text-h2 font-bold'>Публикации</h2>
          <div className='w-full flex gap-2'>
            <article className=' shadow-md rounded-[10px] transition-colors p-4 bg-[#4cbae6] hover:bg-[#68c7ed] w-full h-fit'>
              <Link className='flex justify-between flex-col w-full h-full' href="/posts/57d54c52-3ce1-4d92-9401-759e283d7572">
                <div>
                  <p className='text-white text-xs font-bold'>Статья</p>
                  <h1 className='text-[#2F3437] mt-1 text-xl font-bold'>Как добавить Typescript в React приложение</h1>
                </div>
                <p className='text-xs text-stone-100 pt-6'>4 дня назад</p>
              </Link>
            </article>
          </div>
          <Link href='/posts'>
            <p className='text-sm text-gray-500 mt-2'>Смотреть все публикации...</p>
          </Link>
        </section>
        <section id="contacts">
          <h2 className='text-3xl mb-4 mt-8 text-h2 font-bold'>Контакты</h2>
          <ul className='ml-2 sm:flex sm:gap-2 space-y-2 sm:space-y-0'>
            <li className="bg-blue-200 text-indigo-800 w-fit hover:scale-105 focus:scale-105 transition px-2 py-1 rounded-md">
              <a className='flex gap-2 items-center justify-center' href="https://t.me/mnik01">
                <svg className='w-5 h-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2646 2.42772C21.9799 2.19085 21.6363 2.03561 21.2704 1.97852C20.9044 1.92143 20.5298 1.96463 20.1865 2.10351L2.2656 9.33886C1.88235 9.49654 1.55612 9.76705 1.3302 10.1145C1.10428 10.4619 0.989366 10.8698 1.0007 11.2841C1.01204 11.6984 1.1491 12.0994 1.39368 12.4339C1.63826 12.7685 1.9788 13.0207 2.3701 13.1572L5.9951 14.418L8.0156 21.0996C8.04306 21.1889 8.0829 21.2738 8.13398 21.352C8.14173 21.364 8.15266 21.3729 8.1609 21.3846C8.2199 21.4669 8.29121 21.5397 8.37233 21.6003C8.3954 21.6179 8.41749 21.6344 8.44215 21.65C8.53708 21.713 8.64222 21.7591 8.75288 21.7861L8.76472 21.7871L8.77143 21.79C8.83796 21.8035 8.90568 21.8104 8.97358 21.8105C8.98011 21.8105 8.98591 21.8074 8.99238 21.8073C9.09484 21.8055 9.19641 21.7878 9.29347 21.755C9.31605 21.7473 9.3354 21.7344 9.35731 21.7251C9.42969 21.6951 9.49826 21.6567 9.5616 21.6106C9.61232 21.5678 9.66306 21.5251 9.71382 21.4824L12.416 18.499L16.4462 21.6211C16.8011 21.8973 17.2378 22.0474 17.6875 22.0478C18.1586 22.0472 18.6153 21.8846 18.9808 21.5874C19.3464 21.2901 19.5987 20.8762 19.6953 20.415L22.958 4.39843C23.0319 4.03795 23.0065 3.66415 22.8843 3.31702C22.7622 2.96989 22.548 2.66249 22.2646 2.42772ZM9.3701 14.7363C9.23144 14.8744 9.13666 15.0504 9.09764 15.2422L8.78813 16.7462L8.00407 14.1531L12.0693 12.0362L9.3701 14.7363ZM17.6719 20.04L12.9092 16.3505C12.7099 16.1966 12.4599 16.1233 12.2091 16.1454C11.9583 16.1675 11.7249 16.2833 11.5556 16.4697L10.6902 17.4249L10.9961 15.9384L18.0791 8.85543C18.2481 8.68659 18.3511 8.46278 18.3694 8.22455C18.3877 7.98632 18.3201 7.74941 18.1788 7.55675C18.0375 7.36408 17.8318 7.22839 17.5991 7.17426C17.3664 7.12014 17.122 7.15115 16.9101 7.26168L6.74485 12.5543L3.02049 11.1914L20.999 3.99899L17.6719 20.04Z" fill="currentColor"/>
                </svg>
                <p>Telegram</p>
              </a>
            </li>
            <li className="bg-stone-300 text-stone-800 w-fit hover:scale-105 focus:scale-105 transition px-2 py-1 rounded-md">
              <a className='gap-2 items-center justify-center flex' href="https://github.com/mnik01">
                <svg className='w-5 h-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0703 20.5029C10.0703 20.3563 10.038 20.2114 9.97578 20.0786C9.91353 19.9458 9.82284 19.8284 9.71014 19.7345C9.59743 19.6407 9.46546 19.5728 9.32359 19.5356C9.18171 19.4985 9.03341 19.493 8.88917 19.5195C7.58009 19.7598 5.92726 19.7959 5.4878 18.5615C5.10461 17.6055 4.46987 16.7711 3.65089 16.1465C3.59246 16.1148 3.53677 16.0782 3.48439 16.0372C3.41272 15.8481 3.2854 15.6852 3.11925 15.5699C2.95311 15.4547 2.75592 15.3925 2.55372 15.3916H2.54884C2.28444 15.3916 2.03077 15.4962 1.84335 15.6827C1.65594 15.8692 1.55004 16.1224 1.54884 16.3868C1.54493 17.2022 2.35984 17.7247 2.69044 17.9014C3.08029 18.2931 3.39359 18.7541 3.61427 19.2608C3.97853 20.2842 5.03712 21.837 8.08009 21.6368C8.08109 21.6719 8.08204 21.7051 8.08253 21.7354L8.08692 22.003C8.08692 22.2682 8.19228 22.5226 8.37982 22.7101C8.56735 22.8976 8.82171 23.003 9.08692 23.003C9.35214 23.003 9.60649 22.8976 9.79403 22.7101C9.98157 22.5226 10.0869 22.2682 10.0869 22.003L10.082 21.6846C10.0772 21.4951 10.0703 21.2207 10.0703 20.5029ZM20.7373 5.37694C20.7691 5.25194 20.8003 5.11327 20.8277 4.95702C20.9894 3.84261 20.8484 2.70521 20.4195 1.66402C20.3653 1.52828 20.2822 1.40603 20.1758 1.30582C20.0694 1.20562 19.9425 1.12989 19.8037 1.08395C19.4477 0.963828 18.1333 0.727498 15.6197 2.33395C13.5302 1.84224 11.3551 1.84224 9.26565 2.33395C6.76222 0.751028 5.4546 0.965828 5.10206 1.07911C4.95993 1.12319 4.82946 1.19851 4.72021 1.29957C4.61097 1.40062 4.52572 1.52483 4.47071 1.66311C4.03301 2.72429 3.89355 3.88488 4.06739 5.01955C4.09181 5.14748 4.11817 5.26565 4.14552 5.37404C3.31709 6.47748 2.87583 7.8234 2.89015 9.20314C2.88745 9.51097 2.90163 9.81873 2.93263 10.125C3.26663 14.7275 6.26663 16.1094 8.35694 16.584C8.31349 16.709 8.27394 16.8428 8.23878 16.9844C8.17612 17.2417 8.21805 17.5133 8.35538 17.7398C8.49271 17.9662 8.71422 18.1289 8.97135 18.1923C9.22848 18.2556 9.50024 18.2144 9.72703 18.0777C9.95382 17.941 10.1171 17.7199 10.1812 17.4629C10.2448 17.1297 10.4079 16.8236 10.6489 16.585C10.7947 16.4574 10.9002 16.2902 10.9527 16.1037C11.0052 15.9172 11.0023 15.7195 10.9445 15.5346C10.8866 15.3497 10.7763 15.1856 10.6269 15.0623C10.4775 14.9389 10.2955 14.8617 10.103 14.8399C6.64894 14.4453 5.14942 13.0381 4.92384 9.94143C4.89885 9.69616 4.88761 9.44968 4.89015 9.20315C4.87411 8.2198 5.19898 7.26123 5.80958 6.49026C5.87093 6.40988 5.93628 6.33263 6.00538 6.25881C6.12781 6.12181 6.21013 5.95373 6.2433 5.77301C6.27646 5.5923 6.25919 5.40594 6.19338 5.2344C6.12592 5.05393 6.07397 4.86803 6.03811 4.67873C5.95664 4.14044 5.98337 3.59132 6.11671 3.06349C6.98585 3.30896 7.80383 3.70853 8.53171 4.24317C8.65208 4.32334 8.78828 4.3767 8.93108 4.39961C9.07388 4.42253 9.21994 4.41447 9.35935 4.37599C11.3805 3.82749 13.5113 3.82783 15.5322 4.37699C15.6724 4.41543 15.8192 4.42303 15.9626 4.39926C16.106 4.37549 16.2425 4.32091 16.3628 4.2393C17.0872 3.70244 17.9018 3.2993 18.768 3.04887C18.9008 3.56402 18.9305 4.10032 18.8554 4.62699C18.8192 4.83453 18.7626 5.03799 18.6865 5.23442C18.6207 5.40596 18.6034 5.59232 18.6366 5.77303C18.6697 5.95375 18.7521 6.12183 18.8745 6.25883C18.9516 6.34574 19.0288 6.43949 19.0981 6.52738C19.7044 7.2853 20.0238 8.23285 20 9.20314C20.0018 9.46275 19.9893 9.72226 19.9624 9.98048C19.7422 13.0361 18.2368 14.4443 14.7666 14.8398C14.5741 14.8618 14.392 14.9392 14.2427 15.0626C14.0933 15.1861 13.983 15.3503 13.9253 15.5353C13.8675 15.7202 13.8647 15.918 13.9172 16.1046C13.9698 16.2911 14.0754 16.4583 14.2212 16.5859C14.4698 16.831 14.6333 17.1493 14.6875 17.4941C14.7551 17.7618 14.7861 18.0375 14.7798 18.3135V20.6475C14.77 21.2949 14.77 21.7803 14.77 22.0029C14.77 22.2682 14.8754 22.5225 15.0629 22.71C15.2504 22.8976 15.5048 23.0029 15.77 23.0029C16.0352 23.0029 16.2896 22.8976 16.4771 22.71C16.6647 22.5225 16.77 22.2682 16.77 22.0029C16.77 21.7861 16.77 21.3106 16.7798 20.6631V18.3135C16.7878 17.8713 16.7358 17.4301 16.625 17.002C16.5933 16.8614 16.5545 16.7226 16.5088 16.586C18.03 16.3332 19.4123 15.5489 20.4094 14.3726C21.4065 13.1962 21.9539 11.7042 21.9541 10.1621C21.987 9.84355 22.0024 9.5234 22 9.20314C22.0222 7.82191 21.5773 6.47366 20.7373 5.37696L20.7373 5.37694Z" fill="#37352F"/>
                </svg>
                <p>Github</p>
              </a>
            </li>
            <li className="bg-green-200 text-green-800 w-fit hover:scale-105 focus:scale-105 transition px-2 py-1 rounded-md">
              <a className='flex gap-2 items-center justify-center' href="https://www.linkedin.com/in/mnik01/">
                <svg className='w-5 h-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9H2V21H6V9Z" stroke="#37352F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#37352F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#37352F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>LinkedIn</p>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className='text-3xl mb-4 mt-8 text-h2 font-bold'>Todo</h2>
          <ul className='list-disc ml-8 pb-8'>
            <li>Экспорт главной страницы сайта как .pdf и подготовка страницы для печати</li>
            <li>Добавить анимации 3D объектов с помощью react-three-fiber</li>
            <li>Добавить поддержку английского языка на сайте (интернационализация)</li>
            <li>Добавить Telegram Instant View для постов</li>
            <li>Добавить RSS ленту</li>
            <li>Добавить sitemap.xml</li>
            <li>Добавить категории постов</li>
            <li>Добавить “среднее время чтения” на пост</li>
            <li>Сделать перевод статей через deepl.com</li>
            <li>Полоса прогресса прочтения статьи</li>
            <li>Кнопка на странице что бы подняться в верх</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Home
