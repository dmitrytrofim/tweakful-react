import { Container, Wrapper } from '../components/common';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Contacts() {
 return (
  <Wrapper>
   <Header />
   <main className="">
    <section className="h-full bg-b-lightgray">
     <Container padding="px-[10px] py-[100px]">
      <div className="flex justify-between">
       <div className="max-w-[480px]">
        <h2 className="title text-64 mb-[30px]">Contact Us</h2>
        <p className="text-20 leading-[1.6] text-t-gray mb-[100px]">
         If you have any questions about the subscription or are not sure which
         plan is right for you, contact our team and let's schedule a call.
        </p>
        <div className="flex items-center gap-[30px]">
         <a
          href="#"
          className="flex flex-col gap-[8px] text-14 text-t-white border-[1px] border-b-blue bg-b-blue py-[15px] px-[20px]"
         >
          <span className=" font-600">Call us</span>
          <span className="">(669) 984-9439</span>
         </a>
         <a
          href="#"
          className="flex flex-col gap-[8px] text-14 text-t-blue bg-b-white border-[1px] border-b-blue py-[15px] px-[20px]"
         >
          <span className=" font-600">Email us</span>
          <span className="">hello@openthrive.com</span>
         </a>
        </div>
       </div>
       <div className="max-w-[490px] bg-b-white border-[1px] border-b-gray pt-[36px] pb-[26px] px-[30px]">
        <p className="text-28 font-600 mb-[28px]">Let's Talk</p>
        <p className="text-18 text-t-gray leading-[1.6] mb-[40px]">
         If you have any question or issue's to use our product. Fill the form
         below. We'll help you.
        </p>
        <form action="#">
         <div className="flex justify-between gap-[20px] mb-[24px]">
          <label className="flex flex-col gap-[11px]">
           <span className="">Your name*</span>
           <input
            className="w-full text-14 border-[2px] border-b-gray p-[12px]"
            name="name"
            type="text"
            placeholder="Enter your name"
           />
          </label>
          <label className="flex flex-col gap-[11px]">
           <span className="">Your email*</span>
           <input
            className="w-full text-14 border-[2px] border-b-gray p-[12px]"
            type="email"
            placeholder="Enter your email"
           />
          </label>
         </div>
         <div className="flex flex-col gap-[11px] mb-[28px]">
          <span className="">Choose topic*</span>
          <select
           className="w-full text-14 border-[2px] border-b-gray p-[12px] appearance-none bg-[url('/assets/img/svg/arr-down.svg')] bg-no-repeat bg-[length:14px] bg-[right_12px_center] cursor-pointer"
           name="sel"
           id=""
          >
           <option className="hidden" value="">
            Select one topic
           </option>
           <option value="">1</option>
           <option value="">2</option>
           <option value="">3</option>
          </select>
         </div>
         <button
          className="btn w-full flex items-center justify-center after:hidden p-[14px]"
          type="submit"
         >
          Contact Us
         </button>
        </form>
       </div>
      </div>
     </Container>
    </section>
   </main>
   <Footer />
  </Wrapper>
 );
}
