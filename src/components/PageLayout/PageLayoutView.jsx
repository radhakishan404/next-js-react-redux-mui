import React from 'react';
import Box from '@mui/material/Box';
import { styles } from './PageLayoutView.styles';
import Container from '@mui/material/Container';
import PageTitle from '../PageTitle';
import { useTheme } from '@mui/material';

const PageLayoutView = ({ children, noPadding, title, subtitle }) => {
    const muiTheme = useTheme();
    const style = styles({ noPadding, muiTheme });

    return (
        <Box sx={style.mainBox}>
            {title && <PageTitle title={title} subtitle={subtitle} />}
            <Container maxWidth="lg" sx={style.children}>{children}</Container>
        </Box>
    );
};

export default PageLayoutView;