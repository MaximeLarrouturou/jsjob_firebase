import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { QuotesService } from './service/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSJobs';

  constructor(private authService: AuthService, private quotesServices: QuotesService) {}
    onQuoteCreated(quote){
      console.log('quote retrieved', quote);
      this.quotesServices.createQuote({
        firstname:quote.value.firstname,
        lastname: quote.value.lastname,
        text: quote.value.quote
      });
  }
}