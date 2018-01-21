import { Quote } from "../data/quotes.interface";

export class QuotesService {
  private favouriteQuotes: Quote[] = [];

  addQuoteFavourites(quote: Quote) {
    this.favouriteQuotes.push(quote);
  }

  removeQuoteFavourite(quote: Quote) {
    const position = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.favouriteQuotes.splice(position, 1);
  }

  getFavouriteQuotes() {
    return this.favouriteQuotes.slice();
  }
}
