import { AppProps } from 'next/app';

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { getLayout?: (page: JSX.Element) => JSX.Element };
}
