import { Box, Button, Stack, Typography } from '@mui/material';
import color from '@/constants/color';
import category from '@/mocks/category';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="100%"
      maxHeight="100px"
      p={2}
      px={5}
    >
      <Box display="flex">
        <Typography variant="h1">경단</Typography>
        <Typography variant="subtitle1" color={color.gray_dark} mt={2}>
          경제를 단순하게
        </Typography>
      </Box>
      <Stack spacing={3} direction="row" mt={2}>
        {category.map((item) => (
          <Button
            key={item.id}
            variant="text"
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Typography variant="h4" color={color.gray_dark}>
              {item.label}
            </Typography>
          </Button>
        ))}
        <Button variant="outlined" color="primary" sx={{ width: '100px' }}>
          LOGIN
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
