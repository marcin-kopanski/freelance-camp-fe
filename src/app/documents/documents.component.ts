import { Component } from '@angular/core';

import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";

  documents: Document[] = [
    {
      title: "My first doc",
      description: "Description test",
      file_url: "http://via.placeholder.com/350x150",
      updated_at: "11/11/16",
      image_url: "http://via.placeholder.com/350x150"
    },
    {
      title: "My second doc",
      description: "Description test",
      file_url: "http://via.placeholder.com/350x150",
      updated_at: "11/11/16",
      image_url: "http://via.placeholder.com/350x150"
    },
    {
      title: "My third doc",
      description: "Description test",
      file_url: "http://via.placeholder.com/350x150",
      updated_at: "11/11/16",
      image_url: "http://via.placeholder.com/350x150"
    }
  ];
}
