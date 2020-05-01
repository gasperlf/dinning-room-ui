import { Neighborhood } from './neighborhood';
import { Page } from './page';
import { Link } from './link';

export interface NeighborhoodResponse {
    links:   Link[];
    content: Neighborhood[];
    page:    Page;
}