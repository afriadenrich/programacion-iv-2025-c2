import { ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  log(message: unknown, context?: unknown, ...rest: unknown[]): void {
    // console.log(message);
    // console.log(context);
    // console.log(rest);
    super.log(message, context, ...rest);
  }
}
