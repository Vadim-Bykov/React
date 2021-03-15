import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import MyPostsForm from './MyPostsForm';
import { postType } from '../../../Types/Types';

export type FormValuesType = {
  myPostForm: string;
};

type PropsType = {
  posts: Array<postType>;
  addPost: (newPost: string) => void;
};

const MyPosts: React.FC<PropsType> = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  const onSubmitPost = (e: FormValuesType) => {
    const newPost = e.myPostForm;
    props.addPost(newPost);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <MyPostsForm onSubmit={onSubmitPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default React.memo(MyPosts);
