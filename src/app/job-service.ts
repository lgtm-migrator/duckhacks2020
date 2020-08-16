import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Job } from './job';

@Injectable()
export class JobService {

    constructor(private http: HttpClient) { }

    getJobsSmall() {
        return this.http.get<any>('assets/jobs-small.json')
        .toPromise()
        .then(res => <Job[]>res.data)
        .then(data => { return data; });
    }
}