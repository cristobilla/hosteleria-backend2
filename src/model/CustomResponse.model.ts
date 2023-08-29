export interface MessageResponse {
  type: MessageType;

  number?: string;

  message?: string;
}

export interface CustomResponse {
  code: ReturnType;

  messages: Array<MessageResponse>;

  result?: Array<any> | any;
}

export enum ReturnType {
  'Error' = 'Error',

  'Success' = 'Success',

  'Information' = 'Information',
}

export enum MessageType {
  'Error' = 'Error',

  'Success' = 'Success',

  'Information' = 'Information',

  'Warning' = 'Warning',
}
