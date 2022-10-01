import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/utility/snackbar/snackbar.component';
import { ExamService } from '../../exam.service';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./assignment-view.component.css']
})
export class ExamViewComponent implements OnInit{
  exam : any;
  private sub: any;
  public height = '100vh';

  constructor(private _snackBar: SnackBarService, private examService: ExamService, private router: Router, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params => {
      this.examService.getExams(params['id']).subscribe(resp => {
        this.exam = resp["exam"];
      });
    });
  }

  ngOnInit(): void {
  }

}
