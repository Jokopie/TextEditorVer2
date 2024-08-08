"use client";
import React from "react";
import { type Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Code, Undo2, Redo2,
         ZoomIn, ChevronDown, Tally1, Minus, Plus, Highlighter, Baseline, Link2, MessageSquarePlus, Image,
         AlignLeft,
         ArrowsUpFromLine,
         ListChecks,
         GanttChart,
         Eraser,
         Pencil,
         ChevronUp,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    // justify-between items-start justify-center items-center
    <div className="z-0 pl-2.5 py-0.5 rounded-full flex w-full bg-slate-100 flex-wrap ">
      <div className="flex items-center gap-0.5 w-full h-full py-2 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className="hover:bg-slate-300 text-black h-10 rounded h-10 w-8 p-1"
        >
          <Undo2 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className="hover:bg-slate-300 text-black h-10 rounded h-10 w-8 p-1"
        >
          <Redo2 className="w-5 h-5" />
        </button>
        <div className="flex hover:bg-slate-300 rounded">
          <button
            onClick={(e) => {
              e.preventDefault();
              // editor.chain().focus().toggleBold().run();
            }}
            className="h-10 w-8 p-1"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <ChevronDown className='scale-75 mt-2 -ml-2'/>
        </div>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <div className="h-10 w-25 p-2 flex hover:bg-slate-300 rounded">
          Normal text
          <ChevronDown className='scale-75 '/>
        </div>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <div className="h-10 w-25 p-2 flex hover:bg-slate-300 rounded">
          Arial
          <ChevronDown className='scale-75'/>
        </div>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="h-10 w-25 p-2 flex hover:bg-slate-300 rounded"
        >
          <Minus className="w-5 h-5" />
        </button>
        <div className="h-10 w-25 p-2 flex hover:bg-slate-300 rounded">
          14
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="h-10 w-25 p-2 flex hover:bg-slate-300 rounded"
        >
          <Plus className="w-5 h-5" />
        </button>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400"/>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            `${editor.isActive("bold")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            `${editor.isActive("italic")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            `${editor.isActive("underline")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            // editor.chain().focus().toggleUnderline().run();
          }}
          className={
            `${editor.isActive("baseline")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Baseline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={
            `${editor.isActive("highlighter")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Highlighter className="w-5 h-5" />
        </button>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <button
          onClick={(e) => {
            e.preventDefault();
            // editor.chain().focus().toggleUnderline().run();
          }}
          className={
            `${editor.isActive("link")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Link2 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={
            `${editor.isActive("comment")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <MessageSquarePlus className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={
            `${editor.isActive("image")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Image className="w-5 h-5" />
        </button>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <div className="flex hover:bg-slate-300 rounded">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={
              `${editor.isActive("alignleft")
                ? "bg-sky-700 hover:bg-sky-700 text-white"
                : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
            }
          >
            <AlignLeft className="w-5 h-5" />
          </button>
          <ChevronDown className='scale-75 mt-2 -ml-2'/>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={
            `${editor.isActive("linespacing")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <ArrowsUpFromLine className="w-5 h-5" />
        </button>
        <div className="flex hover:bg-slate-300 rounded">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={
              `${editor.isActive("list")
                ? "bg-sky-700 hover:bg-sky-700 text-white"
                : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
            }
          >
            <ListChecks className="w-5 h-5" />
          </button>
          <ChevronDown className='scale-75 mt-2 -ml-2'/>
        </div>
        <div className="flex hover:bg-slate-300 rounded">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={
              `${editor.isActive("bulletlist")
                ? "bg-sky-700 hover:bg-sky-700 text-white"
                : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
            }
          >
            <List className="w-5 h-5" />
          </button>
          <ChevronDown className='scale-75 mt-2 -ml-2'/>
        </div>
        <div className="flex hover:bg-slate-300 rounded">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={
              `${editor.isActive("listorder")
                ? "bg-sky-700 hover:bg-sky-700 text-white"
                : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
            }
          >
            <ListOrdered className="w-5 h-5" />
          </button>
          <ChevronDown className='scale-75 mt-2 -ml-2'/>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            // editor.chain().focus().toggleUnderline().run();
          }}
          className={
            `${editor.isActive("indent")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <GanttChart className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            // editor.chain().focus().toggleUnderline().run();
          }}
          className={
            `${editor.isActive("eraser")
              ? "bg-sky-700 hover:bg-sky-700 text-white"
              : "hover:bg-slate-300"} h-10 w-25 p-2 flex rounded`
          }
        >
          <Eraser className="w-5 h-5" />
        </button>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <div className="flex hover:bg-slate-300 rounded-full gap-1 h-10 w-25 p-2">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={
              `${editor.isActive("edit")
                ? "bg-sky-700 hover:bg-sky-700 text-white"
                : "hover:bg-slate-300"}`
            }
          >
            <Pencil className="w-5 h-5" />
          </button>
          Editing
          <ChevronDown className='scale-75 ml-10'/>
        </div>
        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50 text-slate-400" />
        <div className="flex hover:bg-slate-300 rounded"><ChevronUp className='scale-75'/></div>
      </div>
    </div>
  );
};

export default Toolbar;
