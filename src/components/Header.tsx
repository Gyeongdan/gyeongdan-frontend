import { Box, Button, Stack, Typography } from '@mui/material';

import color from '@/constants/color';
import category from '@/mocks/category';

const Header = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      maxHeight="100px"
      maxWidth="100%"
      p={2}
      px={5}
    >
      <Box display="flex">
        <Typography variant="h1">경단</Typography>
        <Typography color={color.gray_dark} mt={2} variant="subtitle1">
          경제를 단순하게
        </Typography>
      </Box>
      <Stack direction="row" mt={2} spacing={3}>
        {category.map((item) => (
          <Button
            key={item.id}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            variant="text"
          >
            <Typography color={color.gray_dark} variant="h4">
              {item.label}
            </Typography>
          </Button>
        ))}
        <Button color="primary" sx={{ width: '100px' }} variant="outlined">
          LOGIN
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
