import { Neighborhood } from 'src/app/shared/model/entities/neighborhood';
import { Page } from 'src/app/shared/model/commons/page';
import { Link } from 'src/app/shared/model/commons/link';

export interface NeighborhoodResponse {
    links:   Link[];
    content: Neighborhood[];
    page:    Page;
}