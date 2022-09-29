import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user/user.service';
import { environment } from 'src/environments/environment';
import { SnackBarService } from '../../utility/snackbar/snackbar.component';
import { GradesService } from '../grades.service';
@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent implements OnInit {
  CGPA = 0;
  gradesarr: any[] = [];
  subjectList: any[] = [];
  isGradeVisible = false;
  constructor(private _snackBar: SnackBarService, private gradeservice: GradesService, private toastr: ToastrService, private userService: UserService, private router: Router) {
    this.gradeservice.getSubject().subscribe((resp: any) => {
      try {
        this.subjectList = JSON.parse(resp["subject"]);

        for (let idx = 0; idx < this.subjectList.length; idx++) {
          let grades = {
            subject: this.subjectList[idx],
            marks: 0,
          }
          this.gradesarr.push(grades);

        }
      }
      catch (err) {
        this._snackBar.openSnackBar('Unable to load categories.', 'X')
      }
    }, err => {
      this._snackBar.openSnackBar('Unable to load categories.', 'X')
    });


  }

  ngOnInit(): void {
  }
  handleSubmit() {
    this.calculateGrade();
    if (this.CGPA > 0) {
      this.isGradeVisible = true;
    }
  }
  calculateGrade() {
    let total = 0;
    let totalSubjects = this.subjectList.length;
    for (let i = 0; i < totalSubjects; i++) {
      total += this.gradesarr[i].marks;
    }
    const percentage = (total / (totalSubjects * 100)) * 100;
    this.CGPA = percentage / 9.5;
    // console.log(this.CGPA);
  }
  handleSubmitSave() {
    console.log("Saved")
    let data = {
      CGPA: this.CGPA,
      subjects: [{}]
    }
    data.subjects.pop();
    for (let idx = 0; idx < this.gradesarr.length; idx++) {
      let subjectId = this.gradesarr[idx].subject._id;
      let marks = this.gradesarr[idx].marks;
      let credit=this.gradesarr[idx].subject.credit;
      const curr = { subjectId: subjectId, marks: marks,credit:credit };
      data.subjects.push(curr);
    }
    this.gradeservice.saveGrades(data).subscribe(resp => {
      this._snackBar.openSnackBar('Grade Saved.', 'X');
      this.router.navigate(['/dashboard']);
    }, err => {
      this._snackBar.openSnackBar(err.error.error, 'X')
    });
    console.log(data);
  }
  reset() {
    this.isGradeVisible = false;
    for (let idx = 0; idx < this.gradesarr.length; idx++) {
      this.gradesarr[idx].marks = 0;
    }
  }


}
