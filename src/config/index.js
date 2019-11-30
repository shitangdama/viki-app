const prod = process.env.NODE_ENV === 'production'

const http_api = {
  'SERVER_URL': prod ? 'https://viki-api.shitangdama.cn' :'https://laki-api.shitangdama.cn',
  'CLIENT_URL': prod ? 'https://viki.shitangdama.cn' :'http://127.0.0.1:3000',
}

export default http_api;