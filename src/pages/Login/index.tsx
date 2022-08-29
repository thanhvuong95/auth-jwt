import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Box component={'form'}>
        <Typography variant="h3" textAlign="center" fontWeight={'300'}>
          LOGIN
        </Typography>
        <Stack direction="column" spacing={4} sx={{ width: '300px', margin: '0 auto' }}>
          <TextField label="UserName" variant="outlined" size="small" />
          <TextField label="Password" variant="outlined" size="small" />
          <Button variant="outlined" size="small">
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
