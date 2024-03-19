export interface Batch {
    id: number;
    name: string;
    createdBy: {
        id: number;
        name: string;
        imageUrl: string;
        email: string;
    };
    createdAt: string;
    endDate: string;
    streamName: string;
    noOfTrainers: number;
    noOfStudents: number;
    noOfPaths: number;
    isAccessible: boolean;
}

export interface BatchList {
    data: Batch[];
}