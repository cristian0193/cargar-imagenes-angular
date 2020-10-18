import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeLocal'
})
export class RemoveLocalPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('http://localhost:4200','');
  }

}
