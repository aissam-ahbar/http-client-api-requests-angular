# HTTP Client to make HTTP requests

HTTP Client to make API request, communicate with your backend or any third party backend.

```
------------------
# app.module.ts
-----------------
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Import HTTP Client Module to make API calls
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```
--------------------
# app.component.ts
--------------------
export class AppComponent implements OnInit {
  public result: Observable<any> = of({});

  // Inject service using dependency injection
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // Make the API request
    this.result = this.httpClient.get(URL);
  }
}
```

```
--------------------
# app.component.html
--------------------
{{ result | async | json }}
```
