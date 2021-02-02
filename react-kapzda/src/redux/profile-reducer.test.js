import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {
  addPostActionCreator,
  deletePost,
} from './profile-reducer';

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 11 },
    { id: 2, message: 'How are you?', likesCount: 12 },
    { id: 3, message: 'Hi!', likesCount: 13 },
    { id: 4, message: 'Yoo', likesCount: 14 },
  ],
};

it('new post should be added', () => {
  // 1. test data
  const action = addPostActionCreator('My new test post');

  // 2. action
  const newState = profileReducer(initialState, action);

  // 3.expectation
  expect(newState.posts.length).toBe(5);
});

it('new post should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('My new test post');

  // 2. action
  const newState = profileReducer(initialState, action);

  // 3.expectation
  expect(newState.posts[4].message).toBe('My new test post');
  expect(newState.posts[4].likesCount).toBe(0);
  expect(newState.posts[4].id).toBe(5);
});

it('new post id should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('My new test post');

  // 2. action
  const newState = profileReducer(initialState, action);

  // 3.expectation
  expect(newState.posts[4].likesCount).toBe(0);
  expect(newState.posts[4].id).toBe(5);
});

it('new post likesCount should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('My new test post');

  // 2. action
  const newState = profileReducer(initialState, action);

  // 3.expectation
  expect(newState.posts[4].likesCount).toBe(0);
});

it('delete test', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(initialState, action);

  // 3.expectation
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[0].id).toBe(2);
});
