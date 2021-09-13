import { textFormat, htmlFormat, jsonFormat } from '../helpers/formatItems';

export default {
    "defualt" : "text",
    "formats" : {
        "text" : {
            "fn": textFormat
        },
        "html" : {
            "fn": htmlFormat
        },
        "json" : {
            "fn": jsonFormat
        }
    }

}