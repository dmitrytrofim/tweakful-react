import { useState, useEffect, useRef } from 'react';

export default function ThemeSwitcher() {
 const [theme, setTheme] = useState<string>('');
 const btnSwitch = useRef(null);
 const changeTheme = () => {
  const switchTheme = theme == '' ? 'dark' : '';
  setTheme(switchTheme);
  localStorage.setItem('theme', switchTheme);
  // theme == '' ? 'bg-theme-dark' : 'bg-theme-light'
 };
 useEffect(() => {
  const startTheme = localStorage.getItem('theme');
  // btnSwitch.current.value = 'test';
  if (startTheme) {
   document.documentElement.className = startTheme;
  } else {
   document.documentElement.className = '';
  }
 });

 return (
  <button
   ref={btnSwitch}
   className={`w-[24px] h-[24px] flex border-[1px] border-b-dark shadow-[0px_0px_1px_1px_#fff] ${btnSwitch}`}
   onClick={changeTheme}
  ></button>
 );
}
