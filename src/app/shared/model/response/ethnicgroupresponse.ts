import { Page } from './../commons/page';
import { Link } from './../commons/link';

import { EthnicGroup } from './../entities/ethnicgroup';

export interface EthnicGroupResponse{
    links:   Link[];
    content: EthnicGroup[];
    page:    Page;
}