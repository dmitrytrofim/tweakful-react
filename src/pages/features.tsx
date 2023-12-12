import { Wrapper } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import Greet from '../components/greet';

export default function Features() {
 return (
  <Wrapper>
   <Header cls="mb-[100px]" />
   <main>
    <Greet title="Future is now!" />
   </main>
   <Footer />
  </Wrapper>
 );
}
