import { useState } from "react"
function App() {
  const [color, setColor] = useState("red")

  return (
    // onclick ko ek funtion chahiye hota ha to ham arrow de denge isko or callback jo ha setcolor ko call kr rhe hain hm function k ander k hm ik or function call kr rhe hain
   <div className="w-full h-screen duration-300" style={{backgroundColor: color}} >
    <div className="flex flex-wrap fixed justify-center inset-x-0 bottom-12 ">
      <div className="flex flex-wrap justify-center bg-white gap-4 shadow-2xl px-3 py-3 rounded-2xl">
        <button  onClick={()=>setColor("red")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-red-600 text-black">red</button>
        <button onClick={()=>setColor("green")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-green-600 text-black">green</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-yellow-600 text-black">yellow</button>
        <button onClick={()=>setColor("pink")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-pink-600 text-black">pink</button>
        <button onClick={()=>setColor("purple")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-purple-600 text-black">purple</button>
        <button onClick={()=>setColor("white")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-black text-white">white</button>
        <button onClick={()=>setColor("blue")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-blue-600 text-black">blue</button>
        <button onClick={()=>setColor("indigo")} className="outline-none px-2 py-2 rounded-full shadow-2xl bg-indigo-600 text-black">indigo</button>
      </div>
    </div>
   </div>
    
  )
}

export default App
