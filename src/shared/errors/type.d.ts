import config from './config';

export type TErrorConfig = typeof config;
export type TErrorConfigKey = keyof TErrorConfig;
export type TErrorConfigValue = TErrorConfig[TErrorConfigKey];

export type TErrorHandler = (type: TErrorConfigKey) => (code: number) => void;
