import { Wrapper, Container, Main } from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';

function Index() {
 return (
  <Wrapper>
   <Header />
   <Main>
    <section>
     <Container>test</Container>
    </section>
   </Main>
   <Footer />
  </Wrapper>
 );
}

export default Index;
