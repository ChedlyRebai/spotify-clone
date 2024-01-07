"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} =useSessionContext();
    const {onClose,isOpen}= useAuthModal()

    const onChange = (open:boolean) => {
        if(!open){
            onClose()
        }
    }
  return (
    <Modal
      title="Welcome"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
            theme: ThemeSupa
        }}
        theme="dark"
        providers={['google', 'facebook','github']}
      />
    </Modal>
  );
};

export default AuthModal;
