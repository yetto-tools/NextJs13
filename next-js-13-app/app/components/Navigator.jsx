import style from './navigation.module.css';
import Link from 'next/link';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Post',
    route: '/posts',
  },
];

export function Navigation() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navbar_item}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
