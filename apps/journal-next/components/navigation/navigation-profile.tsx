import { Avatar, Badge, Dropdown, Navbar, Text } from '@nextui-org/react';
import { RiLogoutCircleRLine } from '@react-icons/all-files/ri/RiLogoutCircleRLine';
import { RiSettingsLine } from '@react-icons/all-files/ri/RiSettingsLine';
import { useRouter } from 'next/router';

export function NavigationProfile() {
  const { push } = useRouter();

  const onAction = (actionKey: string) => {
    if (actionKey === 'settings') {
      push('/settings');
    }
  };

  return (
    <Navbar.Content>
      <Dropdown placement='bottom-right' isBordered={false}>
        <Navbar.Item>
          <Badge
            content=''
            color='success'
            placement='bottom-right'
            shape='circle'
            variant='dot'
            size='md'
          >
            <Dropdown.Trigger>
              <Avatar
                bordered
                as='button'
                color='gradient'
                size='md'
                text='TU'
                textColor='white'
              />
            </Dropdown.Trigger>
          </Badge>
        </Navbar.Item>
        <Dropdown.Menu
          disabledKeys={['account']}
          aria-label='User menu actions'
          color='primary'
          onAction={onAction}
        >
          <Dropdown.Item key='account' css={{ height: '$20' }}>
            <Text b css={{ d: 'flex' }}>
              Test User
            </Text>
            <Badge color='primary' css={{ d: 'flex' }} disableOutline>
              Учитель
            </Badge>
          </Dropdown.Item>
          <Dropdown.Item key='settings' withDivider icon={<RiSettingsLine size={20} />}>
            Настройки
          </Dropdown.Item>
          <Dropdown.Item key='logout' withDivider color='error' icon={<RiLogoutCircleRLine size={20} />}>
            Выйти
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.Content>
  );
}
