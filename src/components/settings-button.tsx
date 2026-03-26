import { SettingsIcon } from 'lucide-react';
import { useSettingsContext } from '../settings-context';
import styles from './settings-button.module.css';
import SettingsModal from './settings-modal';

export default function SettingsButton() {
  const { isModalOpen, toggleModal } = useSettingsContext();

  return (
    <>
      <button
        type='button'
        title='Settings'
        className={`btn ${styles.button}`}
        onClick={toggleModal}
      >
        <SettingsIcon />
      </button>
      {isModalOpen && <SettingsModal />}
    </>
  );
}
