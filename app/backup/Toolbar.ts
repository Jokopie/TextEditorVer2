"use client"

import React from 'react'
import { type Editor} from "@tiptap/react"
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Heading1, Heading3, Code, Eraser, Undo2, Redo2, 
         Highlighter, Columns2, AlignLeft, AlignRight, AlignCenter, AlignJustify, Table, Underline, Quote, 
         LayoutPanelTop, ZoomIn, Tally1, ChevronDown, Minus, Plus, Baseline, Link2, MessageSquarePlus, Image, 
         ArrowsUpFromLine, ListChecks, GanttChart, Pencil, ChevronUp, 
} from "lucide-react"
import { Toggle } from "./toggle"

type Props = {
    editor: Editor | null;
    description: string;
}

const Toolbar = ({ editor, description }: Props) => {
    if (!editor)
        return null

    return (
        // <div>
        // justify-center items-center
        <div className="rounded-full flex justify-between items-start gap-1 w-full flex-wrap border border-gray-700">
            {/* //<div className="border border-input bg-transparent mt-5 rounded-3xl">  */}
            <div className="px-3 py-2 flex gap-0.5 w-full flex-wrap ">
                {/* Undo */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().undo().run();
                    }}
                    className={"text-sky-400 p-1"}
                >
                        <Undo2 className="w-5 h-5" />
                </button>
                {/* Redo */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().redo().run();
                    }}
                    className={ "text-sky-400 p-1"}
                >
                        <Redo2 className="w-5 h-5" />
                </button>
                {/* Zoom */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <ZoomIn className="w-5 h-5" />
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50" />
                </button>
                {/* Style Text */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <div className="w-5 h-5 w-full flex gap-1"> Normal text <ChevronDown className='scale-75'/></div>
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* Arial */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <div className="w-5 h-5 w-full flex gap-1"> Arial <ChevronDown className='scale-75'/></div>
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* - */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Minus className="w-5 h-5 scale-75"/>
                </button>
                {/* Font Size */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <div className="w-5 h-5 w-full"> 14 </div>
                </button>
                {/* + */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Plus className="w-5 h-5 scale-75"/>
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* h1 */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level:1 }).run();
                    }}
                    className={
                        editor.isActive("heading")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Heading1 className="w-5 h-5" />
                </button> */}
                {/* h2 */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level:2 }).run();
                    }}
                    className={
                        editor.isActive("heading2")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Heading2 className="w-5 h-5" />
                </button> */}
                {/* h3 */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level:3 }).run();
                    }}
                    className={
                        editor.isActive("heading3")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Heading3 className="w-5 h-5" />
                </button> */}
                {/* Bold */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={
                        editor.isActive("bold")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Bold className="w-5 h-5" />
                </button>
                {/* Italic */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={
                        editor.isActive("italic")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Italic className="w-5 h-5" />
                </button>
                {/* Underline */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleUnderline().run();
                    }}
                    className={
                        editor.isActive("underline")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Underline className="w-5 h-5" />
                </button>
                {/* Strike */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={
                        editor.isActive("strike")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Strikethrough className="w-5 h-5" />
                </button>
                {/* TextColor */}
                <button
                    className={"text-sky-400 p-1"}
                >
                        <Baseline className="w-5 h-5" />
                </button>
                {/* Code */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleCode().run();
                    }}
                    className={
                        editor.isActive("code")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Code className="w-5 h-5" />
                </button> */}
                {/* Highlight */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHighlight().run();
                    }}
                    className={
                        editor.isActive("highlight")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Highlighter className="w-5 h-5" />
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* Link */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Link2 className="w-5 h-5"/>
                </button>
                {/* Comment */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <MessageSquarePlus className="w-5 h-5"/>
                </button>
                {/* Image */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Image className="w-5 h-5"/>
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* Paragraph */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setParagraph().run();
                    }}
                    className={"invisible"}
                >
                        {/* <Columns2 className="w-5 h-5" /> */}
                </button>
                {/* Left */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.commands.setTextAlign('left');
                    }}
                    className={"text-sky-400 p-1 flex gap-0.5"
                    }
                >
                        <AlignLeft className="w-5 h-5" />
                        <ChevronDown className='scale-75'/>
                </button>
                {/* Right */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.commands.setTextAlign('right');
                    }}
                    className={
                        editor.isActive({ textAlign: 'right' })
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <AlignRight className="w-5 h-5" />
                </button> */}
                {/* Center */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.commands.setTextAlign('center');
                    }}
                    className={
                        editor.isActive({ textAlign: 'center' })
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <AlignCenter className="w-5 h-5" />
                </button> */}
                {/* Justify */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.commands.setTextAlign('justify');
                    }}
                    className={
                        editor.isActive({ textAlign: 'justify' })
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <AlignJustify className="w-5 h-5" />
                </button> */}
                {/* Line Spacing  */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <ArrowsUpFromLine className="w-5 h-5"/>
                </button>
                {/* List Check  */}
                <button
                    className={ "text-sky-400 p-1 flex gap-0.5"}
                >
                        <ListChecks className="w-5 h-5"/>
                        <ChevronDown className='scale-75'/>
                </button>
                {/* List Order */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={"text-sky-400 p-1 flex gap-0.5"
                    }
                >
                        <ListOrdered className="w-5 h-5" />
                        <ChevronDown className='scale-75'/>
                </button>
                {/* Bullet List */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={"text-sky-400 p-1 flex gap-0.5"
                    }
                >
                        <List className="w-5 h-5" />
                        <ChevronDown className='scale-75'/>
                </button>
                {/* Indent */}
                <button
                    className={"text-sky-400 p-1 flex gap-0.5"}
                >
                        <GanttChart className="w-5 h-5" />
                        <ChevronDown className='scale-75'/>
                </button>
                {/* Eraser */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().unsetAllMarks().run();
                    }}
                    className={"text-sky-400 p-1"}
                >
                        <Eraser className="w-5 h-5" />
                </button>
                {/* CodeBlock */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleCodeBlock().run();
                    }}
                    className={
                        editor.isActive("codeBlock")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <LayoutPanelTop className="w-5 h-5" />
                </button> */}
                {/* Table */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.commands.insertTable();
                    }}
                    className={"text-sky-400 p-1"}
                >
                        <Table className="w-5 h-5" />
                </button> */}
                {/* Quote */}
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBlockquote().run();
                    }}
                    className={
                        editor.isActive("blockquote")
                        ? "bg-sky-700 text-white rounded p-1"
                        : "text-sky-400 p-1"
                    }
                >
                        <Quote className="w-5 h-5" />
                </button> */}
                {/* Edit  */}
                <button
                    className={ "ml-16 text-sky-400 p-1 flex gap-0.5 hover:border-gray-700 hover:border hover:rounded-full"}
                >
                    <Pencil className='ml-1'/>
                    <div className="ml-2 w-5 h-5 w-full flex gap-1"> Editing <ChevronDown className='scale-75'/></div>
                </button>
                {/* | */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <Tally1 className="w-5 h-5 scale-y-150 scale-x-50"/>
                </button>
                {/* ArrowUp */}
                <button
                    className={ "text-sky-400 p-1"}
                >
                        <ChevronUp className="scale-75"/>
                </button>
            </div>
        </div>
    )
}

