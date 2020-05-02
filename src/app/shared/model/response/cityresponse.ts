import { Page } from 'src/app/shared/model/commons/page';
import { Link } from 'src/app/shared/model/commons/link';
import { City } from 'src/app/shared/model/entities/city';

export interface CityResponse {
    links:   Link[];
    content: City[];
    page:    Page;
}