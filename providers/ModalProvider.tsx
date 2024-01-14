"use client"

import AuthModal from "@/components/AuthModal"
import SubscribeModal from "@/components/SubscribeModal"
import UploadModal from "@/components/UploadModal"
import { ProductWithPrice } from "@/types"
import { useEffect, useState } from "react"


type ModalProviderProps = {
  products:ProductWithPrice[]
}
const ModalProvider = ({products}:ModalProviderProps) => {
    const [isMounted,setIsMounted]=useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])
    

    if(!isMounted) return null

  return (
    <>
        <UploadModal/>
        <SubscribeModal products={products}/>
        <AuthModal/>
    </>
  )
}

export default ModalProvider
