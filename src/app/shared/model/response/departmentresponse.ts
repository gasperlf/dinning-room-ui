import { Page } from 'src/app/shared/model/commons/page';
import { Link } from 'src/app/shared/model/commons/link';
import { Department } from 'src/app/shared/model/entities/department';


export interface DepartmentResponse {
    links:   Link[];
    content: Department[];
    page:    Page;
}

