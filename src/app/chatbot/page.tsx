'use client';

import React, { useState, useEffect } from 'react';

import { Container, Box, Typography, Card } from '@mui/material';

import ChatContainer from '@/components/ChatbotContainer';
import ChatInput from '@/components/ChatInput';
import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import color from '@/constants/color';
import chatbotIntro from '@/mocks/chatIntro';

const initialMessage =
  '안녕 나는 AI 산지니야🤖\n최근 네가 읽었던 글에 대한 질문이나, 경제 단어에 대해서 더 알려줄게😆\n경단에 대해서 더 알려주는 것도 가능가능!!';

interface Message {
  id: number;
  content?: string;
  isUser?: boolean;
  buttons?: Array<{ id: number; text: string; onClick: () => void }>;
}

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleButtonClick = async (type: string) => {
    let response;
    try {
      if (type === 'question') {
        response = await fetch('/api/question');
      } else if (type === 'term') {
        response = await fetch('/api/term');
      } else if (type === 'gyeongdan') {
        response = await fetch('/api/gyeongdan');
      }
      const data = await (response as Response).json();
      setMessages((prevMessages) => [...prevMessages, { id: 0, content: data.message, isUser: false }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setMessages([
      { id: 0, content: initialMessage, isUser: false },
      {
        id: 0,
        buttons: [
          { id: 0, text: '질문하기', onClick: () => handleButtonClick('question') },
          { id: 0, text: '용어 찾기', onClick: () => handleButtonClick('term') },
          { id: 0, text: '경단 설명', onClick: () => handleButtonClick('gyeongdan') },
        ],
        isUser: false,
      },
    ]);
  }, []);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = { id: 0, content: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { id: 0, content: message, isUser: false }]);
    }, 500);
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
          flex: '1 1 40%',
          maxWidth: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)',
          overflowY: 'auto',
        }}
      >
        <Typography color={color.blue} marginLeft="3rem" mb={3} variant="h4">
          AI 산지니에 대해서 궁금해?
        </Typography>
        <Card
          sx={{
            width: '100%',
            padding: '1.5rem',
            boxShadow: 0,
            borderRadius: 10,
            overflowY: 'auto',
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              whiteSpace: 'pre-line',
              lineHeight: '1.6',
              '& h5': {
                fontWeight: 'bold',
                marginBottom: '0.5rem',
              },
              '& span': {
                fontWeight: 'bold',
              },
            }}
            variant="body2"
          >
            {chatbotIntro}
          </Typography>
        </Card>
      </Box>
      <Box
        sx={{
          flex: '2 1 60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: '0 2rem',
            marginBottom: '1rem',
          }}
        >
          <Typography color={color.blue} mb={3} variant="h4">
            AI 산지니야 반가워~
          </Typography>
          <CommentCard
            isStroke
            content={'AI 산지니에게 바르고 고운말을 해주세요~!\n산지니는 구글에서 다른 기사를 찾아보는 일을 좋아해요🧐'}
            isChat={false}
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
        </Container>
        <ChatInput onSendMessage={handleSendMessage} />
        <Box
          sx={{
            width: '100%',
            padding: '0 2rem',
            marginTop: '1rem',
          }}
        />
      </Box>
    </GradientBox>
  );
};

export default Page;
