export * from './currency';
export * from './filter';
export * from './json';
export * from './limit';
export * from './md5';
export * from './number';
export * from './sort';

export function configure(config) {
  config.globalResources([
    './currency',
    './filter',
    './json',
    './limit',
    './md5',
    './number',
    './sort'
  ]);
}
