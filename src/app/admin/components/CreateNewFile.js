// app/admin/components/CreateNewFile.js
'use client';

import { useState } from 'react';

export default function CreateNewFile() {
  const [fileName, setFileName] = useState('');

  const handleCreate = async () => {
    const response = await fetch('/api/create', { // Yorum satırını kaldırın
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName }),
    });

    if (response.ok) {
      // Başarılı mesajı göster veya listeyi güncelle
      console.log('File created successfully'); 
    } else {
      // Hata mesajı göster
      console.error('Error creating file'); 
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={fileName} 
        onChange={(e) => setFileName(e.target.value)} 
        placeholder="Dosya adı (ör. yeni-sayfa)" 
      />
      <button onClick={handleCreate}>Oluştur</button>
    </div>
  );
}
