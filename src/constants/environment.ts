export const Environment = {
  LOCAL: 'local',
  DEV: 'development',
  QA: 'qa',
  PROD: 'production',
} as const;

export type EnvironmentType = (typeof Environment)[keyof typeof Environment];
