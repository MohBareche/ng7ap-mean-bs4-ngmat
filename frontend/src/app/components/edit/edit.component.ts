import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(issueService: IssueService) {}

  ngOnInit() {}
}
