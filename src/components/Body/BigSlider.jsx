import React, { useEffect } from 'react'
import useBigSlier from '../../utility/useBigSlier'
export default function BigSlider({ mainbody, imgData }) {
    const [handleTouchmove, Values, handleTransitionEnd, setMouseUp, SetMouseDown, index, left] = useBigSlier(mainbody, imgData);
    return (
        <div id="bigslider" className=" ltr big-slider w-[100%] h-[300px] flex mb-[65px] vsmmobile:mb-0 vsmmobile:h-[40%]">
            <div className="overflow-hidden relative h-[100%] my-[20px]">
                <div onTransitionEnd={handleTransitionEnd} onTouchStart={SetMouseDown} onTouchMove={handleTouchmove} onMouseUp={setMouseUp} onTouchEnd={setMouseUp} onMouseMove={handleTouchmove} onMouseDown={SetMouseDown} className={`items w-[300%] h-[100%] ${Values.current.animation ? "transition-[left] ease-out duration-200" : ""} relative top-0 flex gap-3 vsmmobile:gap-[2rem] vsmmobile:h-[85%]`} style={{ left: `${left}px` }}>
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={imgData[(index - 1 + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide  cursor-pointer float-left  justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={imgData[(index + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={
                                imgData[
                                (
                                    index + 1 + imgData.length
                                )
                                % imgData.length
                                ]
                            }
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
