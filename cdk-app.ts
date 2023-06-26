import { App, Stack, StackProps } from "aws-cdk-lib";
import { DefinitionBody, StateMachine } from "aws-cdk-lib/aws-stepfunctions";

import { stateMachine } from "./state-machine";

export class CdkStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new StateMachine(this, "MyStateMachine", {
      definitionBody: DefinitionBody.fromString(JSON.stringify(stateMachine)),
    });
  }
}

new CdkStack(new App(), "CdkStack");
