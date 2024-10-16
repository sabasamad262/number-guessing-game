//import NumberGuessing from "@/components/number-guessing";
"use client";
import { useState } from "react";
export default function Home() {
  /*let count = 0;
  const [likes , setLikes] = useState(0)
  
  //count =2
  return (
    <div className="p-6">
      <h1>Count Likes  {likes}</h1>
<button className="bg-black text-white p-2 rounded-full" onClick ={() =>setLikes(likes+1)}
>increase</button>
<br></br>
<br></br>

<button className="bg-black text-white p-2 rounded-full" onClick={() =>setLikes(likes-1)}
  >Decrease</button>
  <br></br>
  <br></br> d

<button className="bg-black text-white p-2 rounded-full" onClick={()=> setLikes(likes*2)}
  >Multipily</button>
  <br></br>
  <br></br>
<button className="bg-black text-white p-2 rounded-full" onClick={()=>setLikes(likes/2)}>Divide </button>
    </div>
  );
}
//figma.com
//ui  ux
 // npx shadcn@latest init
 //npx shadcn add button input

 // create porfolio website using figma & convert in to nextJs project.*/
  const [value, setValue] = useState('')
  return (
    <input className="bg-black text-pink-400 p-2"
     value={value} 
    onChange={(e) => setValue(e.target.value)}
    />
  );

}