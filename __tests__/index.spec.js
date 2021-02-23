/**
 * Basic tests
 */
const urlExistNodeJS = require('../index')

describe('Check if a URL exists', () => {
    describe('Check wrong input parameter', () => {
        it('Should throw TypeError for a non string', async () => {
            expect.assertions(1);
            try {
                const nonString = 12345
                await urlExistNodeJS(nonString)
            } catch (e) {
                expect(e).toBeInstanceOf(TypeError);
            }
        });
    })

    describe('Check invalid url parameter', () => {
        it('Should return false for an invalid url', async () => {
            const exists = await urlExistNodeJS('not-a-valid-url')

            expect(exists).toEqual(false);
        });

        it('Should return false for an invalid url with space', async () => {
            const exists = await urlExistNodeJS('not-a valid-url')

            expect(exists).toEqual(false);
        });
    })

    describe('Check if well formed url exists', () => {
        it('A valid URL should return true', async () => {
            const exists = await urlExistNodeJS('https://google.com')

            expect(exists).toEqual(true);
        });

        it('Will return false for a 4** is error', async () => {
            const exists = await urlExistNodeJS('https://httpbin.org/status/404')

            expect(exists).toEqual(false);
        })

        it('A non existing URL should return false', async () => {
            const exists = await urlExistNodeJS('https://google.com/wrong-path?path=path-to-no-where')

            expect(exists).toEqual(false);
        })
    })

    describe('Can deep check a redirect url', () => {
        it('Should return true for a redirect url', async () => {
            const exists = await urlExistNodeJS('https://goo.gl/DrBmYG')

            expect(exists).toEqual(true);
        });
    })
})
