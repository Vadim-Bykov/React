import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from './store/types';
import * as selectors from './store/selectors';
import * as api from './wordApi';
import * as operations from './store/operations';
// import style from './Music.module.scss'

const Music: React.FC = () => {
  const isAuth = useSelector(selectors.getIsAuth);
  const isToken = useSelector(selectors.getIsToken);
  const words = useSelector(selectors.getWords);

  const data = words.map((word) => {
    return (
      <div key={word.id}>
          <div>Word: {word.word}. Transcription: {word.transcription}</div>
          <div>Translation: {word.wordTranslate}</div>
          <audio src={`${api.baseURL}/${word.audio}`} controls></audio>
          <div>Example: {word.textExample}</div>
          <div>Translation: {word.textExampleTranslate}</div>
          <audio src={`${api.baseURL}/${word.audioExample}`} controls></audio>
          <img src={`${api.baseURL}/${word.image}`} alt="word"></img>
      </div>
    );
  });

  const dispatch = useDispatch();

  useEffect(() => {
   //  if (!isAuth) dispatch(operations.authorizeUser(authData));
   //  if (!isToken) dispatch(operations.login(authData));

    dispatch(operations.requestWords(1, 1));
    // const key = loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });
    // console.log(key);
    // getWords(1, 1);
    //  api.createUser(authData)
    //  api.loginUser(authData)
    //   api.createUserWords(api.userData.id, "5e9f5ee35eb9e72bc21af4a5", 'easy')
    //   api.getUserWordByID(api.userData.id, "5e9f5ee35eb9e72bc21af4a5")
    //  api.getAllUserWords();
  }, []);

  return <div>{data}</div>;
};

export default Music;
