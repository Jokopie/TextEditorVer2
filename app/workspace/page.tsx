"use client"
import NotesPicker from '../../components/save/NotePicker'
import { File, Star, SquareChevronRight, Cloud, MessageSquareText, ChevronDown, Video, Lock, History, Circle,
         FilePlus, Save, FolderOpen, Share2, Download, Hand, Trash2, Info, Globe, FileCog,
} from "lucide-react";
import Link from 'next/link'
import Input  from "../../components/ui/input";
import { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import dynamic from 'next/dynamic';
const Tiptap = dynamic(() => import('../../components/ui/Tiptap'), { ssr: false });
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import Popup from '../../components/save/popup';
import { useCallback, useEffect } from 'react'; 

export default function Home() {
  const [fileName, setFileName] = useState('');
  const handleFileNameChange = (newFileName) => {
    setFileName(newFileName);
  };
  
  //dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [fileIsOpen, setFileIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleFileDropdown = () => {
    setFileIsOpen(!fileIsOpen);
  };
  const { data: session } = useSession();

  //save
  const router = useRouter();
  const [content, setContent] = useState<string>('')
  const handleContentChange = (reason: any) => {
    setContent(reason)
  }
  const handleSubmit = async (e: any) => {
    // localStorage.clear();
    e.preventDefault()
    const data = {
      id: uuidv4(),
      content: content,
      email: session?.token.email,
      filename: fileName,
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

  //Popup
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className={`pt-7 px-4 w-full min-h-screen pb-10 ${isPopupVisible ? "opacity-50" : ""}`}
      >
        <div className="flex items-center space-x-4">
              <Link href='../dashboard' className='scale-150 text-blue-400'><File className=""/></Link>
              <div className='-mt-8'>
                <Input 
                  className="h-5 w-64 border-none"
                  placeholder="Main title of your document"
                  onFileNameChange={handleFileNameChange} 
                />
                <Label onClick={toggleFileDropdown} className='text-base hover:bg-gray-200 hover:rounded'> File </Label>
                {fileIsOpen && (
                  <div className="z-10 absolute left-0 ml-14 mt-1 w-96 bg-white rounded-md shadow-lg py-2">
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <FilePlus className='scale-75'/>
                      <div className='pl-2'>New</div>
                    </a>
                    <button type="submit" className="w-96 flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Save className='scale-75'/>
                      <div className='pl-2'>Save</div>
                    </button>
                    <a onClick={togglePopup} className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <FolderOpen className='scale-75'/>
                      <div className='pl-2'>Open</div>
                    </a>
                    <hr className=" border-gray-200"/>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Share2 className='scale-75'/>
                      <div className='pl-2'>Share</div>
                    </a>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Download className='scale-75'/>
                      <div className='pl-2'>Download</div>
                    </a>
                    <hr className=" border-gray-200"/>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Hand className='scale-75'/>
                      <div className='pl-2'>Move</div>
                    </a>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Trash2 className='scale-75'/>
                      <div className='pl-2'>Move to trash</div>
                    </a>
                    <hr className=" border-gray-200"/>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Info className='scale-75'/>
                      <div className='pl-2'>Details</div>
                    </a>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <Globe className='scale-75'/>
                      <div className='pl-2'>Language</div>
                    </a>
                    <a className="flex block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <FileCog className='scale-75'/>
                      <div className='pl-2'>Page Setup</div>
                    </a>
                  </div>
                )}
                <Label className='text-base ml-3'> Edit </Label>
                <Label className='ml-3 text-base'> View </Label>
                <Label className='ml-3 text-base'> Insert </Label>
                <Label className='ml-3 text-base'> Format </Label>
                <Label className='ml-3 text-base'> Tools </Label>
                <Label className='ml-3 text-base'> Extensions </Label>
                <Label className='ml-3 text-base'> Help {session?.token.email} </Label>
                {/* <p>File Name: {fileName}</p>  */}
                <div className="flex space-x-5 ml-72 -mt-12">
                  <Star className="h-5 w-5 ml-3"/>
                  <SquareChevronRight className="h-5 w-5"/>
                  <Cloud className="h-5 w-5"/>
                </div>
                <div className='flex space-x-5 -mt-4' style={{position: 'fixed', right: '10px'}}>
                  <History/>
                  <MessageSquareText/>
                  <Video/>
                  <ChevronDown className='scale-75' style={{position: 'relative', left:'-20px'}} />
                  <div className='p-2 flex border rounded-full bg-sky-200 h-10 items-center' style={{position: 'relative', left:'-25px', bottom:'7px'}}>
                    <div className='flex'>
                      <Lock className='scale-75'/>
                      <label className='ml-2'>Share</label>
                    </div>
                    <ChevronDown className='ml-1 scale-75' />
                  </div>
                  <Circle onClick={toggleDropdown} className="cursor-pointer scale-150" style={{position: 'relative', left:'-20px'}}/>
                  {isOpen && (
                  <div className="absolute right-0 mt-8 w-30 bg-white rounded-md shadow-lg py-2">
                    <a href="/account" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Account
                    </a>
                    <a href="../" onClick={() => signOut()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Sign Out
                    </a>
                  </div>)}
                </div>
              </div>
        </div>
        {/* <NotesPicker /> */}
        <div className="w-full flex flex-col justify-stretch px-1 pt-5">
          <Tiptap
            content={content}
            onChange={(newContent: string) => handleContentChange(newContent)}
          />
        </div>
        {/* </form> */}
      </form>
      {isPopupVisible && <Popup className="top-0" togglePopup={togglePopup} gmailll={session?.token.email}/>}
    </div>
  )
}