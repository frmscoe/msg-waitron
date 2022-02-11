import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; 
@Controller('Waitron')
export class AppController {
  constructor(private readonly appService: AppService,) { }
  @Get('getRandomMessage')
  async getRandomMessage(@Body() body: any) {
    console.log(JSON.stringify(body));
    
    let messageType = body.messageType
    const fs = require('fs').promises;
    const randomNumber = this.getRandomInt(500);
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
        + '.json', 'utf8', (error, data) => {
          if (error) {
            console.log(`ERROR: ${error}`)
            return error;
          }
          return data;
        })
    return data;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  @Get('getSpecificMessage')
  async getSpecificMessage(@Body() body: any) {
    let messageType = body.messageType
    let messageID = body.messageID
    const fs = require('fs').promises;
    const data = await
      fs.readFile('./src/dataExport/'
        + messageType
        + '/'
        + messageID
        + messageType
        + '.json', 'utf8', (error, data) => {
          if (error) {
            console.log(`ERROR: ${error}`)
            return 'file not found '
          }
          return data;
        })
    return data
  }
}
