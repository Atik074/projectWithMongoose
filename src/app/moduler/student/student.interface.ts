export type StudenUser = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNo: string;
  motherOccupation: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
};

export type Student = {
  id: string;
  name: StudenUser;
  age: number;
  gender: 'Male' | 'Female';
  dateOfBirth: string;
  email: string;
  contactNo?: string;
  emmergenceContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-';
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  studentActive: 'Active' | 'blocked';
};
