import { Badge, Button, Container, Spacer, Table } from '@nextui-org/react';
import { Navigation } from '../components/navigation/navigation';
import { RiAddLine } from '@react-icons/all-files/ri/RiAddLine';
import { RiEditLine } from '@react-icons/all-files/ri/RiEditLine';

export function IndexPage() {
  return (
    <Container lg>
      <Spacer y={2} />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button auto icon={<RiAddLine size={20} />}>
          Создать
        </Button>
      </div>

      <Spacer y={0.5} />

      <Table
        aria-label='Example table with static content'
        lined
      >
        <Table.Header>
          <Table.Column>ИМЯ</Table.Column>
          <Table.Column hideHeader>ДЕЙСТВИЯ</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key='1'>
            <Table.Cell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Иван Иванов
                <Badge variant='flat' color='error' disableOutline>Выбыл</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button flat auto size='sm' icon={<RiEditLine size={20} />}>
                  Редактировать
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row key='2'>
            <Table.Cell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Иван Иванов
              </div>
            </Table.Cell>
            <Table.Cell>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button flat auto size='sm' icon={<RiEditLine size={20} />}>
                  Редактировать
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}

// TODO: create reusable layouts
IndexPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default IndexPage;
