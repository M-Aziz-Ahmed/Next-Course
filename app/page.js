'use client'
import Navbar from "@/components/Navbar";
import Notifivcation from "@/components/notifivcation";
import Tabs from "@/components/Tabs";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [notifivcation, setNotifivcation] = useState('');
  const notice = () => {
    setNotifivcation('Some Notification 🔔');
  }
  return (
    <>
      <div className="">
        <div className="absolute top-20 right-5">
          {notifivcation &&(
            <Notifivcation notice = {notifivcation} notices = {setNotifivcation} />
          )}
          
        </div>
          <button onClick={notice} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">Send Notice</button>
        <Tabs />
      </div>

    </>
  );
}
