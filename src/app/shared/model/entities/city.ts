import { Link } from 'src/app/shared/model/commons/link';
export interface City {
    id: number;
    name: string;
    code: string;
    departmentId: number,
    links: Link[]
}