"use client"
import { useState } from "react";
import { handleSubmit } from "../../Component/formaction/page"
import { useRef } from "react"
  export const metadata={
                title:"Server Action",
                description:"welcome to the server action "
        }
export default function page() {
    const [name,setName]=useState();
    const data=()=>{

        if(!handleSubmit===""){
            console("data is empty fill the data")
        }
    }
   let ref=useRef();
    return (
        <div  className="flex items-center justify-center min-h-screen bg-gray-100">
            <form action={(e)=>{handleSubmit(e);ref.current.reset()}} ref={ref} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h1>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text" name="name" id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        name="add"id="add"
                        placeholder="Enter your address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
                    Submit
                </button>
            </form>
        </div>
    )
}
