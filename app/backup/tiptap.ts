'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu,} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import CustomTable from './CustomTable'
import { Heading } from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
//Mention
import CharacterCount from '@tiptap/extension-character-count'
import Document from '@tiptap/extension-document'
import Mention from '@tiptap/extension-mention'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import suggestion from '../mention/suggestion'
//Table
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
//Extra
import Underline from "@tiptap/extension-underline";
//Share
import { TiptapCollabProvider } from '@hocuspocus/provider'
import * as Y from 'yjs'
import React, {
      useCallback, useEffect,
      useState,
    } from 'react'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'

//share
const colors = ['#958DF1', '#F98181', '#FBBC88', '#FAF594', '#70CFF8', '#94FADB', '#B9F18D']
const names = ['Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 
               'Winona Ryder', 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy',
               'Debbie Harry', 'Olivia Newton-John', 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Lisa Bonet',
               'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey', 'Mickey Rourke', 'John Cusack',
               'Matthew Broderick', 'Justine Bateman', ]
const getRandomElement = (list: string | any[]) => list[Math.floor(Math.random() * list.length)]
const getRandomColor = () => getRandomElement(colors)
const getRandomName = () => getRandomElement(names)
const ydoc = new Y.Doc()
const websocketProvider = new TiptapCollabProvider({
  appId: '7j9y6m10',
  name: "Jokoroom",
})
const getInitialUser = () => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch (error) {
          alert('Error parsing stored user data:');
        }
      }
    return {
    name: getRandomName(),
    color: getRandomColor(),
  }; 
}

const Tiptap = (
    {
        description,
        onChange,
    }:
    {
        description: string
        onChange: any
    }) => {

        const handleChange = (newContent: string) => {
            onChange(newContent);
          };

        const limit = 1000

        const editor = useEditor({
            extensions: [ 
                            StarterKit.configure({ history: false, }), 
                            Heading.configure({
                                HTMLAttributes: {
                                    class: "text-xl font-bold",
                                    levels: [2],
                                },
                            }),
                            Highlight, Typography, Document, Paragraph, Text, TableRow, TableCell, TableHeader,
                            Underline, TaskList, TaskItem, 
                            TextAlign.configure({
                                types: ['heading', 'paragraph'],
                                alignments: ['left', 'center', 'right', 'justify'],
                            }),
                            CharacterCount.configure({
                                limit: 10000,
                            }),
                            Mention.configure({
                                HTMLAttributes: { class: 'mention', },
                                suggestion,
                                }),
                            Table.configure({
                                resizable: true,
                                HTMLAttributes: {
                                    class: 'my-custom-class',
                                },
                            }),
                            Collaboration.configure({
                                document: ydoc,
                            }),
                            CollaborationCursor.configure({
                                provider: websocketProvider,
                            }),
                        ], 
            content: description,
            editorProps: {
                attributes: {
                    class:
                        "rounded-md border min-h-[150px] border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50",
                        // "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
                },
            },
            onUpdate({editor}){
                handleChange(editor.getHTML())
            },
        })
        
        const percentage = editor ? Math.round((100 / limit) * editor.storage.characterCount.characters()) : 0
        // min-h-[250px]

        //share
        const [status, setStatus] = useState('connecting')

        const [currentUser, setCurrentUser] = useState(getInitialUser)

        useEffect(() => {
                websocketProvider.on('status', event => {
                  setStatus(event.status)
                })
        }, [])

        useEffect(() => {
                if (editor && currentUser) {
                  localStorage.setItem('currentUser', JSON.stringify(currentUser))
                  editor.chain().focus().updateUser(currentUser).run()
                }
              }, [editor, currentUser])
        
        const setName = useCallback(() => {
            const name = (window.prompt('Name') || '').trim().substring(0, 32)
            if (name) {return setCurrentUser({ ...currentUser, name })}
        }, [currentUser])

        return (
            <div className="w-full pt-5 flex flex-col justify-stretch">

                <Toolbar editor={editor} description={description}/>

                {/* {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>

                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        Bold
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        Italic
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        Strike
                    </button>

                </BubbleMenu>}

                {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                    >
                        H1
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                    >
                        H2
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active' : ''}
                    >
                        Bullet List
                    </button>
                </FloatingMenu>} */}
                {/* <CustomTable /> */}
                <EditorContent  editor={editor} className='mt-10 -ml-5'/>
                {editor
                    && <div className={`character-count ${editor.storage.characterCount.characters() === limit ? 'character-count--warning' : ''}`}>
                    <svg
                        height="20" width="20" viewBox="0 0 20 20" className="character-count__graph"
                    >
                        <circle r="10" cx="10" cy="10" fill="#e9ecef" />
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

                    <div className="character-count__text">
                        {editor.storage.characterCount.characters()}/{limit} characters
                    </div>
                    </div>
                }
                <div className="editor__footer">
                    <div className={`editor__status editor__status--${status}`}>
                        {status === 'connected'
                        ? `${editor.storage.collaborationCursor.users.length} user${editor.storage.collaborationCursor.users.length === 1 ? '' : 's'} online in Jokoroom`
                        : 'offline'}
                    </div>
                    <div className="editor__name">
                        <button onClick={setName}>{currentUser.name}</button>
                    </div>
                </div>
            </div>
        )
}   

export default Tiptap;

//save data section
let editorInstance;
export const saveContent = async () => {
    if (editorInstance) {
      const content = editorInstance.getHTML();
      try {
        const response = await fetch('http://localhost:3000/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        });
        if (response.ok) {
          console.log('Content saved');
        } else {
          console.error('Failed to save content');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };