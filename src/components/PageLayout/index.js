import PageLayoutView from './PageLayoutView';

const PageLayout = ({ children, noPadding, title, subtitle, searchKeyword, setSearchKeyword }) => {
    return (
        <PageLayoutView noPadding={noPadding} title={title} subtitle={subtitle} searchKeyword={searchKeyword} setSearchKeyword={(val) => setSearchKeyword(val)}>
            {children}
        </PageLayoutView>
    );
};

export default PageLayout;