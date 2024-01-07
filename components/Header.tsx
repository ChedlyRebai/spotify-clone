"use client"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { HiHome, HiSearch } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { twMerge } from "tailwind-merge"
import Button from "./Button"
type Props = {
    children: React.ReactNode
    className ?: string
    }

const Header = ({children,className}:Props) => {
  const router = useRouter()
  const {onOpen}=useAuthModal()

  const supabaseClient = useSupabaseClient()
    const {user}=useUser()
    console.log(user);
  const handleLogout=async ()=>{
    const {error} =await supabaseClient.auth.signOut();
    router.refresh()
  }
    return (
    <div
    className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-7`,className
    )}
    >
      <div className="w-full mb-4 flex items-center justify-between ">
        <div className="hidden md:flex gap-x-2 items-center ">
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                <RxCaretLeft className="" size={30} onClick={()=>router.back()}/>           
            </button>
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                <RxCaretRight className="" size={30} onClick={()=>router.back()}/>
            </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center justify-center hover:opacity-75 transition">
            <button className="rounded-full p-2 bg-white flex items-center *:first-letter:">
                <HiHome className="text-black" size={20}/>
            </button>

            <button className="rounded-full p-2 bg-white flex items-center *:first-letter:">
                <HiSearch className="text-black" size={20}/>
            </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
            {
                user ? (
                    <div className="flex gap-x-4 items-center">
                        
                        <Button className="bg-white px-6 py-2" onClick={handleLogout}>Logout</Button>
                        <Button className="bg-white" onClick={()=> router.push}/>
                    </div>
                ):(
                    <>
                <div>
                    <Button  onClick={onOpen} className="bg-transparent text-neutral-300 font-medium">
                        Sign Up
                    </Button>
                </div>
                <div>
                    <Button onClick={onOpen} className="bg-transparent bg-white px-6 py-2 font-medium">
                        Login
                    </Button>
                </div>
            </>
                )
            }
            
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header