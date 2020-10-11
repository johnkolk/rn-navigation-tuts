export interface IFilmItem {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  url: string;
}
