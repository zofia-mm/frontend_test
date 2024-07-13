import { Component } from '@angular/core';
import { ArticleService } from '../data/article.service';
import { Article } from '../data/article';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent
{
  constructor( private articleService : ArticleService ) {}

  ArticleOptions = ArticleOptions;
  articleOption: ArticleOptions = ArticleOptions.First;

  articlesShown: Article[] = [];
  articlesShownIs: number[] = [];

  determineI( it: any[] ) {
    return this.articleOption == ArticleOptions.First ? 0
    : this.articleOption == ArticleOptions.Second ? 1
    : Math.floor( Math.random() * it.length );
  }

  replaceArticles()
  {
    this.articlesShown = [];
    this.articlesShownIs = [];

    this.articleService.getArticles().subscribe( it => { 
      const articleI = this.determineI( it );
      this.articlesShown.push( it[ articleI ] );
    } );
  }

  appendArticles()
  {
    this.articleService.getArticles().subscribe( it => {

      const articleI = this.determineI( it );

      console.log( articleI, this.articlesShownIs );
      if( this.articlesShownIs.includes( articleI ) ) {
        alert( 'cannot append - duplicate' );
        return;
      }
      this.articlesShownIs.push( articleI );

      this.articlesShown.push( it[ articleI ] );

      this.articlesShown = this.articlesShown
        .sort( (a, b) => ( a.content < b.content ? -1 : 1 ) );
      
    } );
  }
}

enum ArticleOptions { First = "pierwsza", Second = "druga", Random = "losowa" }
