import * as config from './config.json';

export default function testBot():string {
  return (<any>config).api_key;
}