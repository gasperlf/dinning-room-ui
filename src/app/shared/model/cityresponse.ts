import { Page } from 'src/app/shared/model/page';
import { City } from 'src/app/shared/model/city';
import { Link } from 'src/app/shared/model/link';

export interface CityResponse {
    links:   Link[];
    content: City[];
    page:    Page;
}