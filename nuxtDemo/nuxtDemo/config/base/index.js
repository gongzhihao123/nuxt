import dev from './dev'
import production from './production'
import test from './test'
let env = process.env.APP_ENV.replace(/[a-zA-Z]+:/, '')
const config = {
  dev,
  production,
  test
}
if (process.server) {
  console.log('env:', env)
}
if (!(env in config)) {
  env = 'test'
}
export default config[env]
