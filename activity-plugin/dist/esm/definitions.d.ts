import type { PluginListenerHandle } from "@capacitor/core";
export interface ActivityData {
    activityName: string;
}
export declare type OnActivityResumeCallback = (event: ActivityData) => void;
export interface ActivityPlugin {
    registerForActivityCallbacks(): Promise<void>;
    addListener(event: 'onActivityCreated', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityStarted', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityResumed', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityPaused', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityStopped', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivitySaveInstanceState', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityDestroyed', listenerFunc: OnActivityResumeCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
}
