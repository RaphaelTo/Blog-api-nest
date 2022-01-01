import { Injectable } from '@nestjs/common';
import { code } from '../constants/code';

@Injectable()
export class UtilsService {
  generateKey(): string {
    return `${this.randomCharacterFromArray(
      code,
    )}${this.randomCharacterFromArray(code)}${this.randomCharacterFromArray(
      code,
    )}${this.randomCharacterFromArray(code)}`;
  }

  randomCharacterFromArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }
}
