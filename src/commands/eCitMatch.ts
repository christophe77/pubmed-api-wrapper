import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/pubmedApi';
/* 
  eCitMatch only works with xml retmode
*/
const eCitMatch = (retMode: RetMode, apiKey: string) => {
  // bdata = journal_title|year|volume|first_page|author_name|your_key|
  return {
    match: async (
      db: string,
      bData: string,
      email: string | undefined,
    ): Promise<string> => {
      const datas = await getRequest(
        entryPoints.ecitmatch,
        `db=${db}&retmode=xml${apiKey}&bdata=${bData}${
          email && `&email=${email}`
        }`,
      );
      const jsonDatas = JSON.stringify({
        eCitMatch: datas.replace(/\n/g, ''),
      });
      return retMode === 'json' ? jsonDatas : datas;
    },
  };
};

export default eCitMatch;