export default Toolbar;
// {/* h1 */}
// <Toggle
// size="sm"
// pressed={editor.isActive("heading",  { level: 1 })}
// onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
// >
// <Heading1 className="h-4 w-4" />
// </Toggle>
// {/* h2 */}
// <Toggle
// size="sm"
// pressed={editor.isActive("heading",  { level: 2 })}
// onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2}).run()}
// >
// <Heading2 className="h-4 w-4" />
// </Toggle>
// {/* h3 */}
// <Toggle
// size="sm"
// pressed={editor.isActive("heading",  { level: 3 })}
// onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3}).run()}
// >
// <Heading3 className="h-4 w-4" />
// </Toggle>
// {/* bold */}
// {/* <button
// onClick={(e) => {
//     e.preventDefault();
//     editor.chain().focus().toggleBold().run();
// }}
// className={
//     editor.isActive("bold")
//     ? "bg-sky-700 text-white p-1 rounded-lg"
//     : "text-sky-400"
// }
// >
//     <Bold className="w-5 h-5" />
// </button> */}
// <Toggle
// className={ editor.isActive("bold") ? "rounded-lg" : "text-sky-400"}
// // size="sm"
// pressed={editor.isActive("bold")}
// onPressedChange={() => editor.chain().focus().toggleBold().run()}
// >
// <Bold className="h-5 w-5" />
// </Toggle>
// {/* Italic */}
// <Toggle
// size="sm"
// pressed={editor.isActive("italic")}
// onPressedChange={() => editor.chain().focus().toggleItalic().run()}
// >
// <Italic className="h-4 w-4" />
// </Toggle>
// {/* Strike */}
// <Toggle
// size="sm"
// pressed={editor.isActive("strike")}
// onPressedChange={() => editor.chain().focus().toggleStrike().run()}
// >
// <Strikethrough className="h-4 w-4" />
// </Toggle>
// {/* Code */}
// <Toggle
// size="sm"
// pressed={editor.isActive("code")}
// onPressedChange={() => editor.chain().focus().toggleCode().run()}
// >
// <Code className="h-4 w-4 "/>
// </Toggle>
// {/* Highlight */}
// <Toggle
// size="sm"
// pressed={editor.isActive("highlight")}
// onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
// >
// <Highlighter className="h-4 w-4 "/>
// </Toggle>
// {/* Paragraph */}
// <Toggle
// size="sm"
// pressed={editor.isActive("paragraph")}
// onPressedChange={() =>  editor.chain().focus().setParagraph().run()}
// >
// <Columns2 className="h-4 w-4 "/>
// </Toggle>
// {/* Left */}
// <Toggle
// size="sm"
// pressed={editor.isActive({ textAlign: 'left' })}
// onPressedChange={() =>  editor.commands.setTextAlign('left')}
// >
// <AlignLeft className="h-4 w-4 "/>
// </Toggle>
// {/* Right */}
// <Toggle
// size="sm"
// pressed={editor.isActive({ textAlign: 'right' })}
// onPressedChange={() => editor.commands.setTextAlign('right')}
// >
// <AlignRight className="h-4 w-4 "/>
// </Toggle>
// {/* Center */}
// <Toggle
// size="sm"
// pressed={editor.isActive({ textAlign: 'center' })}
// onPressedChange={() => editor.commands.setTextAlign('center')}
// >
// <AlignCenter className="h-4 w-4 "/>
// </Toggle>
// {/* Justify */}
// <Toggle
// size="sm"
// pressed={editor.isActive({ textAlign: 'justify' })}
// onPressedChange={() => editor.commands.setTextAlign('justify')}
// >
// <AlignJustify className="h-4 w-4 "/>
// </Toggle>
// {/* Eraser */}
// <Toggle
// size="sm"
// onPressedChange={() => editor.chain().focus().unsetAllMarks().run()}
// >
// <Eraser className="h-4 w-4 "/>
// </Toggle>
// {/* List Order */}
// <Toggle
// size="sm"
// pressed={editor.isActive("orderedList")}
// onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
// >
// <ListOrdered className="h-4 w-4" />
// </Toggle>
// {/* Bullet List */}
// <Toggle
// size="sm"
// pressed={editor.isActive("bulletList")}
// onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
// >
// <List className="h-4 w-4" />
// </Toggle>
// {/* CodeBlock */}
// <Toggle
// size="sm"
// pressed={editor.isActive("codeBlock")}
// onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
// >
// <List className="h-4 w-4" />
// </Toggle>
// {/* Undo */}
// <Toggle
// size="sm"
// onPressedChange={() => editor.chain().focus().undo().run()}
// >
// <Undo2 className="h-4 w-4" />
// </Toggle>
// {/* Redo */}
// <Toggle
// size="sm"
// onPressedChange={() => editor.chain().focus().redo().run()}
// >
// <Redo2 className="h-4 w-4" />
// </Toggle>
// {/* Table */}
// <Toggle
// size="sm"
// onPressedChange={() => editor.commands.insertTable()}
// >
// <Table className="h-4 w-4" />
// </Toggle>