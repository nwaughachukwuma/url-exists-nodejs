import { expectType } from 'tsd'
import urlExistNodeJS from './index'

const url = 'https://google.com'
expectType<Promise<boolean>>(urlExistNodeJS(url))
