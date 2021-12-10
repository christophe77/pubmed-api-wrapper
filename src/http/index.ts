import fetch from 'cross-fetch';
import { baseUrl, retMode } from '../constants';

const retmode = `&retmode=${retMode}`;

async function getRequest(entryPoint: string, args: string | undefined) {
  const url = `${baseUrl}${entryPoint}${args}${retmode}`;
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    const datas = await res.json();
    return datas;
  } catch (err) {
    return err;
  }
}

export default getRequest;
