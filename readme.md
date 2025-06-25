# declastruct-aws-lambda

![test](https://github.com/ehmpathy/declastruct-aws-lambda/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/declastruct-aws-lambda/workflows/publish/badge.svg)

Declarative control of Aws Lambda constructs, via [declastruct](https://github.com/ehmpathy/declastruct).

Declare the structures you want. Plan to see the changes required. Apply to make it so 🪄


# install

```sh
npm install -s declastruct-aws-lambda
```

# use

### getLambdas

```ts
const lambdas = await getLambdas({ page: { limit: 10 } }, context);
console.log(lambdas);
expect(lambdas.length).toBeGreaterThan(0);
```

### getLambda

```ts
const lambda = await getLambda({ by: { unique: { name: 'svc-jokes-prep-get-joke' }} }, context);
console.log(lambda);
expect(lambda.name).toBe('svc-jokes-prep-get-joke')
expect(lambda.updatedAt).toBeDefined()
```

### setLambda

```ts

```
