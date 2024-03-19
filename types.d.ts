// import { IconType } from "react-icons";

type MenuItem = {
  title: string;
  address: string;
  Icon?: any;
};

type MovieItems = {
  results: {
    id?: number;
    title?: string;
    name?: string;
    original_name?: string;
    overview?: string;
    poster_path?: string;
    backdrop_path?: string,
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
  }[];
};
