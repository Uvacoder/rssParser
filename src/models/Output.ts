export enum Output {
    text = 'text',
    html = 'html',
    json = 'json',
}

type OutputFormat = keyof typeof Output;

export default OutputFormat
