"use client"

import SongItem from "@/components/SongItem"
import usePlayer from "@/hooks/usePlayer"
import { Song } from "@/types"

type Props = {
    songs:Song[]
}
const PageContent = ({songs}:Props) => {

  const onplay= usePlayer();
  
    if(songs.length===0){
        return (
            <div className="mt-4 text-neutral-400">
                No songs found
            </div>
        )
    }
  return (
    <div 
    className="grid grid-cols-2 
    sm:grid-cols-3
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap-4 mt-4

    "
    >
      {
        songs.map((song)=>(
            <SongItem
            key={song.id}
            onClick={(id:string)=>{onplay.}}
            data={song}
            />
            ))
      }
    </div>
  )
}

export default PageContent
