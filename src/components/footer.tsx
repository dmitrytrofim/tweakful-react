import { Container } from './common';

function Footer() {
 return (
  <footer className="bg-[--bg-footer] text-t-white">
   <Container>
    <div className="pt-[70px] pb-[44px]">
     <p className="text-24 font-700 mb-[30px]">Tweakful</p>
     <div className="flex justify-between gap-[30px] mb-[30px] max-[992px]:flex-col">
      <div className="max-w-[420px] max-[992px]:max-w-none">
       <p className="text-18 font-500 mb-[5px]">About Tweakful</p>
       <p className="leading-[1.6] mb-[5px]">
        Tweakful is HubSpot Theme Based On Engagement Design Framework, designed
        & developed by Openthrive.
       </p>
       <a href="#" className="btn bg-transp p-0 pr-[40px] after:right-0">
        Button Text
       </a>
      </div>
      <div className="flex flex-col gap-[32px]">
       <ul className="flex flex-wrap justify-end gap-[22px] max-[992px]:justify-start">
        <li className="">
         <a href="#" className="">
          Contact
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Career
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Privacy Plocy
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Terms Of Services
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          GDPR
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          FAQs
         </a>
        </li>
       </ul>
       <ul className="flex flex-wrap justify-end gap-[22px] max-[992px]:justify-start">
        <li className="">
         <a href="#" className="">
          Blog
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Capabilities
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Resources
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Partnership
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Integration
         </a>
        </li>
       </ul>
      </div>
     </div>
     <div className="flex justify-between gap-[20px] border-t-[1px] border-[rgba(255,255,255,0.08)] pt-[30px] max-[992px]:flex-col">
      <p className="max-w-[390px] max-[992px]:max-w-none">
       B2B website and engagement design solution that transform marketing and
       sales performance like never before.
      </p>
      <p className="text-right max-[992px]:text-left">
       © 2015-2020 Openthrive. All right reserved.
      </p>
     </div>
    </div>
   </Container>
  </footer>
 );
}

export default Footer;
