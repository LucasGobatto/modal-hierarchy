import React, { createContext, useCallback, useContext, useState } from 'react';

export enum ModalPriority {
  FirstModal = 1,
  SecondModal = 2,
  ThirdModal = 3,
}

type ModalType = {
  id: string;
  component: React.ReactNode;
  priority: ModalPriority;
};

type ModalContextType = {
  addToQueue: (modal: ModalType) => void;
  removeFromQueue: (id: string) => void;
  currentModal: ModalType | null;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalQueue, setModalQueue] = useState<ModalType[]>([]);
  const [currentModal, setCurrentModal] = useState<ModalType | null>(null);

  const addToQueue = useCallback(
    (modal: ModalType) => {
      setModalQueue((prev) => {
        // Add new modal and sort by priority (lower number = higher priority)
        const newQueue = [...prev, modal].sort((a, b) => a.priority - b.priority);
        return newQueue;
      });
    },
    [setModalQueue],
  );

  const removeFromQueue = useCallback(
    (id: string) => {
      setModalQueue((prev) => prev.filter((modal) => modal.id !== id));
      if (currentModal?.id === id) {
        setCurrentModal(null);
      }
    },
    [setModalQueue, setCurrentModal, currentModal],
  );

  // Process queue whenever it changes
  React.useEffect(() => {
    if (modalQueue.length > 0 && !currentModal) {
      setCurrentModal(modalQueue[0]);
      setModalQueue((prev) => prev.slice(1));
    }
  }, [modalQueue, currentModal]);

  return (
    <ModalContext.Provider value={{ addToQueue, removeFromQueue, currentModal }}>
      {children}
      {currentModal?.component}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
