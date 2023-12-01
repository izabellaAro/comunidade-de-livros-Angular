import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoresGenero'
})
export class AutoresGeneroPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Romance': return 'favorite';
      case 'Narrativa pessoal': return 'record_voice_over';
      case 'Fantasia': return 'visibility';
    }
    return 'digital_wellbeing';
  }
}
