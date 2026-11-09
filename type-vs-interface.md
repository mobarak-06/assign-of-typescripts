# Type vs Interface in TypeScript: Key Differences and When to Use Each

## Introduction

TypeScript provides two ways to describe data structures: `type` aliases
and `interface`. They often look similar, especially when defining
objects, but they have different capabilities. Knowing when to use each
helps developers write clear, reusable, and maintainable code.

## Detailed Explanation

A **type alias** gives a name to any type. It can describe objects,
primitive values, unions, intersections, and tuples.

``` typescript
type User = {
  name: string;
  age: number;
};

type Status = "pending" | "completed" | "failed";
type Coordinate = [number, number];
```

An **interface** is mainly used to describe the shape of objects. It can
also define methods and be extended by other interfaces.

``` typescript
interface Person {
  name: string;
  email: string;
}

interface Admin extends Person {
  role: string;
}
```

Both can describe object structures, and both can be used with a class
through `implements`. However, interfaces support **declaration
merging**: multiple declarations with the same name are combined. Type
aliases do not support this.

``` typescript
interface Product {
  name: string;
}

interface Product {
  price: number;
}

// Product now has both name and price.
```

In practice, choose `interface` when defining object contracts that may
need extension or declaration merging. Choose `type` for unions, tuples,
primitive aliases, and combinations of different types. For ordinary
object shapes, either can work, so consistency across a project is
important.

## Conclusion

Neither option is always better. Use the feature that best expresses the
data you are modelling: interfaces are well suited to extensible object
structures, while type aliases are more flexible for other type
patterns. Understanding both makes TypeScript code easier to maintain.
