interface EnrolledPath {
    pathId: number;
    pathName: string;
    imageUrl: string;
    noOfCourses: number;
    enrolledAt: string;
    completedAt: string | null;
    isAccessible: boolean;
    progress: number;
}

interface EnrolledPathsData {
    averageProgress: number;
    count: number;
    enrolledPaths: EnrolledPath[];
}
