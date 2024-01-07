
"use client"

import { Toaster } from "react-hot-toast"


const ToastProvider = () => {
  return (
    <Toaster
    toastOptions={{
        style:{
            background: "#1F2937",
            color: "#fff",
        }
        
    }}
    />
      
    
  )
}

export default ToastProvider
