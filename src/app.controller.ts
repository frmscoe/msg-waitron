import { Context } from 'koa';
const GetRandomMessage = async (ctx: Context): Promise<Context> => {

  const request = ctx.request.body;
  let messageType = request.messageType;

  const fs = require('fs').promises;
  const randomNumber = getRandomInt(500);
  let fileString = '00' + randomNumber
  if (randomNumber > 9) {
    fileString = '0' + randomNumber
  }
  if (randomNumber > 99) {
    fileString = '' + randomNumber
  }
  const data = await
    fs.readFile('./src/dataExport/'
      + messageType
      + '/'
      + fileString
      + messageType
      + '.json', 'utf8', (error: any, data: any) => {
        if (error) {
          console.log(`ERROR: ${error}`)
          return error;
        }
        return data;
      })
  ctx.body = data;

  return ctx;
};


const GetSpecificPainMessage = async (ctx: Context): Promise<Context> => {

  const request = ctx.request.body;
  let messageType = request.messageType;
  let messageid = request.messageID;

  const fs = require('fs').promises;

  const data = await
    fs.readFile('./src/dataExport/'
      + messageType
      + '/'
      + messageid
      + '.json', 'utf8', (error: any, data: any) => {
        if (error) {
          console.log(`ERROR: ${error}`)
          return error;
        }
        return data;
      })
  ctx.body = data;

  return ctx;
};



const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}
export { GetSpecificPainMessage, GetRandomMessage };
