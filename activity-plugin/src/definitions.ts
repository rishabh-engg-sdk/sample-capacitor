import type {PluginListenerHandle} from "@capacitor/core";

export interface ActivityData {
  activityName: string
}

export type OnActivityResumeCallback = (event: ActivityData) => void

export interface ActivityPlugin {

  registerForActivityCallbacks(): Promise<void>

  addListener(
    event: 'onActivityResumed',
    listenerFunc: OnActivityResumeCallback
  ): Promise<PluginListenerHandle> &PluginListenerHandle
}
