import { Component, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { JobService } from './job-service';
import { Job } from './job';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, JobService]
})
export class AppComponent {
  title = 'duckhacks-test';
  items: MenuItem[];
  options: any;
  overlays: any[];
  data: any;
  dataPie: any;
  jobs: Job[];

  constructor(private messageService: MessageService, private jobService: JobService) {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#4bc0c0'
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: '#565656'
              }
          ]
      }
      this.dataPie = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
  }

  selectData(event) {
      this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
      this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 14
      };
      this.overlays = [
        new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
        new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
        new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
    ];
    this.jobService.getJobsSmall().then(jobs => this.jobs = jobs);
  }
}
