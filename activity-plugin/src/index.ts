import { registerPlugin } from '@capacitor/core';

import type { ActivityPlugin } from './definitions';

const Activity = registerPlugin<ActivityPlugin>('Activity');

export * from './definitions';
export { Activity };
