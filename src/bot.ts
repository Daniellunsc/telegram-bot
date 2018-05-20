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
  }

  get chatAllowed  {
    return this.allowedChat;
  }

  public CheckAllowed(chatId: number): boolean {
    if((chatId.toString() === this.allowedChat.toString())||(this.allowedChat.toString() === '*')){
      // allowed
      return true;
    }
    // not allowed
    return false;
  }

  public sendMessage(who: number, message: string): Object{
    return this.mybot.sendMessage(who, message);
  }

  public onText(expression: RegExp, callback) {
    return this.mybot.onText(expression, callback);
  }

}

export default bot;
