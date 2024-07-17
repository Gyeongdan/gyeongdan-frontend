'use client';

import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import ChatContainer from '@/components/ChatContainer';
import ChatInput from '@/components/ChatInput';
import GradientBox from '@/components/GradientBox';
import CommentCard from '@/components/CommentCard';

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          flex: '1 1 30%',
          maxWidth: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)', // Fixed height
        }}
      >
        <CommentCard
          content={
            "안녕 나는 AI 산지니야🤖\n" +
            "최근 네가 읽었던 글에 대한 질문이나, 경제 단어에 대해서 더 알려줄게😆\n" +
            "경단에 대해서 더 알려주는 것도 가능가능!!\n"
          }
          isStroke={true}

          sx={{ mb: 2,height: 'calc(100vh - 100px)', }} // Additional styling
        />
      </Box>
      <Box
        sx={{
          flex: '2 1 70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)', // Fixed height
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: '0 2rem',
            marginBottom: '1rem',
          }}
        >
          <CommentCard
            content={
              "AI 산지니에게 바르고 고운말만...!\n" +
              "산지니에게 고맙다고 인사해주면 산지니가 당신을 위한 세레나데를 불러줘요 ~ 🎶"
            }
            isStroke={true}
            sx={{ mb: 2 }} // Additional styling
          />
        </Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            padding: '0 2rem',
          }}
        >
          <ChatContainer messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </Container>
        <Box
          sx={{
            width: '100%',
            padding: '0 2rem',
            marginTop: '1rem',
          }}
        >
          <CommentCard
            content={
              "이것은 채팅 컨테이너 아래에 있는 코멘트입니다.\n" +
              "여기에 추가 정보를 표시할 수 있습니다."
            }
            isStroke={true}
            sx={{ mt: 2 }} // Additional styling
          />
        </Box>
      </Box>
    </GradientBox>
  );
};

export default Page;
