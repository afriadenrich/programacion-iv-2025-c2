import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LowercasePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(metadata);

    return value.toLocaleLowerCase();
  }
}
