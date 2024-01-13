

"use client"

import useGetSongById from "@/hooks/useGetSongsById"
import useLoadSong from "@/hooks/useLoadSong"
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent"

const Player = () => {
  const player=usePlayer()
  const {song} = useGetSongById(player.activeId)

  const songUrl =useLoadSong(song!)

  if(!song || !songUrl || !player.activeId) return null


  return (
    <div 
    className="fixed 
    bottom-0 
    py-2 w-full 
    h-[80px]
    px-4
     bg-black
  "
    >
      <PlayerContent
       key={songUrl}
       song={song}
      songUrl={songUrl}
      />
      
    </div>
  )
}

export default Player
