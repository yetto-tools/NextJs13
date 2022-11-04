import { Navigation } from './components/Navigator';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next JS </title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
