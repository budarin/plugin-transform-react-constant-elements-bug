import css from './title.css';
import { APP_VERSION } from 'common/utils/prevals/appVersion';

const Title: React.FC = (): JSX.Element => <h1 className={css['app-title']}>App v.{APP_VERSION}</h1>;

export default Title;
