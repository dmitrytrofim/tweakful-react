import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
 const [theme, setTheme] = useState<string>('');
 const changeTheme = () => setTheme(theme == '' ? 'dark' : '');
 useEffect(() => {
  document.documentElement.className = theme;
 });

 return (
  <button
   className={`w-[24px] h-[24px] flex ${
    theme == '' ? 'bg-theme-dark' : 'bg-theme-light'
   }`}
   onClick={changeTheme}
  ></button>
 );
}
