import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  StudenUser,
  Student,
} from './student.interface';

const userSchema = new Schema<StudenUser>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userSchema,
  age: { type: Number, required: true },
  gender: ['Female', 'Male'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emmergenceContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: [
    'A',
    'B',
    'AB',
    'O',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ],
  guardian: guardianSchema,

  localGuardian: localGuardianSchema,
  profileImg: { type: String, required: true },
  studentActive: ['Active', 'blocked'],
});

//create a model
export const StudentModel = model<Student>('student', studentSchema);
