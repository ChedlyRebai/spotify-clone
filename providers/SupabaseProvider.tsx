"use client"

import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"

type IProps= {
    children:React.ReactNode
}

const SupabaseProvider = ({children}:IProps) => {
    const [supabaseClient]=useState(()=>
        createClientComponentClient<Database>()
    )

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider