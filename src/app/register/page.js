 
 "use client"

import Register from "../components/register";
import { Suspense } from "react";

export default function page (){
    return(
        <Suspense fallback={<div className="min-h-screen bg-black"></div>}>     
    
            <Register />

        </Suspense>
    
    )
}