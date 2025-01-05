export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((acc, param) => {
    const [key, value] = param.split('=')
    return { ...acc, [key]: value }
  }, {})
}