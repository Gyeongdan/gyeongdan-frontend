'use client';

import { useState } from 'react';

import { Box, Button, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import color from '@/constants/color';
import questions from '@/constants/question';

const Page = () => {
  const [selectedValue, setSelectedValue] = useState<number[]>(Array(questions.length).fill(0));

  const isNotSelected = selectedValue.includes(0);

  const handleChange = (index: number, value: number) => {
    const newSelectedValue = [...selectedValue];
    newSelectedValue[index] = value;
    setSelectedValue(newSelectedValue);
  };

  const handleSubmit = () => {
    // TODO: post api 연결
  };

  return (
    <GradientBox sx={{ py: 5, px: 15 }}>
      <Box width="600px">
        <CommentCard
          isCharacter
          content={`경단 유형 검사 해보고, 맞춤 기사 추천까지 받아봐📈. 지금 바로 고고🚀\n너의 경제 유형을 알 수 있다니 완전 럭키비키잖아~🍀`}
        />
      </Box>
      <Stack alignItems="center" my={10} spacing={10}>
        {questions.map((item) => (
          <Stack key={item.question} alignItems="center" width="600px">
            <Box mb={2} textAlign="center" width="580px">
              <CommentCard isStroke content={item.question} sx={{ fontSize: 20, p: 0.5 }} />
            </Box>
            <RadioGroup
              row
              sx={{ bgcolor: 'white', borderRadius: 5, p: 2, px: 12, width: '900px', justifyContent: 'space-between' }}
              value={selectedValue[questions.indexOf(item)]}
              onChange={(e) => handleChange(questions.indexOf(item), Number(e.target.value))}
            >
              <FormControlLabel control={<Radio />} label={item.answer1} sx={{ width: 220 }} value="1" />
              <FormControlLabel control={<Radio />} label={item.answer2} sx={{ width: 220 }} value="2" />
              <FormControlLabel control={<Radio />} label={item.answer3} sx={{ width: 220 }} value="3" />
            </RadioGroup>
          </Stack>
        ))}
        <Button
          disabled={isNotSelected}
          sx={{
            bgcolor: color.gradient_blue_light,
            width: 200,
            height: 50,
            borderRadius: 5,
            ':hover': { bgcolor: color.gradient_blue_dark },
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          결과 확인하기
        </Button>
      </Stack>
    </GradientBox>
  );
};

export default Page;
