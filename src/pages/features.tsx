import ReactPlayer from 'react-player';
import { Wrapper, Container } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import Greet from '../components/greet';

export default function Features() {
 return (
  <Wrapper>
   <Header cls="mb-[100px]" />
   <main>
    <Greet title="Future is now!" />
    <section>
     <Container>
      <div className="flex">
       <div className="">
        <h2 className="title">Headline Sample</h2>
        <p className="">
         Nowadays, it isn't uncommon to see lenders rapidly adopting a digital
         lending strategy to streamline the lending process Gorgeous,
         high-quality design system for mobile, tablet & desktop devices a few
         reasons digital
        </p>
        <div className="">
         <p className="">
          <span className="">18k</span>
          <span className="">
           Gorgeous, high-quality design system for mobile, tablet & desktop
           devices
          </span>
         </p>
         <p className="">
          <span className="">92%</span>
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
   </main>
   <Footer />
  </Wrapper>
 );
}
