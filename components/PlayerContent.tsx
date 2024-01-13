"use client"

import { Song } from "@/types"
import LikeButton from "./LikedButton"
import MediaItem from "./MediaItem"

type PlayerContentProps = {
    song:Song,
    songUrl:string,

}

const PlayerContent = ({song,songUrl}:PlayerContentProps) => {
  return (
    <div className="grid grid-cols md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
            <div className="flex items-center gap-x-4">
                <MediaItem data={song}/>
                <LikeButton songId={song.id}/>
            </div>
        </div>
      
    </div>
  )
}

export default PlayerContent
