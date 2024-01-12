import useUploadModal from "@/hooks/useUploadModal"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Input from "./Input"
import Modal from "./Modal"

const UploadModal = () => {
    const [isLoading,setIsLoading]=useState(false)
    const uploadModal=useUploadModal()

    const {register,handleSubmit,reset}=useForm<FieldValues>({
        defaultValues:{
            author:'',
            title:'',
            song:null,
            image:null
        }

    })

    const onChange = (open:boolean) =>{
        uploadModal.onClose()
        reset()
    }

    const onSubmit:SubmitHandler<FieldValues> = (values) =>{

    }
    
  return (
    <Modal title="Add a Song"
    description="Upload a music to add to your library"
    isOpen={uploadModal.isOpen}
    onChange={onChange}
    >

     <form
     onSubmit={handleSubmit(onSubmit)}
     >
        <Input
        id="title"
        disabled={isLoading}
        {...register('title',{required:true})}
        placeholder="Title"
        />
        

     </form>
    </Modal>
  )
}

export default UploadModal
