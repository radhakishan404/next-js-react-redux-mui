import PageContentBoxView from '@/src/components/PageContentBox/PageContentBoxView';
import PageLayout from '@/src/components/PageLayout';
import { Typography } from '@mui/material';
import { Fragment } from 'react';


const Index = () => {
    return (
        <Fragment>
            <PageLayout >
                <PageContentBoxView>
                    <Typography>Home Page</Typography>
                </PageContentBoxView>
            </PageLayout >
        </Fragment >
    );
};

export default Index;
