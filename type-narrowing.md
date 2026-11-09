# Type Narrowing in TypeScript

## Introduction

When a variable can hold more than one type, such as `string | number`, TypeScript only allows operations that are safe for every possible type. Type narrowing is the process of refining a broad type into a more specific one inside a block of code. It keeps your code safe without risky type assertions.

## Using `typeof`

Use `typeof` to check primitive types like `string`, `number`, and `boolean`.

```ts
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

Inside the `if`, TypeScript knows `value` is a string. After it, the value must be a number.

## Using `instanceof`

Use `instanceof` for classes and built-in objects such as `Date` or `Error`.

```ts
function toISO(input: string | Date) {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return new Date(input).toISOString();
}
```

This is also useful in `catch` blocks to confirm an error is an `Error` before reading its message.

## Using `in`

The `in` operator checks whether a property exists on an object, which makes it ideal for telling interfaces apart.

```ts
type Success = { data: string[] };
type Failure = { error: string };

function handle(res: Success | Failure) {
  if ("error" in res) {
    return res.error;
  }
  return res.data.join(", ");
}
```

Interfaces disappear at runtime, so `in` is often the best way to distinguish them.

## Conclusion

Type narrowing lets TypeScript understand your intent as the code runs. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes. Mastering these three tools makes working with union types simple, safe, and readable.