import { useState } from 'react';

export const useStatementSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return {
    isModalOpen,
    setIsModalOpen,
    toggleModal,
  };
};
