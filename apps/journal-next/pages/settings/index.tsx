import { Container } from '@nextui-org/react';
import { Navigation } from '../../components/navigation/navigation';

export function SettingsPage() {
  return (
    <Container lg>
      Settings
    </Container>
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
