import { File, FileText, Search, X } from "lucide-react";
import Input from "../ui/input";
import { useState, useEffect } from 'react';

const Popup = ({ togglePopup, className, gmailll }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    // console.log("Popup: ",gmail); api/open/?userId=${userId}
    useEffect(() => {
        const fetchFiles = async () => {
        try {
            const response = await fetch(`api/open?email=${gmailll}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFiles(data);
        } catch (error) {
            setError(error.message);
            console.error("Failed to fetch files:", error);
        }
    };
        fetchFiles();
    }, [gmailll]);

  return (
    <div 
        className="flex bg-slate-200 rounded-lg z-50 w-5/6"  
        style={{position: 'absolute', top:'15%', left:'7%', height:'500px', }}  
    >
      <div className="w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative flex left-4 top-5 w-full">
            <File className="text-blue-400 scale-150"/>
            <h2 className="ml-3 flex">Open a file </h2>
            <div className="flex ml-60 h-10 items-center justify-left rounded p-5 bg-slate-300 w-1/2 border-none">
                <Search/>
                <div className="ml-3">Search</div>
            </div>
        </div>
        <div className="mt-10 ml-4 font-light">Yesterday</div>
        <div className="grid grid-cols-5 gap-1 overflow-auto" style={{ maxHeight: '350px' }}>
          {files.map(file => (
            <div key={file.gmail} className="relative pb-3 flex mt-5 ml-4 border-sky-400 border rounded w-52 h-52 items-end justify-center">
              <div className="opacity-50 text-xs absolute top-0 left-0 p-2" dangerouslySetInnerHTML={{ __html: file.content }}></div>
              <FileText className="text-blue-400"/>
              <div className="pl-2"> {file.filename} </div>
            </div>
          ))}
        </div>
        <div className="absolute top-4 right-4 hover:bg-slate-300 rounded-full h-9 w-9 flex items-center justify-center">
            <X className="opacity-75" onClick={togglePopup}/>
        </div>
      </div>
    </div>
  );
};

export default Popup;
