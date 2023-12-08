import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ height: 0})),
  transition(':enter,:leave', animate(2500)),
]);