import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ childen }) {
  return <div className={cx('wrapper')}>{childen}</div>;
}

export default Wrapper;
