import ReactPlayer from 'react-player';
import { Wrapper, Container } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import Greet from '../components/greet';
import { Splide, SplideSlide } from '../../node_modules/@splidejs/react-splide';

export default function Features() {
 return (
  <Wrapper>
   <Header cls="mb-[100px]" />
   <main>
    <Greet title="Future is now!" />
    <section className="mb-[200px]">
     <Container>
      <div className="flex justify-between gap-[130px]">
       <div className="">
        <h2 className="title text-42 mb-[10px]">Headline Sample</h2>
        <p className="leading-[1.5] mb-[30px]">
         Nowadays, it isn't uncommon to see lenders rapidly adopting a digital
         lending strategy to streamline the lending process Gorgeous,
         high-quality design system for mobile, tablet & desktop devices a few
         reasons digital
        </p>
        <div className="flex gap-[80px]">
         <p className="w-[200px] flex flex-col">
          <span className="text-72 font-700">
           18<span className="text-52 font-600">k</span>
          </span>
          <span className="">
           Gorgeous, high-quality design system for mobile, tablet & desktop
           devices
          </span>
         </p>
         <p className="w-[200px] flex flex-col">
          <span className="text-72 font-700">
           92<span className="text-52 font-600">%</span>
          </span>
          <span className="">
           Gorgeous, high-quality design system for mobile, tablet & desktop
           devices
          </span>
         </p>
        </div>
       </div>
       <ReactPlayer
        className={'shrink-0 w-[530px] aspect-video'}
        height=""
        width=""
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={true}
       />
      </div>
     </Container>
    </section>
    <section className="mb-[200px]">
     <Container>
      <h2 className="title mb-[70px]">
       Headline of Modern and Digital Platform
      </h2>
      <div className="flex items-center gap-[30px]">
       <ul className="grid grid-cols-[260px_260px] gap-[30px]">
        <li className="">
         <svg className="w-[40px] h-[40px] mb-[16px]">
          <use xlinkHref="/assets/img/svg/sprite.svg#headline-1"></use>
         </svg>
         <p className="text-20 font-500 mb-[8px]">First Feature</p>
         <p className="leading-[1.6]">
          Gorgeous, high-quality design system for mobile, tablet and desktop
          devices a few reasons
         </p>
        </li>
        <li className="">
         <svg className="w-[40px] h-[40px] mb-[16px]">
          <use xlinkHref="/assets/img/svg/sprite.svg#headline-2"></use>
         </svg>
         <p className="text-20 font-500 mb-[8px]">Second Feature</p>
         <p className="leading-[1.6]">
          Gorgeous, high-quality design system for mobile, tablet and desktop
          devices a few reasons
         </p>
        </li>
        <li className="">
         <svg className="w-[40px] h-[40px] mb-[16px]">
          <use xlinkHref="/assets/img/svg/sprite.svg#headline-3"></use>
         </svg>
         <p className="text-20 font-500 mb-[8px]">Third Feature</p>
         <p className="leading-[1.6]">
          Gorgeous, high-quality design system for mobile, tablet and desktop
          devices a few reasons
         </p>
        </li>
        <li className="">
         <svg className="w-[40px] h-[40px] mb-[16px]">
          <use xlinkHref="/assets/img/svg/sprite.svg#shield"></use>
         </svg>
         <p className="text-20 font-500 mb-[8px]">Fourth Feature</p>
         <p className="leading-[1.6]">
          Gorgeous, high-quality design system for mobile, tablet and desktop
          devices a few reasons
         </p>
        </li>
       </ul>
       <Splide options={{ type: 'loop' }}>
        <SplideSlide>
         <img
          className="w-full h-[300px] object-cover object-center"
          src="/assets/img/slide-1.webp"
          alt=""
         />
        </SplideSlide>
        <SplideSlide>
         <img
          className="w-full h-[300px] object-cover object-center"
          src="/assets/img/slide-2.webp"
          alt=""
         />
        </SplideSlide>
        <SplideSlide>
         <img
          className="w-full h-[300px] object-cover object-center"
          src="/assets/img/slide-3.webp"
          alt=""
         />
        </SplideSlide>
       </Splide>
      </div>
     </Container>
    </section>
   </main>
   <Footer />
  </Wrapper>
 );
}
