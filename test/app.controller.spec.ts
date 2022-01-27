import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {

    it('should return "Hello World!"', () => {
      expect(appController.getRandomMessage(
        [
          { key: "messageType", value: "pain001" },
          { key: "messageID", value: "001" }
        ]
      )).not.toBe(null);

      expect(appController.getSpecificMessage(
        [
          { key: "messageType", value: "pain001" },
          { key: "messageID", value: "001" }
        ]
      )).not.toBe(null);

    });
  });
});
