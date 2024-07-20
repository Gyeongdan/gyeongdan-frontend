import { Box, Typography, Stack } from '@mui/material';

interface HeadlineProps {
  title: string;
  uploadDate?: string;
  viewCount?: number;
  source?: string;
}

const Headline = ({ title, uploadDate, viewCount, source }: HeadlineProps) => {
  return (
    <Box>
      <Typography mb={3} variant="h1">
        {title}
      </Typography>
      <Stack alignItems="center" direction="row">
        <Typography variant="h4">
          {uploadDate || '날짜 없음'} | 조회 {viewCount !== undefined ? viewCount : '0'}회 | {source || '출처 없음'}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Headline;
