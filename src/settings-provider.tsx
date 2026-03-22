import { useState } from 'react';
import { SettingsContext, type SettingsContextType } from './settings-context';

export default function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<SettingsContextType['isModalOpen']>(false);

  const toggleModal: SettingsContextType['toggleModal'] = () => setIsModalOpen((prev) => !prev);

  const [options, setOptions] = useState<SettingsContextType['options']>({ displayTables: 'list' });

  return (
    <SettingsContext value={{ isModalOpen, toggleModal, options, setOptions }}>
      {children}
    </SettingsContext>
  );
}
