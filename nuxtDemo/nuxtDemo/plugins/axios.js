import axios from 'axios'
import cfg from '~/config'
axios.defaults.baseURL = cfg.CM_API.hostname

export default axios.create()
