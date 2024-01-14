import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToastProvider from "@/providers/ToastProvider";
import UserProvider from "@/providers/UserProvider";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify",
};

export const revalidate=0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs=await getSongsByUserId();
  
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
