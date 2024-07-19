import { Tooltip, Typography } from '@mui/material';

interface TooltipTextProps {
  content: string;
  phrasesContent: { [key: string]: string };
}

const TooltipText = ({ content, phrasesContent }: TooltipTextProps) => {
  const regex = new RegExp(`(${Object.keys(phrasesContent).join('|')})`, 'g');
  const parts = content.split(regex);
  const seen = new Set<string>();

  return (
    <>
      {parts.map((part) => {
        const cleanPart = part ? part.trim() : '';
        const definition = phrasesContent[cleanPart];
        const isTooltipNeeded = definition && !seen.has(cleanPart);

        if (isTooltipNeeded) {
          seen.add(cleanPart);
        }

        return isTooltipNeeded ? (
          <Tooltip key={cleanPart} arrow sx={{ textDecoration: 'underline', cursor: 'pointer' }} title={definition}>
            <Typography component="span" fontSize="16px" variant="body2">
              {part}
            </Typography>
          </Tooltip>
        ) : (
          <Typography key={cleanPart} component="span" fontSize="16px" variant="body2">
            {part}
          </Typography>
        );
      })}
    </>
  );
};

export default TooltipText;
