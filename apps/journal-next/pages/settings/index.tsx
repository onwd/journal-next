import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function Settings() {
  return (
    <div className={styles.page}>
      Settings
    </div>
  );
}

// TODO: create reusable layouts
Settings.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default Settings;
