import { /*Link, */Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { /*useCallback, useEffect, */useMemo/*, useState*/ } from 'react';
import { NavigationCollapseLink } from './navigation-collapse-link';
import { NavigationLink } from './navigation-link';

export function NavigationMenu() {
  const { pathname } = useRouter();
  // const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  const links = useMemo(() => [
    {
      id: 1,
      href: '/',
      title: 'Обучающиеся'
    },
    {
      id: 2,
      href: '/groups',
      title: 'Группы'
    },
    {
      id: 3,
      href: '/attendance',
      title: 'Посещаемость'
    },
    {
      id: 4,
      href: '/reports',
      title: 'Отчеты'
    }
  ], []);

  const isOneOfLinksSelected = useMemo(() => {
    return links.some((link) => pathname === link.href);
  }, [pathname]);

  // useEffect(() => {
  //   setIsCollapseOpen(false);
  // }, [pathname]);

  // const onToggleChange = () => {
  //   setIsCollapseOpen(!isCollapseOpen);
  // };

  // TODO: Use isSelected and isOpen props in future to enhance mobile version.
  //       Currently, it is buggy and leads to the following error:
  //
  //         React does not recognize the `isSelected` prop on a DOM element.
  //
  //       Related GitHub issue: https://github.com/nextui-org/nextui/issues/916
  return (
    <>
      <Navbar.Toggle
        // onChange={onToggleChange}
        // isSelected={isCollapseOpen}
        showIn='xs'
        aria-label='toggle navigation'
      />

      <Navbar.Content hideIn='xs' variant='highlight-rounded' enableCursorHighlight={isOneOfLinksSelected}>
        {links.map((link) => (
          <NavigationLink key={link.id} href={link.href}>
            {link.title}
          </NavigationLink>
        ))}
      </Navbar.Content>

      <Navbar.Collapse showIn='xs'/* isOpen={isCollapseOpen}*/>
        {links.map((link) => (
          <NavigationCollapseLink key={link.id} href={link.href}>
            {link.title}
          </NavigationCollapseLink>
        ))}
      </Navbar.Collapse>
    </>
  );
}
