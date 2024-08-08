'use client'

import '../../style/workspace.scss'
import{ Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form"
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import NotesPicker  from "../../components/ui/NotePicker";
import Notes from '../../components/ui/Notes';
import Tiptap  from "../../components/ui/Tiptap";
import  {useForm} from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { File, Star, SquareChevronRight, Cloud, MessageSquareText, ChevronDown, Video, Lock, } from "lucide-react";
import Link from 'next/link'
import React from 'react';
import { saveContent } from '../../components/ui/Tiptap';

export default function Mainpage(){
  const formSchema = z.object({
    title: z
            .string()
            .min(5)
            .max(100),
    price: z
            .number()
            .min(5),
    description: z
            .string()
            .trim(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      price: 29.99,
      description: "",
    }
  })


  return( 
    <main className="pt-5 p-10">
      {/* <NotesPicker /> */}
      <Form {...form}>
        <form>
          {/* Menubar */}
          <div className="flex items-center space-x-4 pt-5">
            <Link href='/dashboard'><File className="size-12"/></Link>
            <div>
              <FormField
                control = {form.control}
                name = "title"
                render = {({ field }) => (
                  <FormItem>
                    {/* <FormLabel> Title </FormLabel> */}
                    <FormControl>
                      <Input className="h-7 w-72 -mt-5" placeholder="Main title of your document" { ...field }></Input>
                    </FormControl>
                    {/* <FormMessage/> */}
                  </FormItem>
                )}
              />
              <FormLabel className=''> File </FormLabel>
              <FormLabel className='ml-3'> Edit </FormLabel>
              <FormLabel className='ml-3'> View </FormLabel>
              <FormLabel className='ml-3'> Insert </FormLabel>
              <FormLabel className='ml-3'> Format </FormLabel>
              <FormLabel className='ml-3'> Tools </FormLabel>
              <FormLabel className='ml-3'> Extensions </FormLabel>
              <FormLabel className='ml-3'> Help </FormLabel>
              <button onClick={saveContent} className='ml-3'> Save </button>
              <div className="flex space-x-5 ml-72 -mt-12">
                <Star className="h-5 w-5 ml-3"/>
                <SquareChevronRight className="h-5 w-5"/>
                <Cloud className="h-5 w-5"/>
              </div>
              <div className='flex space-x-5 -mt-6' style={{position: 'fixed', right: '300px'}}>
                <MessageSquareText/>
                <Video/>
                <Lock/>
                <label>Share</label>
                <ChevronDown/>
              </div>
            </div>
            
          </div>
          {/* Toolbar & workspace */}
          <FormField
            control = {form.control}
            name = "description"
            render = {({ field }) => (
              <FormItem>
                {/* <FormLabel> Description </FormLabel> */}
                <FormControl>
                  <Tiptap description={field.name} onChange={field.onChange} />
                </FormControl>
                {/* <FormMessage/> */}
              </FormItem>
            )}
          />
        </form>
      </Form> 
      <Notes/>
    </main>
  )
}