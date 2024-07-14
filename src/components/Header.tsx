import { Button, Stack, Typography } from '@mui/material';

import color from '@/constants/color';
import category from '@/mocks/category';

const Header = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      maxHeight="100px"
      maxWidth="100%"
      p={3}
      px={6}
    >
      <Stack direction="row">
        <Typography variant="h1">경단</Typography>
        <Typography color={color.gray_dark} mt={2} variant="subtitle1">
          경제를 단순하게
        </Typography>
      </Stack>
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
    </Stack>
  );
};

export default Header;
