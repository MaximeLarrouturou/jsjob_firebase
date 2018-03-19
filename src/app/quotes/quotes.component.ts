import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'cc-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$;

  constructor(private afDb: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit() {
    this.quotes$ = this.afDb.list('quotes').valueChanges();
  }

}
