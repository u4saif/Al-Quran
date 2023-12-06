import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appAudioPlayer]',
})
export class AudioPlayerDirective {
  @Input() audioPlayList: any;
  @Output() nextAyatPlayed: EventEmitter<any> = new EventEmitter();

  @HostListener('ended') play() {
    // this.el.nativeElement.src =
    //   'https://cdn.islamic.network/quran/audio/64/ur.khan/3.mp3';

    let current = this.audioPlayList.ayahs.find(
      (item: any) => item.audio == this.el.nativeElement.src
    );

    console.log('🚀 ~ file: audio', current);
    if (this.audioPlayList.ayahs[current.numberInSurah])
      this.nextAyatPlayed.emit(this.audioPlayList.ayahs[current.numberInSurah]);
  }
  constructor(private el: ElementRef) {}
}
