import {MAX_LENGTH_TITLE} from '../mock'

export function getPagesCount (pages) {
    let items = []

    for (let i = 1; i <= pages; i++) {
        items.push(i)
    }

    return items
}

export const makeShortTitleText = title => {
    let shortTitle = title

    if (shortTitle.length > MAX_LENGTH_TITLE) {
        shortTitle = title.slice(0, MAX_LENGTH_TITLE) + `...`
    }

    return shortTitle
}