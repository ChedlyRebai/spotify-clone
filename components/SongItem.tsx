"use client"
import { Song } from "@/types"

type SongItemProps = {
    data:Song,
    onClick:(id:string)=>void
}
const SongItem = ({data,onClick}:SongItemProps) => {
  return (
    <div>
      Song
    </div>
  )
}

export default SongItem
