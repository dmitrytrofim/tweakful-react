import { Container } from './common';

function Header({ cls }: { cls: string }) {
 return (
  <header className={cls}>
   <Container>
    <div className="min-h-[80px] flex justify-between items-center">
     <div className="flex items-center">
      <a href="#" className="flex items-center gap-[10px]">
       <img
        className="w-[51px] h-[38px] object-cover object-center"
        src="./assets/img/svg/sprite.svg#logo"
        alt=""
       />
       <span className="text-24 font-700 mr-[53px]">Tweakful</span>
      </a>
      <nav className="">
       <ul className="flex gap-[31px] text-t-dark2">
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

Header.defaultProps = {
 cls: '',
};

export default Header;
