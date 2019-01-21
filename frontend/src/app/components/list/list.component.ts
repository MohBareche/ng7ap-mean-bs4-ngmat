import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe(issues => {
      console.log(issues);
    });
  }
}
