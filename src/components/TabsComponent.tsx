import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import colors from '../constants/color';

const tabData = [
  { value: 'economy_business', label: '경제 및 기업', content: '경제 및 기업 관련 내용' },
  { value: 'politics_society', label: '정치 및 사회', content: '정치 및 사회 관련 내용' },
  { value: 'tech_culture', label: '기술 및 문화', content: '기술 및 문화 관련 내용' },
  { value: 'sports_leisure', label: '스포츠 및 여가', content: '스포츠 및 여가 관련 내용' },
  { value: 'opinion_analysis', label: '오피니언 및 분석', content: '오피니언 및 분석 관련 내용' },
];

export default function ColorTabs() {
  const [value, setValue] = React.useState(tabData[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const selectedTab = tabData.find(tab => tab.value === value);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="primary tabs example"
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
        {tabData.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {selectedTab && selectedTab.content}
      </Box>
    </Box>
  );
}
