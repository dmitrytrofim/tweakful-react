import { Wrapper, Container, Main } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import { Item } from '../components/elements';

function Index() {
 return (
  <Wrapper>
   <Header cls="mb-[100px]" />
   <Main>
    <section className="mb-[200px]">
     <Container>
      <div className="flex gap-[100px]">
       <div>
        <h1 className="title text-64 leading-[1.12] mb-[30px]">
         This headline is the gist of the Your whole Website
        </h1>
        <p className="max-w-[480px] text-20 mb-[42px]">
         And the description of hero section is follow up message after the
         punch of a great headline. So, make it short, simple, descriptive and
         to the point.
        </p>
        <div className="flex items-center gap-[21px] mb-[80px]">
         <a href="#" className="btn">
          Book A Meeting
         </a>
         <p className="max-w-[250px]">
          Here you can put secondary action statement & CTA
         </p>
        </div>
        <div className="h-[31px] flex gap-[20px]">
         <img src="./assets/img/svg/philips.svg" alt="Test" loading="lazy" />
         <img src="./assets/img/svg/philips.svg" alt="Test" loading="lazy" />
         <img src="./assets/img/svg/philips.svg" alt="Test" loading="lazy" />
        </div>
       </div>
       <div className="i-wrap shrink-0 w-[460px]">
        <img
         className="i-full object-top"
         src="./assets/img/woman-1.webp "
         alt="Woman"
         loading="lazy"
        />
       </div>
      </div>
     </Container>
    </section>
    <section className="mb-[200px]">
     <Container>
      <div className="flex justify-between">
       <ul className="max-w-[410px] flex flex-col gap-[50px]">
        <Item
         icon="headline-1"
         title="First Benefit"
         text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
        />
        <Item
         icon="headline-2"
         title="Second Benefit"
         text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
        />
        <Item
         icon="headline-3"
         title="Third Benefit"
         text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
        />
       </ul>
       <div className="max-w-[540px]">
        <h2 className="title mb-[15px]">
         Headline of Modern and Digital Lending Platform Seconds
        </h2>
        <p className="mb-[30px]">
         Nowadays, it isn't uncommon to see lenders rapidly adopting a digital
         lending strategy
        </p>
        <a href="#" className="btn">
         Learn More About
        </a>
       </div>
      </div>
     </Container>
    </section>
    <section className="mb-[200px]">
     <Container>
      <div className="">
       <h2 className="title mb-[40px]">Benefits of working with us</h2>
       <ul className="grid grid-cols-2 gap-[40px_30px]">
        <Item
         icon="benefits-1"
         benefit
         title="Time zones ain't no thing"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        />
        <Item
         icon="benefits-2"
         benefit
         title="Full spectrum of services"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        />
        <Item
         icon="benefits-3"
         benefit
         title="Impossible? We're on it"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        />
        <Item
         icon="benefits-4"
         benefit
         title="Flexible work terms"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
        />
       </ul>
      </div>
     </Container>
    </section>
    <section className="mb-[200px]">
     <Container>
      <div className="flex gap-[50px] bg-b-lightgray py-[120px]">
       <div className="ml-[95px]">
        <h3 className="title text-42 mb-[32px]">Success Story</h3>
        <p className="text-42 mb-[32px]">
         Nowadays, it isn't uncommon to see lenders rapidly adopting a digital
         lending strategy to streamline the lending process
        </p>
        <img
         className="h-[31px] mb-[10px]"
         src="./assets/img/svg/philips.svg"
         alt=""
         loading="lazy"
        />
        <a
         href="#"
         className="flex items-center gap-[5px] text-t-blue font-500"
        >
         <span>Read Complete Case Study</span>
         <svg className="w-[20px] h-[10px] fill-t-blue">
          <use xlinkHref="./assets/img/svg/sprite.svg#arr"></use>
         </svg>
        </a>
       </div>
       <div className="i-wrap shrink-0 w-[380px]">
        <img
         className="i-full object-top"
         src="./assets/img/woman-2.webp"
         alt=""
         loading="lazy"
        />
       </div>
      </div>
     </Container>
    </section>
    <section className="mb-[60px]">
     <Container>
      <div>
       <h2 className="title text-42 mb-[52px]">The process we follow</h2>
       <ul className="grid grid-cols-4 gap-[30px]">
        <li className="relative after:absolute after:top-[11px] after:left-[40px] after:w-[100%] after:h-[5px] after:border-t-[4px] after:border-dotted after:border-y-b-blue after:opacity-[0.4] overflow-hidden">
         <div className="w-[24px] h-[24px] rounded-full bg-b-blue mb-[15px]"></div>
         <p className="text-24 font-700 mb-[5px]">Ideate</p>
         <p className="">Turn your idea from concept to MVP</p>
        </li>
        <li className="relative after:absolute after:top-[11px] after:left-[40px] after:w-[100%] after:h-[5px] after:border-t-[4px] after:border-dotted after:border-y-b-blue after:opacity-[0.4] overflow-hidden">
         <div className="w-[24px] h-[24px] rounded-full bg-b-blue mb-[15px]"></div>
         <p className="text-24 font-700 mb-[5px]">Ideate</p>
         <p className="">Turn your idea from concept to MVP</p>
        </li>
        <li className="relative after:absolute after:top-[11px] after:left-[40px] after:w-[100%] after:h-[5px] after:border-t-[4px] after:border-dotted after:border-y-b-blue after:opacity-[0.4] overflow-hidden">
         <div className="w-[24px] h-[24px] rounded-full bg-b-blue mb-[15px]"></div>
         <p className="text-24 font-700 mb-[5px]">Ideate</p>
         <p className="">Turn your idea from concept to MVP</p>
        </li>
        <li className="overflow-hidden">
         <div className="w-[24px] h-[24px] rounded-full bg-b-blue mb-[15px]"></div>
         <p className="text-24 font-700 mb-[5px]">Ideate</p>
         <p className="">Turn your idea from concept to MVP</p>
        </li>
       </ul>
      </div>
     </Container>
    </section>
    <section className="bg-b-lightgray py-[100px]">
     <Container>
      <div className="flex flex-col">
       <h2 className="title text-center mb-[24px]">
        The Is Closing Headline To Make A<br /> Impact For Call To Action
       </h2>
       <p className="text-center mb-[60px]">
        Nowadays, it isn't uncommon to see lenders rapidly adopting a digital
        lending strategy to streamline
        <br /> the lending process nowadays, it isn't uncommon to see lenders
        rapidly
       </p>
       <a href="#" className="btn self-center mb-[40px]">
        Book A Meeting
       </a>
       <hr className="h-[2px] bg-[#B4B4B4] border-none mb-[50px]" />
       <div className="flex justify-center gap-[30px]">
        <img
         className="h-[28px]"
         src="./assets/img/svg/philips.svg"
         alt=""
         loading="lazy"
        />
        <img
         className="h-[28px]"
         src="./assets/img/svg/philips.svg"
         alt=""
         loading="lazy"
        />
        <img
         className="h-[28px]"
         src="./assets/img/svg/philips.svg"
         alt=""
         loading="lazy"
        />
        <img
         className="h-[28px]"
         src="./assets/img/svg/philips.svg"
         alt=""
         loading="lazy"
        />
       </div>
      </div>
     </Container>
    </section>
   </Main>
   <Footer />
  </Wrapper>
 );
}

export default Index;
