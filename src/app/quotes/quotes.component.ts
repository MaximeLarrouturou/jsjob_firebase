import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'cc-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }

}
