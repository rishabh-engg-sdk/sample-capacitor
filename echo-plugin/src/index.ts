import { registerPlugin } from '@capacitor/core';

import type { EchoPlugin } from './definitions';

const Echo = registerPlugin<EchoPlugin>('Echo')

export * from './definitions';
export { Echo };
