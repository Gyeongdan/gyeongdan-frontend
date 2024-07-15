import { Box, Tab, Tabs } from '@mui/material';

import color from '@/constants/color';

interface TabData {
  value: string;
  label: string;
}

interface ColorTabsProps {
  tabs: TabData[];
  selected: TabData;
  children: React.ReactNode;
  onChange: (value: TabData) => void;
}

const ColorTabs = ({ tabs, selected, children, onChange }: ColorTabsProps) => {
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    const selectedTab = tabs.find((tab) => tab.value === value);
    if (selectedTab) {
      onChange(selectedTab);
    }
  };

  return (
    <Box>
      <Tabs
        aria-label="primary tabs example"
        indicatorColor="primary"
        sx={{
          '& .MuiTab-root': {
            color: color.gray_dark,
          },
        }}
        value={selected.value}
        onChange={handleChange}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} sx={{ fontSize: '20px' }} value={tab.value} />
        ))}
      </Tabs>
      <Box sx={{ paddingTop: 2 }}>{selected && children}</Box>
    </Box>
  );
};

export default ColorTabs;
