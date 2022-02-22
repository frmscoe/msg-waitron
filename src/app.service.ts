import http from 'http';

import { LoggerService } from './logger.service';
import apm from 'elastic-apm-node';
import { configuration } from './config';
import { cacheClient, databaseClient } from '.';
import axios from 'axios';


// Submit the score to the CADP
const executePost = async (endpoint: string, request: string) => {
  try {
    const cadpRes = await axios.post(endpoint, request);
    if (cadpRes.status !== 200) {
      LoggerService.error(`CADP Response StatusCode != 200, request:\r\n${request}`);
    }
  } catch (error) {
    LoggerService.error(`Error while sending request to CADP at ${endpoint ?? ""} with message: ${error}`);
    LoggerService.trace(`CADP Error Request:\r\n${request}`);
  }
};
