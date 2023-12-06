import { Container } from './common';

function Header() {
 return (
  <header>
   <Container>
    <div className="min-h-[80px] flex justify-between items-center">
     <div className="flex items-center">
      <a href="#" className="flex items-center gap-[10px]">
       <img
        className="w-[51px] h-[38px] object-cover object-center"
        src="./assets/sprite.svg#logo-view"
        alt=""
       />
       <span className="">Tweakful</span>
      </a>
      <nav className="">
       <ul className="flex">
        <li className="">
         <a href="#" className="">
          Home
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Features
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Pricing
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          About Us
         </a>
        </li>
        <li className="">
         <a href="#" className="">
          Help
         </a>
        </li>
       </ul>
      </nav>
     </div>
     <button className="">theme</button>
    </div>
   </Container>
  </header>
 );
}

export default Header;
