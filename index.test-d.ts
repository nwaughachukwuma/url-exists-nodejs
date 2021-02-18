import { expectType } from 'tsd'
import urlExistNodeJS from './index.js'

expectType<Promise<boolean>>(urlExistNodeJS('https://example.com'))
