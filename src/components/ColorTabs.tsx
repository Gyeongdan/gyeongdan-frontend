import { useState, SyntheticEvent } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import color from '@/constants/color';

interface TabData {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface ColorTabsProps {
  tabs: TabData[];
}

const ColorTabs = ({ tabs }: ColorTabsProps) => {
  const [value, setValue] = useState<string>(tabs[0].value);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const selectedTab = tabs.find((tab) => tab.value === value);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        aria-label="primary tabs example"
        indicatorColor="primary"
        sx={{
          '& .MuiTab-root': {
            color: color.gray_dark,
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Box sx={{ paddingTop: 2 }}>{selectedTab && selectedTab.content}</Box>
    </Box>
  );
};

export default ColorTabs;
