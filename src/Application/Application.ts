import {LIST_OF_PAGES} from "@/Application/LIST_OF_PAGES"

export class Application {

  private _currentPageIndex: number

  private _ARRAY_OF_PAGES = [
    LIST_OF_PAGES.HOME,
    LIST_OF_PAGES.DESCRIPTION,
  ]

  constructor(startingPageIndex: number) {
    this._currentPageIndex = startingPageIndex
  }

  get currentPage(): LIST_OF_PAGES {
    return this._ARRAY_OF_PAGES[ this._currentPageIndex ]
  }

  get nextPage(): LIST_OF_PAGES {

    if (this._currentPageIndex + 1 < this._ARRAY_OF_PAGES.length) {
      this._currentPageIndex++
    }

    return this.currentPage
  }

  get previousPage(): LIST_OF_PAGES {

    if (this._currentPageIndex - 1 >= 0) {
      this._currentPageIndex--
    }

    return this.currentPage
  }
}
