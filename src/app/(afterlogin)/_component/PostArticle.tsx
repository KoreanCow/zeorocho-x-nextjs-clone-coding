'use client';

import style from './post.module.css'
import { useRouter } from 'next/navigation'

export default function PostArticle({
  children,
  post
}: {
  children: React.ReactNode;
  post: {
    postId: number,
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    Images: any[],
  }
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}