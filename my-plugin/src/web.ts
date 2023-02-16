import {WebPlugin} from '@capacitor/core';

import type {MyPluginPlugin} from './definitions';

export class MyPluginWeb extends WebPlugin implements MyPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: { latitude: number, longitude: number }): Promise<void> {
    console.log('openMap(): ', location)
  }
}
