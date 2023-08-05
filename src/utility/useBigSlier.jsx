import React, { useEffect, useState, useRef } from "react";
export default function useBigSlier(mainbody, imgData) {
    const [left, setLeft] = useState(0);
    const [index, setIndex] = useState(0);
    const Values = useRef({
        index: 0,
        allowShift: true,
        threshold: 100,
        mouseDown: false,
        startPosition: 0,
        EndPosition: 0,
        posX1: 0,
        posX2: 0,
        posFinal: -800,
        posInitial: null,
        threshold: 100,
        animation: true,
        widht: 0,
    })
    useEffect(() => {

        if (mainbody) {
            Values.current.widht = parseInt(window.getComputedStyle(mainbody.current).width);
            setLeft(-Values.current.widht);
        }
        else return;
    }, [mainbody]);

    function handleTouchmove(event) {
        event = event || window.event;
        event.preventDefault();
        if (Values.current.mouseDown) {
            if (event.type == 'touchmove') {
                Values.current.posX2 = Values.current.posX1 - event.touches[0].clientX;
                Values.current.posX1 = event.touches[0].clientX;
            } else {
                Values.current.posX2 = Values.current.posX1 - event.clientX;
                Values.current.posX1 = event.clientX;
            }
            setLeft((prevstate) => prevstate - Values.current.posX2);
        }
    }
    function getPosition(event) {
        return (event.type === 'touchstart') ? event.touches[0].clientX : event.type == 'touchend' ? Values.current.posX1 : event.clientX;
    }
    function SetMouseDown(e) {
        Values.current.mouseDown = true;
        Values.current.posX1 = getPosition(e);
        Values.current.startPosition = getPosition(e);
    }
    function setMouseUp(e) {
        Values.current.mouseDown = false;
        Values.current.EndPosition = getPosition(e);
        let dir = Values.current.EndPosition - Values.current.startPosition > 0 ? 'right' : 'left';
        if (Math.abs(Values.current.EndPosition - Values.current.startPosition) > Values.current.threshold) {
            shifttheAnimation(dir)
            // console.log('za rp') //should move in the way
        }
        else {
            Values.current.animation = true;
            setLeft(-Values.current.widht);
        }

    }
    function shifttheAnimation(dir) {
        Values.current.animation = true;
        if (dir === 'right') {
            Values.current.index = ((Values.current.index + imgData.length) % imgData.length) - 1
            setLeft(0);
        }
        else {
            Values.current.index = ((Values.current.index + imgData.length) % imgData.length) + 1
            setLeft(-Values.current.widht * 2);

        }
    }

    function handleTransitionEnd(e) {
        // Values.current.animation=false;
        Values.current.animation = false;
        setIndex(Values.current.index);
        setLeft(-Values.current.widht);
    }

    return [handleTouchmove, Values, handleTransitionEnd, setMouseUp, SetMouseDown, index, left];
}
