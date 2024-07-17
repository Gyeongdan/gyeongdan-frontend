import { Tooltip, Typography } from '@mui/material';

interface Phrase {
  term: string;
  definition: string;
}

interface TooltipTextProps {
  content: string;
  phrasesContent: Phrase[];
}

const TooltipText = ({ content, phrasesContent }: TooltipTextProps) => {
  let count = 0;
  const words = content.split(/(\s+)/);

  return (
    <>
      {words.map((word) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim();
        const phrase = phrasesContent.find(({ term }) => cleanWord.includes(term));
        count += 1;

        if (phrase) {
          return (
            <Tooltip
              key={`${cleanWord}-${count}`}
              arrow
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              title={phrase.definition}
            >
              <Typography component="span" fontSize="16px" variant="body2">
                {word}
              </Typography>
            </Tooltip>
          );
        }
        return (
          <Typography key={`${cleanWord}-${count}`} component="span" fontSize="16px" variant="body2">
            {word}
          </Typography>
        );
      })}
    </>
  );
};

export default TooltipText;