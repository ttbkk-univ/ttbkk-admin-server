export interface ParserService {
  parse(data: any): string | Promise<string>;
}
