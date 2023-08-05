import React from 'react'
import Image from '../../utility/Image'

export default function CatIcons({ title, link ,imagesrc}) {
    return (
        <div>
            <a href={link} className='iconscarda'>
                <div
                className='flex flex-col gap-2'>
                    <div>
                        <Image src={imagesrc} alt="" classes='iconcardimg animate-skeleton-loading' />
                    </div>
                    <div
                    className="text-center text-xs">
                        {title}
                    </div>
                </div>
            </a>
        </div>
    )
}
