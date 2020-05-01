import { Link } from './link';
export interface City {
    id: number;
    name: string;
    code: string;
    departmentId: number,
    links: Link[]
}