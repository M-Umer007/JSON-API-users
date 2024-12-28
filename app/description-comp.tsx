"use client"
import { useState } from "react";
export default function Description(){
    const [content , setContent] = useState("");
     function showDes(){
    const desc = "This is a simple project that fetches data from an API and displays it in a list. When you click on a user, you will be taken to a new page that displays more detailed information about that user. This project is built using Next.js and Tailwind CSS. It is a great starting point for beginners who want to learn how to fetch data from an API and display it on a website."
   
    setContent(desc);
}
     function removeDes(){
    const desc = ""
   
    setContent(desc);
}

    return (
        <div className="p-4 flex flex-col items-center">
        <button
          onClick={showDes} className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"> Show Description
        </button>

        {content && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <p className="text-gray-700 text-base text-center font-medium w-[70vw]">
    {content}
  </p>

          <div className="flex justify-center items-center">
              <button
              onClick={removeDes} className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 ">
              Remove Description
                      </button>
          </div>

        </div>
      )}
        </div>
    );
}