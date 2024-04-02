import * as UploadActions from './imageUpload.actions';

describe('Upload Actions', () => {
  it('should create the uploadImage action', () => {
    const file: File = new File(['sample content'], 'sample.jpg', { type: 'image/jpeg' });
    const action = UploadActions.uploadImage({ file });
    expect(action.type).toEqual('[Upload] Upload Image');
    expect(action.file).toEqual(file);
  });

  it('should create the uploadImageSuccess action', () => {
    const imageUrl = 'https://example.com/sample_image.jpg';
    const action = UploadActions.uploadImageSuccess({ imageUrl });
    expect(action.type).toEqual('[Upload] Upload Image Success');
    expect(action.imageUrl).toEqual(imageUrl);
  });

  it('should create the uploadImageFailure action', () => {
    const error = 'Error message';
    const action = UploadActions.uploadImageFailure({ error });
    expect(action.type).toEqual('[Upload] Upload Image Failure');
    expect(action.error).toEqual(error);
  });

  it('should create the resetUploadState action', () => {
    const action = UploadActions.resetUploadState();
    expect(action.type).toEqual('[Upload] Reset Upload State');
  });
});
