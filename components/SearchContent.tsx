"use client";
import { Song } from "@/types";
import LikedButton from "./LikedButton";
import MediaItem from "./MediaItem";

type SearchContentProps = {
  songs: Song[];
};

const SearchContent = ({ songs }: SearchContentProps) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col items-center  h-full">
        <p className="text-neutral-400 font-medium text-md">No songs</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song, index) => (
        <div key={index} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} key={index} data={song} />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
