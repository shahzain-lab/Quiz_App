import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Progress() {
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <CircularProgress />
        </Box>
    );
}