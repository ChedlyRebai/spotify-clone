import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import uniqid from "uniqid";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const AuthModal=useAuthModal()
  const {user} = useUser()
  const supabaseClient = useSupabaseClient();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    uploadModal.onClose();
    reset();
  };

  const router=useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try{
      setIsLoading(true)
     
      const imageFile=values.image?.[0];
      const songFile=values.song?.[0];
     
      if(imageFile.length==0) {
        toast.error("Please select an image")
        return
      } 

      if(songFile.length==0) {
        toast.error("Please select a song")
        return
      }
      const uniqueId=uniqid()
      const safeSongName = songFile.name.replace(/[^a-zA-Z0-9-.]/g, '_');
      const {data:songData,error:SongError}= 
      await supabaseClient.storage.from("songs").upload(`song-${safeSongName}-${uniqueId}`, songFile, {
        cacheControl: "3600",
        upsert: false,
      });
     
      if(SongError){
        setIsLoading(false)
        return toast.error("Error uploading song")
      }

      const {data:imageData,error:ImageError}= 
      await supabaseClient.storage.from("images").upload(`image-${imageFile.name}-${uniqueId}`,imageFile,{
        cacheControl:"3600",
        upsert:false,
      })
     
      if(ImageError){
        setIsLoading(false)
        return toast.error("Error uploading Image")
      }
      
      const {error:supabaseError,data:supabaseData} = await supabaseClient.from("songs").insert({
        user_id:user?.id,
        title:values.title,
        author:values.author,
        image_path:imageData.path,
        song_path:songData.path,
      })

      console.log(supabaseData,supabaseError)

      if(supabaseError){
        setIsLoading(false)
        return toast.error("Error uploading song")
      }

      router.refresh()
      toast.success("Song uploaded successfully")
      reset();
      uploadModal.onClose();
    }catch(err){
      toast.error("Error uploading song")    
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <Modal
      title="Add a Song"
      description="Upload a music to add to your library"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Title"
        />

        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Author "
        />

        <div>
          <div className="pb-1">
            Select a song
          </div>
            <Input
              id="song"
              type="file"
              disabled={isLoading}
              accept=".mp3"
              {...register("song", { required: true })}
            />
          
        </div>

        <div>
        <div className="pb-1">
            Select an image
          </div>
            <Input
              id="image"
              type="file"
              disabled={isLoading}
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
        <Button
          disabled={isLoading}
          type="submit"
        >
           Create
        </Button>

         
      </form>
    </Modal>
  );
};

export default UploadModal;
