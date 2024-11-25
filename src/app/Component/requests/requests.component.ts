import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
})
export class RequestsComponent implements OnInit {
  datalists: any;
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.fetchData().subscribe((responce) => {
      this.datalists = responce;
      console.log(responce);
    });
  }

}
