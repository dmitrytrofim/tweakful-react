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
       <div className="max-w-[490px]">
        <p className="">Let's Talk</p>
        <p className="">
         If you have any question or issue's to use our product. Fill the form
         below. We'll help you.
        </p>
        <form action="#">
         <div className="">
          <label className="">
           <span className="">Your name*</span>
           <input
            className=""
            name="name"
            type="text"
            placeholder="Enter your name"
           />
          </label>
          <label>
           <span className="">Your email*</span>
           <input className="" type="email" placeholder="Enter your email" />
          </label>
         </div>
         <label className="">
          <span className="">Choose topic*</span>
          <select className="" name="sel" id="">
           <option className="hidden" value="">
            Select one topic
           </option>
           <option value="">1</option>
           <option value="">2</option>
           <option value="">3</option>
          </select>
         </label>
         <button className="" type="submit">
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
