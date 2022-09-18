import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/utility/snackbar/snackbar.component';
import { AssignmentService } from '../../assignment.service';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.css']
})
export class AssignmentViewComponent implements OnInit{
  assignment : any;
  filePath = '';
  fileNameInFolder = '';
  private sub: any;

  constructor(private _snackBar: SnackBarService, private assignmentService: AssignmentService, private router: Router, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params => {
      this.assignmentService.getAssignment(params['id']).subscribe(resp => {
        this.assignment = resp["assignment"];
        this.fileNameInFolder = this.assignment.filePath.replace(/^.*[\\\/]/, '');
        this.filePath = `assets/${this.fileNameInFolder}`;
      });
    });
  }

  ngOnInit(): void {
  }

}