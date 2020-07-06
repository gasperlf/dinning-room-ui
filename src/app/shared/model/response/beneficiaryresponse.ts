import { Link } from 'src/app/shared/model/commons/link';
export interface BeneficiaryResponse {
    identifier:number,
    document: string,
    names: string,
    surNames: string,
    faceId:string
    links: Link[];
}