"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import CharacterCount from '@tiptap/extension-character-count'
import '../../style/tiptap.scss'

const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const limit = 1000;
  const editor = useEditor({
    extensions: [
      // StarterKit
      StarterKit.configure({ history: false, }),
      Underline,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:"z-0 rounded-md border min-h-[150px] border-input bg-background p-3 w-full h-full disabled:cursor-not-allowed disabled:opacity-50 text-[16px] outline-none"
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });
  const percentage = editor && editor.storage && editor.storage.characterCount
    ? Math.round((100 / limit) * editor.storage.characterCount.characters()) 
    : 0;
  const characterCount = editor && editor.storage && editor.storage.characterCount
    ? editor.storage.characterCount.characters()
    : 0;

  const wordCount = editor && editor.storage && editor.storage.characterCount
    ? editor.storage.characterCount.words()
    : 0;
  return (
    <div className="">
      <Toolbar editor={editor} content={content}/>
      <EditorContent  className='mt-5' editor={editor} />
      <div className={`character-count ${characterCount === limit ? 'character-count--warning' : ''}`}>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
        >
          <circle
            r="10"
            cx="10"
            cy="10"
            fill="#e9ecef"
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)"
          />
          <circle
            r="6"
            cx="10"
            cy="10"
            fill="white"
          />
        </svg>

        {characterCount} / {limit} characters
        <br />
        {wordCount} words
      </div>
    </div>
  );
};

export default Tiptap;

