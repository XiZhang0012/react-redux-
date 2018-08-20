import axios from 'axios'
import pathToRegexp from 'path-to-regexp'
import qs from 'qs'

const instance = axios.create({
  timeout: 100000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

const routes = {
  'product.save': {
    url: '/product/save',
    method: 'post'
  },
}

function SlRequest (name, params, data, query = {}, file, isCancel) {
  const route = routes[name]
  const toPath = pathToRegexp.compile(route.url)
  const url = toPath(params)
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  const _r = instance.request({
    url: url,
    method: route.method ? route.method : 'get',
    data: file ? data : qs.stringify(data, { encode: true }),
    params: query,
    cancelToken: source.token
  })
  if (isCancel && isCancel === 'cancel') {
    return source.cancel()
  }

  return _r
}


export default {
  request: SlRequest,
}