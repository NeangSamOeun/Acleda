import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { HumanitiesComponent } from '../humanities/humanities.component';
import { MathematicsComponent } from '../mathematics/mathematics.component';
import { SocialSciencesComponent } from '../social-sciences/social-sciences.component';
import { BusinessComponent } from '../business/business.component';
import { ComputerScienceComponent } from '../computer-science/computer-science.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  @ViewChild('fieldContainer', { read: ViewContainerRef, static: true })
  fieldContainer!: ViewContainerRef;

  major = [
    { id: 1, label: 'Engineering and Technology' },
    { id: 2, label: 'Science and Mathematics' },
    { id: 3, label: 'Business and Economics' },
    { id: 4, label: 'Arts and Humanities' },
    { id: 5, label: 'Social Sciences' },
    { id: 6, label: 'Education' },
  ];

  constructor(private resoler: ComponentFactoryResolver) {}
  ngOnInit(): void {
    this.loadComponent({ target: { value: '1' } });
  }

  loadComponent(type: any): void {
    const selectedId = type.target.value;
    let factory;

    console.log('type :', type.target.value);
    this.fieldContainer.clear();

    if (selectedId === '1') {
      factory = this.resoler.resolveComponentFactory(ComputerScienceComponent);
    } else if (selectedId === '2') {
      factory = this.resoler.resolveComponentFactory(MathematicsComponent);
    } else if (selectedId === '3') {
      factory = this.resoler.resolveComponentFactory(BusinessComponent);
    } else if (selectedId === '4') {
      factory = this.resoler.resolveComponentFactory(HumanitiesComponent);
    } else if (selectedId === '5') {
      factory = this.resoler.resolveComponentFactory(SocialSciencesComponent);
    } else {
      factory = this.resoler.resolveComponentFactory(EducationComponent);
    }

    if (factory) {
      this.fieldContainer.createComponent(factory);
    }


  }

}
