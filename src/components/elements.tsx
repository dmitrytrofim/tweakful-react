interface ItemProps {
 icon: string;
 benefit: boolean;
 title: string;
 text: string;
}

export function Item({ icon, benefit, title, text }: ItemProps) {
 const sizeIcon: string = benefit ? 'w-[52px] h-[52px]' : 'w-[24px] h-[24px]';
 return (
  <li className="flex gap-[24px] items-start">
   <div className="shrink-0 w-[54px] h-[54px] flex items-center justify-center rounded-full bg-b-lightgray">
    <svg className={`${sizeIcon} fill-b-blue`}>
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

Item.defaultProps = {
 benefit: false,
};
