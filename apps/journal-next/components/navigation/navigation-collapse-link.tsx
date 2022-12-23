import { Link, Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export interface NavigationCollapseLinkProps {
  href: string;
  children: ReactNode;
}

export function NavigationCollapseLink({ href, children }: NavigationCollapseLinkProps) {
  const { pathname/*, push*/ } = useRouter();

  const isActive = pathname === href;

  // TODO: use onClick instead of href in future to enhance mobile version.
  // const onClick = () => {
  //   push(href);
  // };

  return (
    <Navbar.CollapseItem isActive={isActive}>
      <Link
        color='inherit'
        css={{
          minWidth: '100%'
        }}
        href={href}
        // onClick={onClick}
      >
        {children}
      </Link>
    </Navbar.CollapseItem>
  );
}
