import * as TrainersPathActions from './trainerspath.actions';
import { Path } from 'src/app/models/Path';

describe('Trainers Path Actions', () => {
  it('should handle Load Trainers Path Action', () => {
    const action = TrainersPathActions.loadTrainersPaths({pageNo: 2});
    expect(action.type).toEqual('[Trainers Paths] Load Paths');
  });

  it('should handle Load Trainers Path Action Success', () => {
    const paths : Path[] = [{
      id: 1,
      name: "Sample Path",
      pathName: "sample_path",
      imageUrl: "https://example.com/sample_image.jpg",
      isAccessible: true,
      noOfCourses: 5,
      progress: 0,
      completedAt: null,
    }
    ];
    const action = TrainersPathActions.loadTrainersPathsSuccess({paths});
    expect(action.type).toEqual('[Trainers Paths] Load Paths Success');
    expect(action.paths).toEqual(paths);
  });

  it('should handle Load Trainers Path Actions Failed', () => {
    const error = 'Error Message';
    const action = TrainersPathActions.loadTrainersPathsFailure({error});
    expect(action.type).toEqual('[Trainers Paths] Load Paths Failure');
    expect(action.error).toEqual(error);
  });
})