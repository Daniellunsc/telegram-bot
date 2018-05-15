import * as config from './config.json';
import * as telegramBot from 'node-telegram-bot-api';

class bot {
  private api_token: string;
  private allowedChat: number;
  private mybot: telegramBot;
  constructor(){
    this.api_token = (<any>config).api_key;
    this.allowedChat = (<any>config).allowed_chat;
    this.mybot = new telegramBot(this.api_token, {polling: true})
    this.setMsgListener()
  }

  private setMsgListener() {
    this.mybot.onText( /\/lunabot (.*)/, ( msg, match ) => {
      if(msg.chat.id != this.allowedChat) return this.sendMessage(msg.chat.id, "Chat not allowed");
      console.log(match[1])
      switch(match[1]){
        case 'test':
          return this.sendMessage(msg.chat.id, 'test succeed!');
      }
    })
  }

  public sendMessage(who: number, message: string){
    return this.mybot.sendMessage(who, message);
  }

}

export default bot;
