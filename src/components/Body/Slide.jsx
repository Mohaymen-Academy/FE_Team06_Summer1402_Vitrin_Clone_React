import React from 'react'
import Image from '../../utility/Image'

export default function Slide({imagesrc,title}) {
    return (
        <div
            className=' slide  flex justify-center items-center pl-[2.95rem] pr-[2.5rem] h-fit pt-[8%]'>
            <a className="absolute border-zinc-700" href="#">
                <div
                className="flex h-fit bg-white">
                    <div>

                    <Image classes={'px-[1px] rounded-full w-[100%] itesm animate-skeleton-loading'} src={imagesrc} alt="" />
                    <div
                    className="text-center pb-[5px] text-sm">
                        {title}
                    </div>
                        </div>
                </div>
            </a>
        </div>
    )
}
