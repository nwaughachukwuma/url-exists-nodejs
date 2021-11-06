import http from 'http'

export async function urlExistNodeJS(url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`)
	}

	const valid_url = validURL(url)
	if (!valid_url) return false

	const { host, pathname } = valid_url
	const opt = {
		method: 'HEAD',
		host: host,
		path: pathname,
	}

	return await new Promise((resolve) => {
		const req = http.request(opt, (r) =>
			resolve(/4\d\d/.test(`${r.statusCode}`) === false),
		)

		req.on('error', () => resolve(false))
		req.end()
	})
}

// inspired by https://github.com/sindresorhus/is-url-superb/blob/main/index.js
function validURL(url) {
	try {
		return new URL(url.trim()) // eslint-disable-line no-new
	} catch (_e) {
		return null
	}
}

export default urlExistNodeJS
