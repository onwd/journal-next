import React from 'react';
import { Navbar, Link, Text, Dropdown, Avatar, Badge } from '@nextui-org/react';
import { RiLogoutCircleRLine } from '@react-icons/all-files/ri/RiLogoutCircleRLine';
import { RiSettingsLine } from '@react-icons/all-files/ri/RiSettingsLine';

export function Navigation() {
  return (
    <Navbar variant='sticky' isCompact>
      <Navbar.Toggle showIn='xs' aria-label='toggle navigation' />

      <Navbar.Content hideIn='xs' variant='highlight-rounded' enableCursorHighlight>
        <Navbar.Link isActive href='#'>Обучающиеся</Navbar.Link>
        <Navbar.Link href='#'>Группы</Navbar.Link>
        <Navbar.Link href='#'>Табель</Navbar.Link>
        <Navbar.Link href='#'>Отчеты</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Dropdown placement='bottom-right' isBordered={false}>
          <Navbar.Item>
            <Badge
              content=""
              color="success"
              placement="bottom-right"
              shape="circle"
              variant="dot"
              size="md"
            >
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color="gradient"
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
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key='account' css={{ height: '$20' }}>
              <Text b css={{ d: 'flex' }}>
                Test User
              </Text>
              <Badge color="primary" css={{ d: 'flex' }} disableOutline>
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

      <Navbar.Collapse>
        <Navbar.CollapseItem isActive>
          <Link
            color='inherit'
            css={{
              minWidth: '100%'
            }}
            href='#'
          >
            Обучающиеся
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color='inherit'
            css={{
              minWidth: '100%'
            }}
            href='#'
          >
            Группы
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color='inherit'
            css={{
              minWidth: '100%'
            }}
            href='#'
          >
            Табель
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color='inherit'
            css={{
              minWidth: '100%'
            }}
            href='#'
          >
            Отчеты
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  )
}
