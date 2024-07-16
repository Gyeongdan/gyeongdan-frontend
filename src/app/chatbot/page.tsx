'use client';

import React, { useState } from 'react';
import GradientBox from '@/components/GradientBox';
import CommentCard from '@/components/CommentCard';
import { Box, Container, TextField, Button } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const AnimatedBox = styled(Box)<{ delay: number }>`
    animation: ${fadeInUp} 0.6s ease-out;
    animation-delay: ${(props) => props.delay}s;
    animation-fill-mode: both;
`;

const Page = () => {
  const [userMessage, setUserMessage] = useState<string>('');
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    const newMessage = { content: userMessage, isUser: true };
    setMessages([...messages, newMessage]);
    setUserMessage('');

    // Add a delay for the AI response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { content: userMessage, isUser: false }]);
    }, 1000); // 1 second delay
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <GradientBox
      sx={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 2rem',
        }}
      >
        <Box sx={{ flex: 1, width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
          {messages.map((message, index) => (
            <AnimatedBox
              key={index}
              delay={index * 0.1}
              sx={{ display: 'flex', justifyContent: message.isUser ? 'flex-end' : 'flex-start', marginY: '0.5rem' }}
            >
              <CommentCard
                content={message.content}
                isCharacter={!message.isUser}
                isStroke={true}
              />
            </AnimatedBox>
          ))}
        </Box>
        <Box sx={{ display: 'flex', width: '100%', maxWidth: '600px' }}>
          <TextField
            fullWidth
            variant="outlined"
            value={userMessage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            sx={{ marginRight: '1rem' }}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
      </Container>
    </GradientBox>
  );
};

export default Page;
