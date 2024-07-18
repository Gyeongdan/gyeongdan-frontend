import { Link, Stack, Typography } from '@mui/material';

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
        <Link
          key={item.id}
          color="inherit"
          fontSize="12px"
          href={`/newsletter/${item.id}`}
          overflow="hidden"
          textOverflow="ellipsis"
          underline="none"
          variant="body2"
          whiteSpace="nowrap"
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};

export default Suggestions;
