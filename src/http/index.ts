import https from 'https';
import { hostname, baseUrl } from '../constants';

async function getRequest(
  entryPoint: string,
  args: string | undefined,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      path: `${baseUrl}${entryPoint}${args}`,
      port: 443,
      method: 'GET',
    };

    const body: Uint8Array[] = [];

    const req = https.request(options, res => {
      res.on('data', chunk => body.push(chunk));
      res.on('end', () => {
        const data = Buffer.concat(body).toString();
        resolve(data);
      });
    });
    req.on('error', e => {
      reject(e);
    });
    req.end();
  });
}

export default getRequest;
