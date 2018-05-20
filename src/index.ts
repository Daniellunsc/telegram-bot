
import * as fs from 'fs';
import bot from './bot';

fs.exists('./build/config.json', (exists) => {
  if (!exists) {
    fs.openSync('./build/config.json', 'w');
    fs.writeFile('./build/config.json', JSON.stringify({
      api_key: 'YOUR_API_KEY',
      allowed_chat: 'YOUR_ALLOWED_CHAT or * for all'
    }), (err) => {
      console.log(err)
    })
  }
})

console.log('config file exists')

const mybot = new bot();

mybot.onText(/\/lunabot (.*)/, (msg, match) => {
  console.log((msg.chat.id != mybot.chatAllowed)&&(mybot.chatAllowed.toString() != '*'))
      if(!mybot.CheckAllowed(msg.chat.id)){
        return mybot.sendMessage(msg.chat.id, "Chat not allowed");
      }
      console.log(match[1])
      switch(match[1]){
        case 'test':
          return mybot.sendMessage(msg.chat.id, 'test succeed!');
        default:
          return mybot.sendMessage(msg.chat.id, 'Unknown command');
      }
})
