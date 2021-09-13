import OutputFormat from '../models/Output';
import SortBy       from '../models/Sort';

interface RssParserInterface {
    urls: URL[];
    readonly output: OutputFormat;
    readonly sort:   null | SortBy;
}

export default RssParserInterface;
