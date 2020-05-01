import { Page } from 'src/app/shared/model/page';
import { Department } from 'src/app/shared/model/department';
import { Link } from 'src/app/shared/model/link';

export interface DepartmentResponse {
    links:   Link[];
    content: Department[];
    page:    Page;
}

