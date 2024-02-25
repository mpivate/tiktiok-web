// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistoy] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistoy((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 500]}
            offset={[10, 10]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistoy((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistoy((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
