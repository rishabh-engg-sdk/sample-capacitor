# activity-plugin

Activity Related

## Install

```bash
npm install activity-plugin
npx cap sync
```

## API

<docgen-index>

* [`registerForActivityCallbacks()`](#registerforactivitycallbacks)
* [`addListener('onActivityCreated', ...)`](#addlisteneronactivitycreated)
* [`addListener('onActivityStarted', ...)`](#addlisteneronactivitystarted)
* [`addListener('onActivityResumed', ...)`](#addlisteneronactivityresumed)
* [`addListener('onActivityPaused', ...)`](#addlisteneronactivitypaused)
* [`addListener('onActivityStopped', ...)`](#addlisteneronactivitystopped)
* [`addListener('onActivitySaveInstanceState', ...)`](#addlisteneronactivitysaveinstancestate)
* [`addListener('onActivityDestroyed', ...)`](#addlisteneronactivitydestroyed)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerForActivityCallbacks()

```typescript
registerForActivityCallbacks() => Promise<void>
```

--------------------


### addListener('onActivityCreated', ...)

```typescript
addListener(event: 'onActivityCreated', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityCreated'</code>                                              |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivityStarted', ...)

```typescript
addListener(event: 'onActivityStarted', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityStarted'</code>                                              |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivityResumed', ...)

```typescript
addListener(event: 'onActivityResumed', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityResumed'</code>                                              |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivityPaused', ...)

```typescript
addListener(event: 'onActivityPaused', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityPaused'</code>                                               |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivityStopped', ...)

```typescript
addListener(event: 'onActivityStopped', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityStopped'</code>                                              |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivitySaveInstanceState', ...)

```typescript
addListener(event: 'onActivitySaveInstanceState', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivitySaveInstanceState'</code>                                    |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onActivityDestroyed', ...)

```typescript
addListener(event: 'onActivityDestroyed', listenerFunc: OnActivityResumeCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onActivityDestroyed'</code>                                            |
| **`listenerFunc`** | <code><a href="#onactivityresumecallback">OnActivityResumeCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### ActivityData

| Prop               | Type                |
| ------------------ | ------------------- |
| **`activityName`** | <code>string</code> |


### Type Aliases


#### OnActivityResumeCallback

<code>(event: <a href="#activitydata">ActivityData</a>): void</code>

</docgen-api>
