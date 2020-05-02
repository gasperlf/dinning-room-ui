import { Link } from 'src/app/shared/model/commons/link';

export interface SocialStratum {
    socialStratumId: number;
    socialStratumName: string;
    links: Link[]
}