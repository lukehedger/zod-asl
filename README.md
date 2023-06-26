# zod-asl

An experiment in type-safe [ASL state machines](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-state-machine-structure.html).

## The problem

If you have ever defined an AWS Step Functions workflow using the AWS Cloud Development Kit (CDK) you will have felt the line between your business logic and your infrastructure code blurring.

With Lambda functions the distinction is obvious. Your business logic exists in your function's source code, the `handler` function in your .js or .ts files. The infrastructure definition to deploy that source code to the cloud exists in your CDK app `new lambda.Function({ code: path.to.src })`.

By writing your Step Functions state machines in CDK, you are forced to work very close to the underlying definition and its language - the Amazon States Language (ASL). This can make it difficult, or even impossible, to use the essential tools that are part of your usual Lambda-based development workflow - TypeScript, JSON Schema, NPM packages and so on.

The key to ergonomic, stable and safe Step Functions business logic is to abstract it away from CDK. You will still define and deploy the infrastructure via CDK but the logic will exist outside. You must move to a workflow similar to the way you author your Lambda functions, package them up and point your CDK infrastructure to the assets.

## The solution

The workflow logic can be defined using TypeScript and any packages you require. The workflow can be type-checked against the ASL state machine schema. The input to the state machine can be typed against a custom schema, as well as any task inputs and result selectors. Both the ASL schema and your custom schema can be defined using [zod](https://github.com/colinhacks/zod) for maximum power and portability.

The fully type-checked state machine defintion can then be imported into your CDK app, converted to a JSON string and then used in your StateMachine construct.

```typescript
import { stateMachine } from "./state-machine";

new StateMachine(this, "MyStateMachine", {
  definitionBody: DefinitionBody.fromString(JSON.stringify(stateMachine)),
});
```
