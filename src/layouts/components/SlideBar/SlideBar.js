import routes from '~/config/routes';
import styles from './Slidebar.module.scss';
import classNames from 'classnames/bind';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Slidebar;
