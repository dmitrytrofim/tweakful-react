interface ItemProps {
 icon: string;
 title: string;
 text: string;
}

export function Item({ icon, title, text }: ItemProps) {
 return (
  <li className="flex gap-[24px] items-start">
   <div className="shrink-0 w-[54px] h-[54px] flex items-center justify-center rounded-full bg-b-lightgray">
    <svg className="w-[28px] h-[28px] fill-b-blue">
     <use xlinkHref={`./assets/img/svg/sprite.svg#` + icon}></use>
    </svg>
   </div>
   <div className="">
    <p className="text-20 font-700 mb-[7px]">{title}</p>
    <p className="leading-[1.6]">{text}</p>
   </div>
  </li>
 );
}
