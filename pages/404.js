import Link from 'next/link';
import style from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={style.notFound}>
        <h1>Oops! Page not found</h1>
        <p>It looks like the page you&apos;re trying to access doesn&apos;t exist.</p>
        <Link href="/">
            Go back to the home page
        </Link>
    </div>
  );
};

export default Custom404;