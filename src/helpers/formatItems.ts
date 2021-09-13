import FeedItem from "../models/Item";

export const textFormat = ( items : FeedItem[] ): string[] => {
    return items.map(item => item.content )
}

export const htmlFormat = ( items : FeedItem[] ): HTMLElement[] => {
    return items.map(item => item.html )
}

export const jsonFormat = ( items : FeedItem[] ): FeedItem[] => {
    return items;
}