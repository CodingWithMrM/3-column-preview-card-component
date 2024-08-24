import Image from 'next/image'
import React, { FC } from 'react'
import { Big_Shoulders_Display } from "next/font/google";


interface PreviewCardComponentProps {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    textColor: string;
    className?: string;
}

const BigShouldersDisplayFont = Big_Shoulders_Display({ subsets: ["latin"] });


const PreviewCardComponent: FC<PreviewCardComponentProps> = (
    {
        title,
        description,
        icon,
        bgColor,
        textColor,
        className
    }
) => {
    const bg_color = `bg-[#${bgColor}]`
    console.log('bg_color:', bg_color)

    return (
        <div className={`flex flex-col items-start gap-5 space-y-4 w-[20rem] h-[500px] shrink-0 px-[2.97rem] py-12 ${className}  ${bgColor}`}>
            <Image src={icon} alt={`${title} icon`} />
            <h2 className={`text-[#F2F2F2] text-[40px] font-bold leading-normal uppercase ${BigShouldersDisplayFont.className}`}>{title}</h2>
            <p className='text-white text-[0.9375rem] font-light leading-[25px] opacity-75'>{description}</p>
            <div className={`pt-8  ${textColor}`}>
                <button className={` rounded-[1.5625rem] bg-[#F2F2F2] hover:bg-transparent hover:border-color-white hover:border-2 hover:text-white px-[1.97rem] py-[0.70rem]  text-[0.9375rem]`}>Learn More</button>
            </div>
        </div>
    )
}

export default PreviewCardComponent