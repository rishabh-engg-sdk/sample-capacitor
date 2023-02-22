import {registerPlugin} from '@capacitor/core';

import type {ActivityPlugin, CalculatePlugin} from './definitions';

const Activity = registerPlugin<ActivityPlugin>('Activity', {});
const Calculate = registerPlugin<CalculatePlugin>('Calculate', {});

export * from './definitions';
export {Activity, Calculate};
