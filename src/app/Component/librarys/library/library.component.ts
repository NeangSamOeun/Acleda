import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';
// import { DataService } from '../Service/data.service';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent implements OnInit {
  categories = [
    {
      id: 1,
      RouterLinkActive: 'active',
      RouterLink: 'account',
      cources: 'Acounting',
    },
    {
      id: 2,
      RouterLinkActive: 'active',
      RouterLink: 'englishforbussiness',
      cources: 'English for Business Communicate',
    },
    {
      id: 3,
      RouterLinkActive: 'active',
      RouterLink: 'englishtranslation',
      cources: 'English for Translation and Interperting',
    },
    {
      id: 4,
      RouterLinkActive: 'active',
      RouterLink: 'teachingenglish',
      cources: 'Teaching English as a Foreign Language',
    },
    {
      id: 5,
      RouterLinkActive: 'active',
      RouterLink: 'bridgingcourse',
      cources: 'Bridging Course',
    },
    {
      id: 6,
      RouterLinkActive: 'active',
      RouterLink: 'english',
      cources: 'English',
    },
    {
      id: 7,
      RouterLinkActive: 'active',
      RouterLink: 'management',
      cources: 'Risk Management and Insurance',
    },
    {
      id: 8,
      RouterLinkActive: 'active',
      RouterLink: 'exportimport',
      cources: 'Export-Import Management',
    },
    {
      id: 9,
      RouterLinkActive: 'active',
      RouterLink: 'logistics',
      cources: 'Logistics',
    },
    
  ];
  
  libraryId: string = '2';
  // constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    //   this.libraryId = this.route.snapshot.paramMap.get('id')!;
    //   console.log('route navigate : '+this.libraryId);
  }

}
