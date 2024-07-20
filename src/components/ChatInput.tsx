'use client';

import React, { useState } from 'react';

import { Box, TextField, Button } from '@mui/material';

import color from '@/constants/color';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [userMessage, setUserMessage] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;
    onSendMessage(userMessage);
    setUserMessage('');
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '80%',
        borderRadius: '20px',
      }}
    >
      <TextField
        fullWidth
        disabled={userMessage.trim() === ''}
        placeholder="AI 산지니에게 대화를 요청해보세요!"
        sx={{
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          marginRight: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        value={userMessage}
        variant="outlined"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        color="primary"
        sx={{
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          background: `linear-gradient(45deg, ${color.gradient_blue_dark}, ${color.gradient_blue_light})`,
          color: 'white',
          borderRadius: '20px',
          '&:hover': {
            background: `linear-gradient(45deg, ${color.gradient_blue_light}, ${color.gradient_blue_dark})`,
          },
        }}
        variant="contained"
        onClick={handleSendMessage}
      >
        전송
      </Button>
    </Box>
  );
};

export default ChatInput;
