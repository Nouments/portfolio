import {  useEffect, useState } from "react";

export  function useLoading(animTime: number = 3000){
    const [loaded,setLoaded]=useState(false)
    useEffect(()=>{
         const timer = setTimeout(()=>{setLoaded(true)},animTime)
          return () => clearTimeout(timer);
    },[animTime])
    return loaded
}

