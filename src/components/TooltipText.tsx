import { Tooltip, Typography } from '@mui/material';

interface TooltipTextProps {
  content: string;
  phrasesContent: { [key: string]: string };
}

const TooltipText = ({ content, phrasesContent }: TooltipTextProps) => {
  const regex = new RegExp(`(${Object.keys(phrasesContent).join('|')})`, 'g');
  const parts = content.split(regex);

  return (
    <>
      {parts.map((part) => {
        const definition = phrasesContent[part.trim()];
        return definition ? (
          <Tooltip key={part} arrow sx={{ textDecoration: 'underline', cursor: 'pointer' }} title={definition}>
            <Typography component="span" fontSize="16px" variant="body2">
              {part}
            </Typography>
          </Tooltip>
        ) : (
          <Typography key={part} component="span" fontSize="16px" variant="body2">
            {part}
          </Typography>
        );
      })}
    </>
  );
};

export default TooltipText;
