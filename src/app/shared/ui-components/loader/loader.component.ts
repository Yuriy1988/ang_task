import { Component, OnInit } from '@angular/core';
import { HttpStatusService } from '../../../core/http-status-service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean>;
  constructor(private httpStatus: HttpStatusService) { }

  ngOnInit() {
    this.isLoading = this.httpStatus.getRequestingStatus();
  }
}
