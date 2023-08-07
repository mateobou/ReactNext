import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Pays = {
  nom: string;
  description: string;
};

type PaysContextType = {
  pays: Pays[];
  fetchPays: () => void;
  addPays: (pays: Pays) => void;
  deletePays: (index: number) => void;
};

export const PaysContext = createContext<PaysContextType>({
  pays: [],
  fetchPays: () => {},
  addPays: (pays: Pays) => {},
  deletePays: (index: number) => {}
});

type PaysProviderProps = {
    children: ReactNode;
  };
export const PaysProvider: React.FC<PaysProviderProps> = ({ children }) => {
  const [pays, setPays] = useState<Pays[]>([]);

  const fetchPays = async () => {
    const response = await fetch('http://localhost:8080/pays');
    const data = await response.json();
    await setPays(Object.values(data));
    return Object.values(data)
  };

  const addPays = async (newPays: Pays) => {
    const response = await fetch('http://localhost:8080/pays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPays),
    });

    const pays = await response.json();
    setPays(prevPays => [...prevPays, pays]);
  };

  const deletePays = async (index: number) => {
    await fetch(`http://localhost:8080/pays/${index}`, {
      method: 'DELETE',
    });

    setPays(prevPays => prevPays.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchPays();
  }, []);
  return (
    <PaysContext.Provider value={{ pays, fetchPays, addPays, deletePays }}>
      {children}
    </PaysContext.Provider>
  );
};
