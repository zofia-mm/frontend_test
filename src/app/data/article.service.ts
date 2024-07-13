import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{
  constructor( private http : HttpClient ) {}
  private fileUrl = 'assets/articles.json';

  getArticles() {
    return this.http.get<Article[]>( this.fileUrl );
  }
}
