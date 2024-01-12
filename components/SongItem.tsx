"use client"
import useLoadImage from "@/hooks/useLoadImage"
import { Song } from "@/types"
import Image from "next/image"

type SongItemProps = {
    data:Song,
    onClick:(id:string)=>void
}
const SongItem = ({data,onClick}:SongItemProps) => {
    const imagePath=useLoadImage(data);


  return (
    <div
        onClick={()=>onClick(data.id)}
        className="
        relative
        group
        flex
        flex-col items-center
        rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer 
        hover:bg-neutral-400/10 transition p-3 
        "
    >

      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image 
        src={imagePath || "/images/liked.png"}
        layout="fill"
        objectFit="cover"
        alt="Image"
        
        />

      </div>
    </div>
  )
}

export default SongItem
