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
    <Box sx={{ display: 'flex', width: '100%', maxWidth: '600px', backgroundColor: color.transport_white, borderRadius: '5px', padding: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <TextField
        fullWidth
        placeholder="Type your message..."
        sx={{
          marginRight: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly more opaque for text visibility
          borderRadius: '5px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        value={userMessage}
        variant="outlined"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        color="primary"
        sx={{
          background: `linear-gradient(45deg, ${color.gradient_blue_dark}, ${color.gradient_blue_light})`,
          color: 'white',
          borderRadius: '5px',
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
