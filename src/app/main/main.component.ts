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

  private ALERT__NO_ARTICLES_LEFT = "Nie ma więcej nowych artykułów.";
  private ALERT__THIS_ARTICLE_PRESENT = "Ten artykuł już został wybrany."; 

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
      this.articlesShownIs.push( articleI );
    } );
  }

  appendArticles()
  {
    this.articleService.getArticles().subscribe( it => {

      console.log( this.articlesShownIs )
      if(( this.articleOption == ArticleOptions.First && this.articlesShownIs.includes( 0 ) )
      || ( this.articleOption == ArticleOptions.Second && this.articlesShownIs.includes( 1 ) ) ) {
        alert( this.ALERT__THIS_ARTICLE_PRESENT );
        return;
      }

      if( this.articlesShownIs.length == 6 ) {
        alert( this.ALERT__NO_ARTICLES_LEFT );
        return;
      }

      var articleI = this.determineI( it );
      while( this.articlesShownIs.includes( articleI ) ) {
        articleI = this.determineI( it )
      }

      this.articlesShownIs.push( articleI );
      this.articlesShown.push( it[ articleI ] );

      this.articlesShown = this.articlesShown
        .sort( (a, b) => ( a.content < b.content ? -1 : 1 ) );
      
    } );
  }
}

enum ArticleOptions { First = "pierwsza", Second = "druga", Random = "losowa" }
