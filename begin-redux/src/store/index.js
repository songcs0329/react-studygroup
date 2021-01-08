/*
  import configure from 'configure';
  를 통하여 스토어를 불러올 수 있도록, 이 파일에서 스토어를 생성하고 내보냄
*/

import configure from './configure';
export default configure();
// 스토어를 불러야함으로 configure() arrow func 실행 > return store