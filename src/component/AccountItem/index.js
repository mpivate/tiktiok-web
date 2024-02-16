import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ad636f56de4c53ea64504f4ce4870a02~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1708185600&x-signature=tHGhjv2NKIE%2FFiAR8XGGuHSU8f8%3D"
                alt="img"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Nhat Minh</span>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nhatminh22</span>
            </div>
        </div>
    );
}

export default AccountItem;
