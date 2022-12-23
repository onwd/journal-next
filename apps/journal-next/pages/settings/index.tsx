import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function SettingsPage() {
  return (
    <div className={styles.page}>
      Settings
    </div>
  );
}

// TODO: create reusable layouts
SettingsPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default SettingsPage;
