import { Link } from './link';
export interface Neighborhood {
    id: number
    code: string;
    name: string;
    commune: string;
    cityId: number;
    links: Link[];
}