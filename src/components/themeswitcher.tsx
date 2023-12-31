import { useState, useRef, useEffect, useLayoutEffect } from 'react';

export default function ThemeSwitcher() {
 const [theme, setTheme] = useState<string>('light');
 const btnSwitch = useRef<HTMLButtonElement>(null!);

 const changeTheme = () => {
  setTheme(theme == 'light' ? 'dark' : 'light');
  localStorage.setItem('theme', theme == 'light' ? 'dark' : 'light');
 };

 useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  if (theme == 'dark') {
   btnSwitch.current.classList.remove('bg-theme-dark');
   btnSwitch.current.classList.add('bg-theme-light');
  } else {
   btnSwitch.current.classList.remove('bg-theme-light');
   btnSwitch.current.classList.add('bg-theme-dark');
  }
 }, [theme]);

 useLayoutEffect(() => {
  let startTheme: any = localStorage.getItem('theme');
  setTheme(startTheme);
 }, []);

 return (
  <button
   ref={btnSwitch}
   className={`w-[24px] h-[24px]`}
   onClick={changeTheme}
  ></button>
 );
}
