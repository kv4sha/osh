export const Routes = {
  HOME: '/:agentId/home',
  CHAT: '/:agentId/chat',
  RATING: '/:agentId/rating',
  ERROR: '/error',
  ACCESS_DENIED: '/access-denied',
  SUBSCRIPTION_ERROR: '/subscription-error',
} as const;

export type RouteType = (typeof Routes)[keyof typeof Routes];
