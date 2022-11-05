import { Navigation } from './components/Navigator';
import style from '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next JS </title>
      </head>
      <body className={style.body}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
