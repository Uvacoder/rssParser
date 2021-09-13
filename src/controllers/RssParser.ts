import OutputFormat, { Output } from '../models/Output';
import SortBy, { Sort }         from '../models/Sort';
import RssParserInterface       from '../models/RssParser';
import sources                  from '../configs/sources';
import Parser                   from 'rss-parser';
import arrangeItems             from '../helpers/arrangeItems';



export default class RssParser implements RssParserInterface {

    public   urls: URL[] = sources
    readonly output;
    readonly sort;


    constructor(
        output : OutputFormat = 'text',
        sort : null | SortBy = null
    ) {
        if (output in Output === false) {
            output = 'text';
        }
        if (sort && sort in Sort === false) {
            sort = null;
        }
        this.output = output;
        this.sort   = sort
    }

    public parse = async () => {
        try {
            const parser = new Parser();
            const items = await Promise.all(this.urls.map( url => parser.parseURL(url.href))).then(feeds => feeds.map(feed => feed.items));
            return this.response(items.flat());
        } catch (error) {
            throw error;
        }
    }

    protected response =  (items: Array<any>) => {
        return arrangeItems(items, this.output, this.sort);
    }

}