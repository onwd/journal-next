import React from 'react';
import { Navbar } from '@nextui-org/react';
import { NavigationMenu } from './navigation-menu';
import { NavigationProfile } from './navigation-profile';

export function Navigation() {
  return (
    <Navbar variant='sticky' isCompact>
      <NavigationMenu />
      <NavigationProfile />
    </Navbar>
  )
}
