export const EMAIL_CONTENT_CLASS = 'erxes-email-content';
export const EMAIL_CONTENT_PLACEHOLDER = `<div class="${EMAIL_CONTENT_CLASS}"></div>`;

export const MESSAGE_TYPES = [
  { label: 'Segment', value: 'segment' },
  { label: 'Tag', value: 'tag' },
  { label: 'Brand', value: 'brand' }
];

export const MESSAGE_KINDS = {
  AUTO: 'auto',
  VISITOR_AUTO: 'visitorAuto',
  MANUAL: 'manual',
  ALL_LIST: ['auto', 'visitorAuto', 'manual']
};

export const statusFilters = [
  { key: 'live', value: 'Live' },
  { key: 'draft', value: 'draft' },
  { key: 'paused', value: 'Paused' },
  { key: 'yours', value: 'Your messages' }
];

export const MESSAGE_KIND_FILTERS = [
  { name: 'auto', text: 'Auto' },
  { name: 'visitorAuto', text: 'Visitor auto' },
  { name: 'manual', text: 'Manual' }
];

export const MESSENGER_KINDS = {
  CHAT: 'chat',
  NOTE: 'note',
  POST: 'post',
  ALL_LIST: ['chat', 'note', 'post'],
  SELECT_OPTIONS: [
    { value: 'chat', text: 'Chat' },
    { value: 'note', text: 'Note' },
    { value: 'post', text: 'Post' }
  ]
};

export const METHODS = {
  MESSENGER: 'messenger',
  EMAIL: 'email',
  SMS: 'sms',
  ALL_LIST: ['messenger', 'email', 'sms']
};

export const SENT_AS_CHOICES = {
  BADGE: 'badge',
  SNIPPET: 'snippet',
  FULL_MESSAGE: 'fullMessage',
  ALL_LIST: ['badge', 'snippet', 'fullMessage'],
  SELECT_OPTIONS: [
    { value: 'badge', text: 'Badge' },
    { value: 'snippet', text: 'Snippet' },
    { value: 'fullMessage', text: 'Show the full message' }
  ]
};

export const SCHEDULE_TYPES = [
  { value: 'pre', label: 'Schedule for later' },
  { value: 'minute', label: 'Every minute' },
  { value: 'hour', label: 'Every hour' },
  { value: 'day', label: 'Every Day' },
  { value: 'month', label: 'Every Month' },
  { value: 'year', label: 'Every Year' },
  { value: 1, label: 'Every Monday' },
  { value: 2, label: 'Every Tuesday' },
  { value: 3, label: 'Every Wednesday' },
  { value: 4, label: 'Every Thursday' },
  { value: 5, label: 'Every Friday' },
  { value: 6, label: 'Every Saturday' },
  { value: 0, label: 'Every Sunday' }
];

export const SMS_DELIVERY_STATUSES = {
  QUEUED: 'queued',
  SENDING: 'sending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  SENDING_FAILED: 'sending_failed',
  DELIVERY_FAILED: 'delivery_failed',
  DELIVERY_UNCONFIRMED: 'delivery_unconfirmed',
  ALL: [
    'queued',
    'sending',
    'sent',
    'delivered',
    'sending_failed',
    'delivery_failed',
    'delivery_unconfirmed'
  ],
  OPTIONS: [
    {
      value: 'queued',
      label: `The message is queued up on Telnyx's side`
    },
    {
      value: 'sending',
      label: 'The message is currently being sent to an upstream provider'
    },
    {
      value: 'sent',
      label: 'The message has been sent to the upstream provider'
    },
    {
      value: 'delivered',
      label: 'The upstream provider has confirmed delivery of the message'
    },
    {
      value: 'sending_failed',
      label: 'Telnyx has failed to send the message to the upstream provider'
    },
    {
      value: 'delivery_failed',
      label:
        'The upstream provider has failed to send the message to the receiver'
    },
    {
      value: 'delivery_unconfirmed',
      label:
        'There is no indication whether or not the message has reached the receiver'
    }
  ]
};
