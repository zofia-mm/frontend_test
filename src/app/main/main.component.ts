import { Component } from '@angular/core';
import { ArticleService } from '../data/article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent
{
  constructor( private articleService : ArticleService ) {}

  ArticleOptions = ArticleOptions;
  Object = Object;
  articleOption: ArticleOptions = ArticleOptions.First;

  showArticle() { console.log( this.articleOption ); }

  getArticles() { this.articleService.getArticles(); }
}

enum ArticleOptions { First = "pierwsza", Second = "druga", Random = "losowa" }
