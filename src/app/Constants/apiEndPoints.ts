export const apiEndPoints = {
  batches: {
    base: 'student/batches/',
    getallBatch: 'all',
    getPathById: 'paths',
    getTrainersById: 'trainers',
    getStudentsById: 'students',
  },
  courses: {
    base: 'students',
    getallCourses: '/courses',
    getnoOfEnrolledCourses: '/no-of-enrolled-courses',
    getenrolledCourses: '/enrolled-courses',
    getchapters: '/chapters',
  },
  paths: {
    base: 'students',
    getAllPaths: '/paths',
    getEnrolledPaths: '/enrolled-paths',
    getNoOfEnrolledPaths: '/no-of-enrolled-paths',
  },
};
