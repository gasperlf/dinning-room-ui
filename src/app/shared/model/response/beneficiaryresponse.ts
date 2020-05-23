import { Link } from 'src/app/shared/model/commons/link';
export interface BeneficiaryResponse {
    document: string,
    names: string,
    surNames: string
    links: Link[];
}