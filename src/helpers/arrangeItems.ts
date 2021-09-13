import FeedItem         from "../models/Item";
import OutputFormat     from '../models/Output';
import SortBy, { Sort } from '../models/Sort';
import sorts            from '../configs/sorts';
import format           from '../configs/format';

export default (items : Array<any>, output: OutputFormat, sort: null | SortBy ) : any[] => {
    const arrangedItems : FeedItem[] = items.map( item  => {
        return {
            'title':   item.title,
            'content': item.contentSnippet,
            'date' :   new Date(item.isoDate),
            'html':    item['content:encoded'],
            'link':    new URL(item.link)
        }
    })
    if ( sort && sort in Sort ) {
        sorts[sort].fn(arrangedItems);
    }
        
    return format.formats[output].fn(arrangedItems);

}