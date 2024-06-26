import TMDB_ERRORS from '../constants/tmdbErrors';
import { $, appendChildren } from '../utils/domUtils';

class DomController {
  public static state = {
    $listTitle: <HTMLHeadingElement>{},
    $movieList: <HTMLUListElement>{},
    $movieListSkeleton: <HTMLUListElement>{}
  };

  /* Dom 로딩 후 반드시 초기화 한다. */
  public static initController() {
    this.state.$listTitle = $<HTMLHeadingElement>('.item-view h2')!;
    this.state.$movieList = $<HTMLUListElement>('.item-list')!;
    this.state.$movieListSkeleton = $<HTMLUListElement>('.item-list.skeleton')!;
  }

  public static updateListTitle(query: string) {
    this.state.$listTitle.textContent = `"${query}" 검색 결과`;
  }

  public static printErrorMessage(statusCode: number) {
    const error = TMDB_ERRORS[statusCode];
    this.state.$listTitle.textContent = `[Error ${error.httpStatus}] ${error.message}`;
  }

  public static printMovieNotFoundMessage(query: string = '') {
    if (query) {
      this.state.$listTitle.textContent = `"${query}"에 대한 검색 결과가 없습니다.`;
    } else {
      this.state.$listTitle.textContent = '조회 결과가 없습니다.';
    }
  }

  public static renderMovieItems(movieItems: HTMLLIElement[]) {
    appendChildren(this.state.$movieList, movieItems);
  }

  public static hideMovieListSkeleton() {
    this.state.$movieListSkeleton.classList.add('hidden');
  }

  public static showMovieListSkeleton() {
    this.state.$movieListSkeleton.classList.remove('hidden');
  }
}

export default DomController;
