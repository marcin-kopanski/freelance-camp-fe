import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ProposalService } from './proposal.service';

import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [
    ProposalService
  ]
})
export class ProposalNewComponent {
  pageTitle: string = "Proposal New";
  proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal) {
    this.submitted = true;

    this.proposalService.postProposal(proposal)
      .subscribe(data => { return true; },
        error => {console.log("Error saving proposal");
          this.submitted = false;
          return Observable.throw(error);
        });
  }
}
