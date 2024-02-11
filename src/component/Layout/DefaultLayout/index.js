import Header from '~/component/Layout/components/Header';
import Slidebar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
