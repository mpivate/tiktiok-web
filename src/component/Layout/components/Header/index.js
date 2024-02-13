import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok img" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <div className={cx('button-container')}>
                        <button className={cx('loading-btn')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                    <span></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
