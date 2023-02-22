# calculate-plugin

Mathematical Calculation Related

## Install

```bash
npm install activity-plugin
npx cap sync
```

## API

<docgen-index>

* [`calculate(...)`](#calculate)
* [`addListener('onCalculate', ...)`](#addlisteneroncalculate)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### calculate(...)

```typescript
calculate(calculateData: CalculateData) => Promise<void>
```

| Param               | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| **`calculateData`** | <code><a href="#calculatedata">CalculateData</a></code> |

--------------------


### addListener('onCalculate', ...)

```typescript
addListener(event: 'onCalculate', listenerFunc: OnCalculateEventCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`event`**        | <code>'onCalculate'</code>                                                    |
| **`listenerFunc`** | <code><a href="#oncalculateeventcallback">OnCalculateEventCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### CalculateData

| Prop           | Type                                          |
| -------------- | --------------------------------------------- |
| **`operator`** | <code><a href="#operator">Operator</a></code> |
| **`operand`**  | <code>{ a: number; b: number; }</code>        |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### CalculateEventData

| Prop                | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| **`calculateData`** | <code><a href="#calculatedata">CalculateData</a></code> |
| **`result`**        | <code>number</code>                                     |


### Type Aliases


#### OnCalculateEventCallback

<code>(calculateEventData: <a href="#calculateeventdata">CalculateEventData</a>): void</code>


### Enums


#### Operator

| Members        |
| -------------- |
| **`ADD`**      |
| **`SUBTRACT`** |
| **`MULTIPLY`** |
| **`DIVISION`** |

</docgen-api>
