import { Page } from './../commons/page';
import { Link } from './../commons/link';

import { Grade } from './../entities/grade';


export interface GradeResponse{
    links:   Link[];
    content: Grade[];
    page:    Page;
}