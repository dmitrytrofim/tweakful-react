import { Wrapper, Container, Main } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';

function Index() {
 return (
  <Wrapper>
   <Header cls="mb-[145px]" />
   <Main>
    <section>
     <Container>
      <div className="flex gap-[100px]">
       <div className="">
        <h1 className="title text-64 leading-[1.12] mb-[30px]">
         This headline is the gist of the Your whole Website
        </h1>
        <p className="text-20 mb-[42px]">
         And the description of hero section is follow up message after the
         punch of a great headline. So, make it short, simple, descriptive and
         to the point.
        </p>
        <div className="">
         <a href="#" className="btn">
          Book A Meeting
         </a>
         <p className="">Here you can put secondary action statement & CTA</p>
        </div>
        <div className="">
         <img
          className=""
          src="./assets/img/svg/philips.svg"
          alt="Test"
          loading="lazy"
         />
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
   </Main>
   <Footer />
  </Wrapper>
 );
}

export default Index;
