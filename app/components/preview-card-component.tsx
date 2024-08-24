import Image from 'next/image'
import React, { FC } from 'react'
import { BigShouldersDisplayFont } from '../layout'


interface PreviewCardComponentProps {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    className?: string;
}

const PreviewCardComponent: FC<PreviewCardComponentProps> = (
    {
        title,
        description,
        icon,
        bgColor,
        className
    }
) => {
    return (
        <div className={`flex flex-col items-start gap-5 space-y-4 w-[20rem] h-[500px] shrink-0 px-[2.97rem] py-12 ${className} ${bgColor}`}>
            <Image src={icon} alt={`${title} icon`} />
            <h2 className={`text-[#F2F2F2] text-[40px] font-bold leading-normal uppercase ${BigShouldersDisplayFont.className}`}>{title}</h2>
            <p className='text-white text-[0.9375rem] font-light leading-[25px] opacity-75'>{description}</p>
            <div className='pt-8'>
                <button className={`rounded-[1.5625rem] bg-[#F2F2F2] px-[1.97rem] py-[0.70rem] text-${bgColor}-400 text-[0.9375rem]`}>Learn More</button>
            </div>
        </div>
    )
}

export default PreviewCardComponent