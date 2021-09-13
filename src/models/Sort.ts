export enum Sort {
    title = 'title',
    date =  'date',
}

type SortBy = keyof typeof Sort;


export default SortBy;