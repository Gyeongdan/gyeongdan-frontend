'use client';

import React, { useState } from 'react';

import { Box, TextField, Button } from '@mui/material';

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
    <Box sx={{ display: 'flex', width: '100%', maxWidth: '600px' }}>
      <TextField
        fullWidth
        placeholder="Type your message..."
        sx={{
          marginRight: '1rem',
          backgroundColor: 'white',
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
          backgroundColor: '#ff69b4',
          color: 'white',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#ff1493',
          },
        }}
        variant="contained"
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
