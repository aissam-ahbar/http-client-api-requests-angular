import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public result: Observable<any> = of({});

  /**
   * Inject HTTP Client in your component using Dependency Injection (DI)
   */
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    //this.result = this.httpClient.get(URL);
  }
}
