import React from 'react';

import CommentCard from '@/components/CommentCard';

interface CommentListProps {
  comments: { id: string; content: string }[];
  isCharacter?: boolean;
}

const CommentList = ({ comments, isCharacter }: CommentListProps) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          isChat
          content={comment.content}
          isCharacter={isCharacter && comment.id === comments[0].id}
        />
      ))}
    </div>
  );
};

export default CommentList;
