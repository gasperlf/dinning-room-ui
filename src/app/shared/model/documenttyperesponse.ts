import { Page } from 'src/app/shared/model/page';
import { Link } from 'src/app/shared/model/link';
import { DocumentType } from 'src/app/shared/model/documentType';

export interface DocumentTypeResponse {
    links:   Link[];
    content: DocumentType[];
    page:    Page;
}