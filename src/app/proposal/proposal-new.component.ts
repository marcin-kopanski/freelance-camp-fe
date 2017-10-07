import { Component } from '@angular/core';

import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html'
})
export class ProposalNewComponent {
  pageTitle: string = "Proposal New";
  proposal = new Proposal;

}
