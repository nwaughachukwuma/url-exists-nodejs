const http = require('http')

async function urlExistNodeJS(url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`)
	}

	if (!isURL(url)) {
		return false
	}

	const { host, pathname } = new URL(url)
	const opt = {
		method: 'HEAD',
		host: host,
		path: pathname,
	}

	return await new Promise((res, _) => {
		const req = http.request(opt, (r) =>
			res(/4\d\d/.test(`${r.statusCode}`) === false),
		)

		req.on('error', () => res(false))
		req.end()
	})
}

// cut from https://github.com/sindresorhus/is-url-superb/blob/main/index.js
function isURL(url) {
	url = url.trim()
	if (url.includes(' ')) {
		return false
	}

	try {
		new URL(url) // eslint-disable-line no-new
		return true
	} catch (_e) {
		return false
	}
}

module.exports = urlExistNodeJS