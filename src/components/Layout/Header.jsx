import React,{useEffect,useState} from 'react';
// import logo from '../../';
// import
import Image from '../../utility/Image';
export default function Header() {    
    let currenetposition=window.scrollY;
    const [animationstate, animationstateset] = useState('')
    useEffect(()=>{
        window.addEventListener('scroll',handlescroll)
        return ()=>{
          window.removeEventListener('scroll',handlescroll)
        }
      },[])

      function handlescroll (e){
        animationstateset(currenetposition-window.scrollY>0 ? 'up':'down');
        currenetposition=window.scrollY
    }
    return (
        <div
        onScroll={handlescroll}
        className={`stickyheader ${animationstate =='up'? 'animate-blueheaderanimationopen':animationstate=='down'?'animate-blueheaderanimatioclose closeanimation':'animate-blueheaderanimationopen'}`}>
            <div id="blueheader" className="bluheader">
                <div className={`align-bottom flex flex-col items-center pr-[7%] py-2 w-max h-fit`}>
                        <Image  src={'./assets/images/logo.png'} classes={"animate-skeleton-loading rounded-2xl w-[45px] h-[45px]"}/>
                        <h5 className="text-white">سروش پلاس</h5>
                </div>
            </div>
            <div id="whiteheader" className="whiteheader">
                <div id="navlogo" className={`align-bottom flex relative flex-col items-center pr-[7%] pt-[0.7rem] pb-[0.5rem] w-max vsmmobile:animate-none vsmmobile:pr-[1%] ${animationstate=='up'?'animate-logoclose closelogo':animationstate=='down'?'animate-logoopen':'closelogo'}`}>
                    <Image src={'./assets/images/logo.png'} classes="animate-skeleton-loading rounded-2xl w-[30px] h-[30px]"/>
                        <h5 className="text-black text-xs whitespace-nowrap">سروش پلاس</h5>
                </div>
                <div className="flex flex-row justify-evenly text-center w-full h-min  items-center">
                    <div className="flex flex-row justify-around text-center h-min items-center tablet:flex smmobile:hidden vsmmobile:hidden">
                        <a className="text-sm mx-5 font-bold" href="">صفحه نخست</a>
                        <a className="text-sm mx-5 font-bold" href="">بلاگ</a>
                        <a className="text-sm mx-5 font-bold" href="">دریافت برنامه</a>
                    </div>
                    <div className="relative bg-white text-gray-300 focus-within:text-gray-400 desktop:w-[25%] tablet: w-[25%] mobile:w-[70%] smmobile:w-[80%] vsmmobile:w-[90%]">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="q"
                            className="py-2 px-3 text-sm border rounded-3xl vsmmobile:rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-[100%]"
                            placeholder="جستجو در ویترین"
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
