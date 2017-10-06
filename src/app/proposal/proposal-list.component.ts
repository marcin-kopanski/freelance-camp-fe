import { Component } from '@angular/core';

import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  pageTitle: string = "Proposals Dashboard";

  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
  proposalTwo: Proposal = new Proposal(16, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');
  proposalThree: Proposal = new Proposal(17, 'QWE Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com');

  proposals: Proposal[] = [
    this.proposalOne, this.proposalTwo, this.proposalThree
  ]
}
