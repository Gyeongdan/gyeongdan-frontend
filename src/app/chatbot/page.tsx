'use client';

import React, { useState } from 'react';

import { Container } from '@mui/material';

import ChatContainer from '@/components/ChatContainer';
import ChatInput from '@/components/ChatInput';
import GradientBox from '@/components/GradientBox';

const Page = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);

  const handleSendMessage = (message: string) => {
    const newMessage = { content: message, isUser: true };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { content: message, isUser: false }]);
    }, 1000); // 1 second delay
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
        <ChatContainer messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </Container>
    </GradientBox>
  );
};

export default Page;
