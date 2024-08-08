'use client'
import React, { useState } from 'react'
// import Tiptap from '../ui/Tiptap'
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
const Tiptap = dynamic(() => import('../ui/Tiptap'), { ssr: false });

const Todo = () => {
  const [content, setContent] = useState<string>('')
  const handleContentChange = (reason: any) => {
    setContent(reason)
  }
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    // localStorage.clear();
    e.preventDefault()
    const data = {
      id: uuidv4(),
      content: content,
    }
    // console.log(data)
    const existingDataString = localStorage.getItem('myData')
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : []
    const updatedData = [...existingData, data]
    localStorage.setItem('myData', JSON.stringify(updatedData))
    // console.log(updatedData)
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      // console.log(response)
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setContent('');
        localStorage.removeItem('myData');
        const form = e.target;
        form.reset();
        router.refresh();
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save data');
    }
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-stretch px-1 pt-5 "
      // place-items-center items-center
    >
      {/* <div className="text-3xl text-center text-sky-300 mb-10">
        Notes Picker
      </div> */}
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
      {/* <button type="submit" className="px-4 bg-sky-700 text-white py-2 rounded-md">
        Add
      </button> */}
    </form>
  )
}

export default Todo