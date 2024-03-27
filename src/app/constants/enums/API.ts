export enum API {
  BASE_URL = 'https://api.training.zopsmart.com',
  // BASE_URL = 'https://staging.api.training.zopsmart.com',
  STUDENTS = '/students',
  STUDENT = '/student',
  BATCHES = '/batches/',
  BATCHES_ALL = '/batches/all',
  COURSES = '/courses',
  COURSES_ALL = '/courses?pageSize=50&pageNo=1',
  NO_OF_ENROLLED_COURSES = '/no-of-enrolled-courses',
  ENROLLED_COURSES = '/enrolled-courses',
  ENROLLED_PATHS = '/enrolled-paths',
  ENROLLED_BATCHES = '/enrolled-batches',
  NO_OF_ENROLLED_PATHS = '/no-of-enrolled-paths',
  PATHS = '/paths',
  PATH_DATA = '?projection=course',
  PATHS_FEW = '?pageSize=10&pageNo=1',
  PATHS_ALL = '?pageSize=12&pageNo=1',
  PAGE_SIZE = '?pageSize=100&pageNo=1',
  TRAINERS = '/trainers',
  CHAPTERS = '/chapters',
  LOGIN = '/login',
  REFRESH = '/refresh',
  FAVOURITES = '/favourites',
  CURRENT_USER = '/332',
}
