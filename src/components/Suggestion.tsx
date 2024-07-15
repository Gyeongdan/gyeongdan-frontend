import { Stack, Typography } from '@mui/material';

import color from '@/constants/color';

interface Article {
  id: number;
  title: string;
}

interface SuggestionProps {
  title: string;
  content: Article[];
}

const Suggestions = ({ title, content }: SuggestionProps) => {
  return (
    <Stack spacing={1}>
      <Typography color={color.blue} variant="body1">
        {title}
      </Typography>
      {content.map((item) => (
        <Typography
          key={item.id}
          fontSize="12px"
          overflow="hidden"
          textOverflow="ellipsis"
          variant="body2"
          whiteSpace="nowrap"
        >
          {item.title}
        </Typography>
      ))}
    </Stack>
  );
};

export default Suggestions;
