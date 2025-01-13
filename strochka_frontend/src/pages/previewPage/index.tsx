import { Link } from 'react-router-dom';
import { SearchElement } from '@/assets/searchElement';
import styles from './index.module.scss';
import { routerConfig } from '@/lib/routerConfig';

const {
  appRoutes: { getThreadsUrl, getAboutUrl },
} = routerConfig;

const PreviewPage = () => (
  <main className={styles.preview}>
    <header>
      <h1>Strochka</h1>
      <span>A site for sharing knowledges & ideas</span>
    </header>
    <p>
      This site was created so that everyone can share their experiences. Create threads in which
      you express your thoughts or launch entire video courses so that the whole world can learn
      from your lessons. Share your new knowledge by writing a post about it. Subscribe to other
      community members and stay tuned so you don't miss anything new.
    </p>
    <footer>
      <Link className={styles.preview__link} to={getThreadsUrl()}>
        Open all threads
      </Link>
      <Link to={getAboutUrl()}>Find out more about us</Link>
      {/* TODO: add tooltip */}
      <div className={styles.preview__image} tabIndex={0}>
        <SearchElement />
      </div>
    </footer>
  </main>
);

export default PreviewPage;
