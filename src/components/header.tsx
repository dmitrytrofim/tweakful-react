import { Container } from './common';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './themeswitcher';

function Header({ cls }: { cls: string }) {
 return (
  <header className={cls}>
   <Container>
    <div className="min-h-[80px] flex justify-between items-center max-[576px]:min-h-[60px]">
     <div className="flex items-center">
      <Link
       to={'/'}
       className="flex items-center gap-[10px] mr-[53px] max-[768px]:mr-[20px]"
      >
       <img
        className="w-[51px] h-[38px] object-contain object-center max-[576px]:w-[40px] max-[576px]:h-[30px]"
        src="./assets/img/svg/logo.svg"
        alt=""
       />
       <span className="text-24 font-700 max-[768px]:hidden">Tweakful</span>
      </Link>
      <nav className="">
       <ul className="flex gap-[31px] text-t-dark2 max-[768px]:text-14 max-[768px]:gap-[10px]">
        <li className="">
         <Link to={`/`}>Home</Link>
        </li>
        <li className="">
         <Link to={`/features`}>Features</Link>
        </li>
        <li className="">
         <Link to={'/contacts'}>Contacts</Link>
        </li>
       </ul>
      </nav>
     </div>
     <ThemeSwitcher />
    </div>
   </Container>
  </header>
 );
}

Header.defaultProps = {
 cls: '',
};

export default Header;
