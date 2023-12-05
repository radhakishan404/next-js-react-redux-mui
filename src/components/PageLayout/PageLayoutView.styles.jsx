export const styles = ({ noPadding, muiTheme }) => {
    return {
        mainBox: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: '100%',
        },
        children: {
            paddingTop: !noPadding && '40px',
            paddingBottom: !noPadding && '40px',
        }
    };
};