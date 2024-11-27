import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css',
})
export class AchievementComponent implements OnInit {

  listData:any[]  = [];
  constructor(private dataService: DataService){}
  imageUrl: String = 'assets/image/example.png';

  ngOnInit(): void {
    this.dataService.getAll().subscribe( 
      (data)=>{ 
        this.listData = data; 
        console.log('list data now : ',this.listData); // get data success
      },(err =>{
        console.log('Error ', err); // get data failed
      })
    )
  };


}
