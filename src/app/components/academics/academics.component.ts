import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {

  academicType:string | null = null;

  constructor(private route:ActivatedRoute){
    alert("Calling Academics")
  }

  ngOnInit(){
      // Access the route parameter 'academicType'
      this.route.paramMap.subscribe(params => {
        this.academicType = params.get('academicType');
      });
  }
}
