import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_IMAGE_PATH } from '../utils/constants';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string,): string {
    if(!value.trim()){
      return DEFAULT_IMAGE_PATH;
    }
    return value;
  }

}
