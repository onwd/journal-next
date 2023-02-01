import { Badge, Button, Container, Dropdown, Input, Spacer, Table } from '@nextui-org/react';
import { RiAddLine } from '@react-icons/all-files/ri/RiAddLine';
import { RiEditLine } from '@react-icons/all-files/ri/RiEditLine';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';
import { useMemo, useState } from 'react';
import { Navigation } from '../components/navigation/navigation';

export function IndexPage() {
  const [query, setQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Set(['any']));
  const [selectedGroup, setSelectedGroup] = useState(new Set(['any']));
  const [selectedStatus, setSelectedStatus] = useState(new Set(['any']));

  const selectedYearKey = useMemo(
    () => Array.from(selectedYear).join(''),
    [selectedYear]
  );

  const selectedGroupKey = useMemo(
    () => Array.from(selectedGroup).join(''),
    [selectedGroup]
  );

  const selectedStatusKey = useMemo(
    () => Array.from(selectedStatus).join(''),
    [selectedStatus]
  );

  const selectedYearText = useMemo(
    () => {
      const value = (selectedYearKey === 'any')
        ? null
        : selectedYearKey;

      return `Учебный год${(value === null) ? '' : `: ${value}`}`;
    },
    [selectedYearKey]
  );

  const selectedGroupText = useMemo(
    () => {
      const value = (selectedGroupKey === 'any')
        ? null
        : selectedGroupKey;

      return `Группа${(value === null) ? '' : `: ${value}`}`;
    },
    [selectedGroupKey]
  );

  const selectedStatusText = useMemo(
    () => {
      const value = {
        'any': null,
        'active': 'Учится',
        'inactive': 'Выбыл'
      }[selectedStatusKey];

      return `Статус${(value === null) ? '' : `: ${value}`}`;
    },
    [selectedStatusKey]
  );

  return (
    <Container lg>
      <Spacer y={2} />

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Поиск по имени...'
            clearable
            shadow={false}
            contentLeft={<RiSearchLine size={20} />}
            width='300px'
            status={(query.length === 0) ? 'default' : 'primary'}
          />

          <Dropdown>
            <Dropdown.Button
              light={selectedYearKey === 'any'}
              flat={selectedYearKey !== 'any'}
            >
              {selectedYearText}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label='Меню фильтра по учебному году'
              color='primary'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedYear}
              onSelectionChange={setSelectedYear as any} // TODO: add better typing?
            >
              <Dropdown.Item key='any'>Любой</Dropdown.Item>
              <Dropdown.Item key='2022/2023'>2022/2023</Dropdown.Item>
              <Dropdown.Item key='2023/2024'>2023/2024</Dropdown.Item>
              <Dropdown.Item key='2024/2025'>2024/2025</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Button
              light={selectedGroupKey === 'any'}
              flat={selectedGroupKey !== 'any'}
            >
              {selectedGroupText}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label='Меню фильтра по группе'
              color='primary'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedGroup}
              onSelectionChange={setSelectedGroup as any} // TODO: add better typing?
            >
              <Dropdown.Item key='any'>Любая</Dropdown.Item>
              <Dropdown.Item key='Группа 1 подгруппа 1'>Группа 1 подгруппа 1</Dropdown.Item>
              <Dropdown.Item key='Группа 1 подгруппа 2'>Группа 1 подгруппа 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Button
              light={selectedStatusKey === 'any'}
              flat={selectedStatusKey !== 'any'}
            >
              {selectedStatusText}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label='Меню фильтра по статусу'
              color='primary'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedStatus}
              onSelectionChange={setSelectedStatus as any} // TODO: add better typing?
            >
              <Dropdown.Item key='any'>Любой</Dropdown.Item>
              <Dropdown.Item key='active'>Учится</Dropdown.Item>
              <Dropdown.Item key='inactive'>Выбыл</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Button auto icon={<RiAddLine size={20} />}>
          Добавить обучающегося
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
