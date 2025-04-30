export enum CONVERSATION_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

export enum CONVERSATION_SOURCE {
  EMAIL = 'email',
  SMS = 'sms',
  LIVE_CHAT = 'live_chat',
}

export enum SENDER_ROLE {
  ASSISTANT = 'assistant',
  USER = 'conversation_user',
}

export enum CONVERSATION_MODE {
  MANUAL = 'manual',
  AI = 'ai',
}
