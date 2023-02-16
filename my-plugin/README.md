# my-plugin

First Plugin

## Install

```bash
npm install my-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openMap(...)`](#openmap)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openMap(...)

```typescript
openMap(location: { latitude: number; longitude: number; }) => Promise<void>
```

| Param          | Type                                                  |
| -------------- | ----------------------------------------------------- |
| **`location`** | <code>{ latitude: number; longitude: number; }</code> |

--------------------

</docgen-api>

# sample-capacitor
