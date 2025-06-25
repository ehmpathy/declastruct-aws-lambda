import { Procedure, ProcedureContext } from 'domain-glossary-procedure';
import { VisualogicContext, withLogTrail } from 'visualogic';

import { getCallerFileName } from './getCallerFileName';

type WithVisualogicContext<T extends Procedure> =
  ProcedureContext<T> extends VisualogicContext ? T : never;

/**
 * .what = declares a javascript:function to be a procedure
 *
 * .todo =
 *   - extract name from caller fn by default
 *   - withWrappers by default
 */
export const asProcedure = <TProcedure extends Procedure>(
  logic: WithVisualogicContext<TProcedure>,
): TProcedure => {
  const callerFileName = getCallerFileName();
  const inferredProcedureName = callerFileName
    ?.split('/')
    .slice(-1)[0]
    ?.replace(/\.ts$/, '');
  return withLogTrail(logic, { name: inferredProcedureName }) as TProcedure;
};
