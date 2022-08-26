export interface SenderService {
  send(data: any): void | Promise<void>;
}
