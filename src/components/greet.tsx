import { Container } from './common';

export default function Greet({ title }: { title: string }) {
 return (
  <section className="mb-[200px] max-[768px]:mb-[100px]">
   <Container>
    <div className="flex justify-between gap-[100px] max-[1200px]:gap-[40px] max-[992px]:flex-col">
     <div>
      <h1 className="title text-64 leading-[1.12] mb-[30px]">{title}</h1>
      <p className="max-w-[480px] text-20 mb-[42px]">
       And the description of hero section is follow up message after the punch
       of a great headline. So, make it short, simple, descriptive and to the
       point.
      </p>
      <div className="flex items-center gap-[21px] mb-[80px] max-[576px]:flex-col-reverse max-[576px]:items-start max-[768px]:mb-[40px]">
       <a href="#" className="btn">
        Book A Meeting
       </a>
       <p className="max-w-[250px]">
        Here you can put secondary action statement & CTA
       </p>
      </div>
      <div className="flex flex-wrap gap-[20px] max-[576px]:justify-center">
       <img
        className="h-[31px] max-[576px]:h-[20px]"
        src="./assets/img/svg/philips.svg"
        alt="Test"
        loading="lazy"
       />
       <img
        className="h-[31px] max-[576px]:h-[20px]"
        src="./assets/img/svg/philips.svg"
        alt="Test"
        loading="lazy"
       />
       <img
        className="h-[31px] max-[576px]:h-[20px]"
        src="./assets/img/svg/philips.svg"
        alt="Test"
        loading="lazy"
       />
      </div>
     </div>
     <div className="i-wrap shrink-0 w-[460px] max-[992px]:w-full max-[992px]:aspect-video">
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
 );
}
