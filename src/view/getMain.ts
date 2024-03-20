import { appendChildren } from '../utils/domUtil';
import getButton from './getButton';

interface IMovieItemProps {
  image: string;
  title: string;
  score: number;
}

const state = {
  image: 'https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg',
  title: 'hihi',
  score: 6.5,
};

function getImage(props: IMovieItemProps) {
  const img = document.createElement('img');
  img.alt = props.title;
  img.src = props.image;
  img.loading = 'lazy';
  return img;
}

function getTitleParagraph(title: string) {
  const movieTitle = document.createElement('p');
  movieTitle.innerText = title;
  return movieTitle;
}

function getScoreParagraph(score: number) {
  const movieScore = document.createElement('p');
  movieScore.innerText = String(score);
  return movieScore;
}

function getMovieItem(props: IMovieItemProps) {
  const movieItem = document.createElement('li');
  const movieItemLink = document.createElement('a');
  const movieItemCard = document.createElement('div');
  const movieItemImage = getImage(props);

  movieItemCard.classList.add('item-card');
  movieItemLink.appendChild(movieItemCard);
  appendChildren(movieItemCard, [movieItemImage, getTitleParagraph(props.title), getScoreParagraph(props.score)]);
  movieItem.appendChild(movieItemLink);

  return movieItem;
}

function getMovieListContainer(listTitle: string) {
  const movieListContainer = document.createElement('section');
  const popularTitle = document.createElement('h2');
  const movieList = document.createElement('ul');

  movieListContainer.classList.add('item-view');
  popularTitle.innerText = listTitle;
  movieList.classList.add('item-list');

  // TODO: fetch로 리팩토링
  const movies = Array.from({ length: 20 }, () => getMovieItem(state)) as HTMLElement[];
  movies.forEach((movieItem) => {
    movieList.append(movieItem);
  });

  appendChildren(movieListContainer, [popularTitle, movieList]);
  movieListContainer.appendChild(getButton());

  return movieListContainer;
}

function getMain() {
  const mainTag = document.createElement('main');
  const movieListContainer = getMovieListContainer('지금 인기 있는 영화');

  mainTag.appendChild(movieListContainer);

  return mainTag;
}

export default getMain;
