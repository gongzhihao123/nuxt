import cookies from './cookies'
import INIT_DATA from './INIT_DATA'
import API from './api'
export const api = API
let s = {
  ...cookies,
  INIT_DATA,
  api
}
export default s
