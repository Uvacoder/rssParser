import { sortByDate, sortByTitle } from '../helpers/sortItems';

export default {
    "title":{
        "fn": sortByTitle
    },
    "date":{
        "fn": sortByDate
    }
}