import React from 'react';

import { Box, Button } from '@mui/material';

import CommentCard from '@/components/CommentCard';

interface ButtonProps {
  id: string;
  text: string;
  onClick: () => void;
}

interface ChatMessageProps {
  content?: string;
  isUser?: boolean;
  delay: number;
  buttons?: ButtonProps[];
}

const ChatMessage = ({ content, isUser, delay, buttons }: ChatMessageProps) => {
  return (
    <Box
      style={{ animationDelay: `${delay}s`, animationName: 'fadeIn', animationDuration: '0.5s' }}
      sx={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginY: '0.5rem' }}
    >
      {content && <CommentCard isChat isStroke content={content} isCharacter={!isUser} isFilled={isUser} />}
      {buttons && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {buttons.map((button) => (
            <Button key={button.id} color="primary" variant="contained" onClick={button.onClick}>
              {button.text}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ChatMessage;
