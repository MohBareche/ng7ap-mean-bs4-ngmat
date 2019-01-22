import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from 'src/app/services/issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private issueService: IssueService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: ['', Validators.required],
      description: ['', Validators.required],
      severity: ['', Validators.required]
    });
  }

  addIssue(title, responsible, description, severity) {
    this.issueService
      .addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

  ngOnInit() {}
}
