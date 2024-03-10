import { Injectable } from '@angular/core';
import { Paths } from '../types/Paths';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
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
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
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
  getData() {
    return this.allPaths;
  }
}
