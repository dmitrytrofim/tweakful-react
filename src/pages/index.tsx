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
    <section>
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
   </Main>
   <Footer />
  </Wrapper>
 );
}

export default Index;
