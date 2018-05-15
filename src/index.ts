
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

//const word = (<any>config).config;
console.log('config file exists')

const mybot = new bot();
