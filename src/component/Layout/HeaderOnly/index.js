import Header from '~/component/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
