import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

export const { AUTH_TOKEN } = process.env;
export const { APP_ENV } = process.env;
export const { REDIS_HOST } = process.env;
export const { REDIS_PORT } = process.env;
export const { REDIS_PASS } = process.env;
export const { ZENVIA_TOKEN } = process.env;
export const { PUBSUB_PROJECT_ID } = process.env;
export const { PUBSUB_SUBSCRIPTION_MESSAGE } = process.env;
export const { SENTRY_DSN } = process.env;
export const { PUBSUB_TOPIC_REPLY } = process.env;
export const { PUBSUB_TOPIC } = process.env;
