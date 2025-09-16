import React, { createContext, useState, useContext } from 'react';

const PreviewContext = createContext();

export function PreviewProvider({ children }) {
  const [preview, setPreview] = useState('');
  return (
    <PreviewContext.Provider value={{ preview, setPreview }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
