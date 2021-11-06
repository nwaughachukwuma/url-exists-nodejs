import { expectType } from 'tsd'
import urlExists from './index'

const url = 'https://google.com'
expectType<Promise<boolean>>(urlExists(url))
