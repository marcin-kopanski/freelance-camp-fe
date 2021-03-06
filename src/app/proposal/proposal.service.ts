import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = "https://my-rails-marcin-kopanski.c9users.io:8082/proposals";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http
  ) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl + ".json")
      .map((response: Response) => <Proposal[]> response.json())
      .catch(this.handleError);
  }

  getProposal(id:number) {
    return this.http.get(this.proposalsUrl + "/" + id + ".json");
  }

  postProposal(proposal) {
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers: this.headers })
      .map((res: Response) => res.json());
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
