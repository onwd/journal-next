import React from 'react';
import { Navbar, Link, Text, Dropdown, Avatar, Badge } from '@nextui-org/react';

export function Navigation() {
  return (
    <Navbar variant='sticky' isCompact>
      <Navbar.Toggle showIn='xs' aria-label='toggle navigation' />

      <Navbar.Content hideIn='xs' variant='highlight-rounded' enableCursorHighlight>
        <Navbar.Link isActive href='#'>Features</Navbar.Link>
        <Navbar.Link href='#'>Customers</Navbar.Link>
        <Navbar.Link href='#'>Pricing</Navbar.Link>
        <Navbar.Link href='#'>Company</Navbar.Link>
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
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </Dropdown.Trigger>
            </Badge>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label='User menu actions'
            color='primary'
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key='profile' css={{ height: '$18' }}>
              <Text b color='inherit' css={{ d: 'flex' }}>
                Signed in as
              </Text>
              <Text b color='inherit' css={{ d: 'flex' }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key='settings' withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key='team_settings'>Team Settings</Dropdown.Item>
            <Dropdown.Item key='analytics' withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key='system'>System</Dropdown.Item>
            <Dropdown.Item key='configurations'>Configurations</Dropdown.Item>
            <Dropdown.Item key='help_and_feedback' withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key='logout' withDivider color='error'>
              Log Out
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
            Features
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
            Customers
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
            Pricing
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
            Company
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  )
}
