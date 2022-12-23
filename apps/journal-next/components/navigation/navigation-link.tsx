import { Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export interface NavigationLinkProps {
  href: string;
  children: ReactNode;
}

export function NavigationLink({ href, children }: NavigationLinkProps) {
  const { pathname, push } = useRouter();

  const isActive = pathname === href;

  const onClick = () => {
    push(href);
  };

  return (
    <Navbar.Link
      onClick={onClick}
      isActive={isActive}
    >
      {children}
    </Navbar.Link>
  );
}
