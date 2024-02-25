/* eslint-disable no-unused-vars */
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/image';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faPlus,
    faSign,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import AccountItem from '../../../AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'Tiếng Việt',
        children: {
            title: 'Laguage',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    const handleMenuChange = (menuItem) => console.log(menuItem);

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'Xem hồ sơ',
            to: '/@minhh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok img" />
                </div>
                <HeadlessTippy
                    interactive
                    placement="bottom-end"
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tải lên" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&x-expires=1708873200&x-signature=vCmwDk3hoSm5vUDMAvTFjoWvjdg%3D"
                                className={cx('user-avatar')}
                                alt="Minh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
