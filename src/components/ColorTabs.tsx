import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
        value={value}
        onChange={handleChange}
        aria-label="primary tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: color.brown_light,
          },
          '& .MuiTab-root': {
            color: color.gray_light,
            '&.Mui-selected': {
              color: color.brown_light,
            },
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {selectedTab && selectedTab.content}
      </Box>
    </Box>
  );
};

export default ColorTabs;
