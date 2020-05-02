import { Page } from 'src/app/shared/model/commons/page';
import { Link } from 'src/app/shared/model/commons/link';
import { SocialStratum } from 'src/app/shared/model/entities/socialstratum';

export interface SocialStratumResponse {
    links: Link[];
    content: SocialStratum[];
    page: Page;
}