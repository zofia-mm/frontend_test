import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent
{
  ArticleOptions = ArticleOptions;
  Object = Object;
  articleOption: ArticleOptions = ArticleOptions.First;

  showArticle() { console.log( this.articleOption ); }
}

enum ArticleOptions { First = "pierwsza", Second = "druga", Random = "losowa" }
