import React from 'react'
export default function Stat({num, txt}:{num:string, txt:string}){
  return (
    <div className="card p-4">
      <div className="font-extrabold text-lg">{num}</div>
      <div className="text-slate-300">{txt}</div>
    </div>
  )
}
