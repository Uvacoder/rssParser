import FeedItem from "../models/Item";

export const sortByDate = ( items : FeedItem[] ) : void => {
    items.sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export const sortByTitle = ( items : FeedItem[] ) : void => {
    items.sort((a, b) => {
        let al : string = a.title.toLocaleLowerCase();
        let bl : string = b.title.toLocaleLowerCase();
        if(al < bl) { return -1; }
        if(al > bl) { return 1; }
        return 0;
    });
}