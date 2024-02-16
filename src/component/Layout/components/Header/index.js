/* eslint-disable no-unused-vars */
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import images from '~/assets/image';
import Button from '~/component/Button';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSign, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok img" />
                </div>
                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
