
// import RegisterPassword from "../components/password-form";

// export default function page (){
//     return(

//         <div>
//             <RegisterPassword />

//         </div>
//     )
// }
import { Suspense } from "react";
import RegisterPassword from "../components/password-form";


export default function Page({searchParams}) {

  return (
    <Suspense fallback={null}>
      <RegisterPassword email={searchParams.email || ""} />
    </Suspense>
  );
}