import React, { useEffect, useRef } from 'react'
import { Icons, data } from '../../utility/Data';
import CatIcons from './CatIcons';
import Slider from './Slider';
import BigSlider from './BigSlider';
import Image from '../../utility/Image';
import { handlescroll } from '../Layout/Layout';
export default function Body() {
    const mainbody = useRef(null);
    // console.log(handleScroll)
    useEffect(() =>{}, []);
    return (
        <div
        onScroll={handlescroll}
        className=" thebody items-center flex justify-center my-2 pt-[155px]">
            <div ref={mainbody} id="mainbody" className="flex flex-col bg-white justify-center items-center rounded-lg desktop:w-[800px] tablet:w-[780px] mobile:w-[580px] smmobile:w-[530px] vsmmobile:w-[470px]">
                <BigSlider mainbody={mainbody}
                    imgData={['../assets/images/bigcarousel1.jpg', '../assets/images/bigcarousel2.jpg', '../assets/images/bigcarousel4.jpg']} />
                <div id="bartarin" data-link="" data-title="برترین ها">
                    {
                        <Slider mainbody={mainbody} data={data['bartarin']} title={'برترین ها'} />
                    }
                </div>
                <div id="CatsContainer" className="flex flex-wrap mb-6 justify-center gap-[1.5rem] tablet:gap-[2.5rem] smmobile:gap-[10px] mobile:gap-[10px] vsmmobile:gap-[10px]">
                    {
                        Icons.map((icon, index) => {
                            return <CatIcons key={index} title={icon.title} imagesrc={icon.src} link={'#'} />
                        })
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="./assets/images/amade.png"
                            classes="cardimg width660 animate-skeleton-loading"
                        />
                    </a>
                </div>
                <div id="porfrosh" data-link="category/12503" data-title="پرفروش هفته">
                    {
                        <Slider mainbody={mainbody} data={data['porfrosh']} title={'پرفروش هفته'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="assets/images/darkh.png"
                            classes="cardimg width660 animate-skeleton-loading"
                            alt=""
                        />
                    </a>
                </div>
                <div id="labkhandane" data-link="landing=262" data-title="لبخندانه">
                    {
                        <Slider mainbody={mainbody} data={data['labkhandane']} title={'لبخندانه'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image classes="cardimg width660 animate-skeleton-loading" src="assets/images/chesman.png" alt="" />
                    </a>
                </div>
                <div id="sabkzendegi" data-link="landing=246" data-title="سبک زندگی">
                    {
                        <Slider mainbody={mainbody} data={data['sabkzendegi']} title={'سبک زندگی'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="assets/images/sobhane.png"
                            classes="cardimg width660 animate-skeleton-loading"
                            alt=""
                        />
                    </a>
                </div>
                <div id="akhbar" data-link="landing=151" data-title="اخبار">
                    {
                        <Slider mainbody={mainbody} data={data['akhbar']} title={'اخبار'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="assets/images/moramel.png"
                            classes="cardimg width660 animate-skeleton-loading"
                            alt=""
                        />
                    </a>
                </div>
                <div id="mazhabi" data-link="landing=670" data-title="مذهبی">
                    {
                        <Slider mainbody={mainbody} data={data['mazhabi']} title={'مذهبی'} />
                    }

                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="assets/images/khadamat.png"
                            classes="cardimg width660 animate-skeleton-loading"
                            alt=""
                        />
                    </a>
                </div>
                <div id="tabliq" data-link="category/12615" data-title="تبلیغ گسترده">
                    {
                        <Slider mainbody={mainbody} data={data['tabliq']} title={'تبلیغ گسترده'} />
                    }
                </div>
                <div>
                    <a className="flex justify-center" href="">
                        <Image
                            src="assets/images/sidena.png"
                            classes="cardimg width660 animate-skeleton-loading"
                            alt=""
                        />
                    </a>
                </div>
                <div id="soroush" data-link="" data-title="سروش پلاس">
                    {
                        <Slider mainbody={mainbody} data={data['soroush']} title={'سروش پلاس'} />
                    }

                </div>
            </div>
        </div>
    )
}
