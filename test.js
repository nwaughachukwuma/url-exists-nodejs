/**
 * Basic tests to check if a URL exists
 */
import test from 'ava';
import urlExists from './index.js';

// Check wrong input parameter
test('Should throw TypeError for a non string', async (t) => {
	const nonString = 12345
	await t.throwsAsync(urlExists(nonString), {instanceOf: TypeError, message: 'Expected a string, got number'})
});

// Check invalid url parameter
test('Should return false for an invalid url', async (t) => {
	const exists = await urlExists('not-a-valid-url')
	t.is(exists, false);
});

test('Should return false for an invalid url: one with space', async (t) => {
	const exists = await urlExists('not-a valid-url')
	t.is(exists, false);
});

// Check if well formed url exists
test('A valid URL should return true', async (t) => {
	const exists = await urlExists('https://google.com')
	t.is(exists, true);
});
test('Will return false for a 4** is error', async (t) => {
	const exists = await urlExists('https://httpbin.org/status/404')
	t.is(exists, false);
})
test('A non existing URL should return false', async (t) => {
	const exists = await urlExists('https://google.com/wrong-path?path=path-to-no-where')
	t.is(exists, false);
})

// Can deep check a redirect url
test('Should return true for a redirect url', async (t) => {
	const exists = await urlExists('https://bit.ly/300awAn')
	t.is(exists, true);
});
