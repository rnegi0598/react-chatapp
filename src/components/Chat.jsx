import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {AiFillCamera} from 'react-icons/ai'
import {BsPersonFillAdd} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <AiFillCamera style={{fontSize:'25px'}}/>
          <BsPersonFillAdd style={{fontSize:'25px'}}/>
          <FiMoreHorizontal style={{fontSize:'25px'}}/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
