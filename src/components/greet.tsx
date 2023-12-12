import { Container } from './common';

export default function Greet({ title }: { title: string }) {
 return (
  <section className="mb-[200px]">
   <Container>
    <div className="flex justify-between gap-[100px]">
     <div>
      <h1 className="title text-64 leading-[1.12] mb-[30px]">{title}</h1>
      <p className="max-w-[480px] text-20 mb-[42px]">
       And the description of hero section is follow up message after the punch
       of a great headline. So, make it short, simple, descriptive and to the
       point.
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
       <img src="/assets/img/svg/philips.svg" alt="Test" loading="lazy" />
       <img src="/assets/img/svg/philips.svg" alt="Test" loading="lazy" />
       <img src="/assets/img/svg/philips.svg" alt="Test" loading="lazy" />
      </div>
     </div>
     <div className="i-wrap shrink-0 w-[460px]">
      <img
       className="i-full object-top"
       src="/assets/img/woman-1.webp "
       alt="Woman"
       loading="lazy"
      />
     </div>
    </div>
   </Container>
  </section>
 );
}
