import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{
  constructor( private http : HttpClient ) {}
  private fileUrl = 'assets/articles.json';

  getArticles() {
    this.http.get( this.fileUrl ).subscribe( it => {
      console.log( it );
    } );
  }
}
