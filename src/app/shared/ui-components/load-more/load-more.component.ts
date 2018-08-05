import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  @Output() loadMore = new EventEmitter<void>();

  handleClick(): void {
    this.loadMore.emit();
  }
}
