import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-couses',
  templateUrl: './couses.component.html',
  styleUrls: ['./couses.component.scss']
})
export class CousesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['category','name']



  constructor(private cousesService: CoursesService){
   // this.cousesService= new CoursesService;
   this.courses$ = this.cousesService.list()
   .pipe(
      catchError(erro=>{
        console.log(erro)
        return of([])
      })
   );
  }
  ngOnInit() : void{


  }
}
