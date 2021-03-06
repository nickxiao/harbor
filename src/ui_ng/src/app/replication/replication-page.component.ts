// Copyright (c) 2017 VMware, Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'replicaton',
  templateUrl: 'replication-page.component.html'
})
export class ReplicationPageComponent implements OnInit {
  projectIdentify: string | number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectIdentify = +this.route.snapshot.parent.params['id'];
  }
}