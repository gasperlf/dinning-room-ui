import { Page } from 'src/app/shared/model/commons/page';
import { Link } from 'src/app/shared/model/commons/link';
import { DocumentType } from 'src/app/shared/model/entities/documentType';

export interface DocumentTypeResponse {
    links:   Link[];
    content: DocumentType[];
    page:    Page;
}