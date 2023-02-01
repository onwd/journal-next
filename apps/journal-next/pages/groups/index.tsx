import { Container } from '@nextui-org/react';
import { Navigation } from '../../components/navigation/navigation';

export function GroupsPage() {
  return (
    <Container lg>
      Groups
    </Container>
  );
}

// TODO: create reusable layouts
GroupsPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default GroupsPage;
