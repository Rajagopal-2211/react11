// import { useEffect, useRef, useState } from "react";
import React ,{ useEffect , useRef, useState } from 'react'
import VIDEO from "./Video.mp4";
const RefExample = ()=>{
    const [play , setplay] = useState(true);
    const eleRef = useRef();
    let VideoRef = useRef();
    console.log(VideoRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText="React Ref"
    })
    let playORpause=()=>{
        if(play === true){
            VideoRef.current.play();
            console.log(play);
            setplay(false);
        }else{
            VideoRef.current.pause();
            console.log(play)
            setplay(true)

        }
    }
    return (
    <div>
        <h1 ref={eleRef}>RefExample </h1>
        <video src={VIDEO} ref={VideoRef} onClick={playORpause}></video>
    </div>
    );
};
export default RefExample
