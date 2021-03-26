import { getData } from './APIHelper'
import * as config from './APIconfig'

export const getBooks = async bookName => {
    const endpoint = config.GetBookByName + bookName + config.keyHead;
    return await getData(config.GoogleBookURL, endpoint)
}