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
* [`addListener('onActivityResumed', ...)`](#addlisteneronactivityresumed)
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
