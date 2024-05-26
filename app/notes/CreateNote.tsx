'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
   const [Title, setTitle] = useState('');
   const [Contents, setContents] = useState('');

   const router = useRouter();

   const create = async () => {
      await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            Title,
            Contents,
         }),
      });

      setContents('');
      setTitle('');

      router.refresh();
   };

   return (
      <form onSubmit={create}>
         <input
            type='text'
            placeholder='Title'
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
         />

         <textarea
            placeholder='Content'
            value={Contents}
            onChange={(e) => setContents(e.target.value)}
         />

         <button type='submit'>Create Note</button>
      </form>
   );
}
