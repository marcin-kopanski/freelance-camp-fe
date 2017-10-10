import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DocumentService } from './document.service';

import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [
    DocumentService
  ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";

  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      );
  }
}
