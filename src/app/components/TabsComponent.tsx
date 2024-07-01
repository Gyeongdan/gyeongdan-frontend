import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import colors from '../../constants/color';  // 올바른 경로를 사용하세요.

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: colors.brown_light,
          },
          '& .MuiTab-root': {
            color: colors.gray_light,
            '&.Mui-selected': {
              color: colors.brown_light,
            },
          },
        }}
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}
