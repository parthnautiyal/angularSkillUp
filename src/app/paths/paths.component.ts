import { Component, OnInit } from '@angular/core';
import { Paths } from '../types/Paths';
@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.sass']
})
export class PathsComponent implements OnInit {
  allPaths: Paths[] = [
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
