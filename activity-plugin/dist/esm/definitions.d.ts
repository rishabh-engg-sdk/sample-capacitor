import type { PluginListenerHandle } from "@capacitor/core";
export declare enum Operator {
    ADD = 0,
    SUBTRACT = 1,
    MULTIPLY = 2,
    DIVISION = 3
}
export interface ActivityData {
    activityName: string;
}
export interface CalculateEventData {
    calculateData: CalculateData;
    result: number;
}
export interface CalculateData {
    operator: Operator;
    operand: {
        a: number;
        b: number;
    };
}
export declare type OnActivityEventCallback = (event: ActivityData) => void;
export declare type OnCalculateEventCallback = (calculateEventData: CalculateEventData) => void;
export interface ActivityPlugin {
    /**
     * Register for activity lifecycle callback.
     */
    registerForActivityCallbacks(): Promise<void>;
    addListener(event: 'onActivityCreated', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityStarted', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityResumed', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityPaused', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityStopped', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivitySaveInstanceState', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(event: 'onActivityDestroyed', listenerFunc: OnActivityEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
}
export interface CalculatePlugin {
    calculate(calculateData: CalculateData): Promise<void>;
    addListener(event: 'onCalculate', listenerFunc: OnCalculateEventCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
}
