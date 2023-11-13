
import { useEffect, useState } from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import ChatIcon from './components/ChatIcon';
import { useSelector, useDispatch } from 'react-redux';
import { saveLanguage } from './store/slices/auth';
import LanguageBox from './components/LanguageBox';
function App() {

  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.auth);

  useEffect(() => {
  const storedLanguage = sessionStorage.getItem('language') || 'en';
  dispatch(saveLanguage(storedLanguage));
}, [dispatch]);
  const changeLanguage = (newLanguage) => {
    dispatch(saveLanguage(newLanguage));
  };
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  return (
    <div className="App">
    
  <div>

  <LanguageBox changeLanguage={changeLanguage}/>
     
    </div> 
    {!showChat && <ChatIcon onClick={toggleChat} />}
      {showChat &&  <Chatbox onClose={toggleChat} />}
 

  
    </div>
  );
}

export default App;

