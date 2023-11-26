import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  StudenUser,
  Student,
} from './student.interface';

const userSchema = new Schema<StudenUser>({
  firstName: { 
    type: String, 
    required: [true, 'first name is required']
   },
  middleName: { type: String },
  lastName: { 
    type: String ,
    required : [true, 'first name is required']
   },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'father name is required']
  },
  fatherContactNo: {
    type: String,
    required: [true, 'father contact is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'father occupation name is required']
  },
  motherName: {
    type: String,
    required: [true, 'mother name is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'mother contact  is required']
  },
  motherOccupation: {
    type: String,
    required: [true, 'mother occupation name is required']
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required:[true, 'local guardian name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'local guardian occupation is required']
  },
  address: {
    type: String,
    required: [true, 'local guardian address is required']
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String , required:true , unique:true},
  name: {
    type:userSchema ,
    required:true
  },
  age: { type: Number },
  gender: {
    type:String ,
    enum: {
      values: ['Female', 'Male' , 'other'] ,
      message: '{VALUE} is not match'
    } ,
    required:true
  

  },
  dateOfBirth: { 
    type: String
  },
  email: { type: String, required:true ,unique:true },
  contactNo: { type: String, required:true },
  emmergenceContactNo: { type: String, required:true },
  presentAddress:{ type: String, required:true },
  permanentAddress: { type: String, required:true },
  bloodGroup: {
    type:String ,
    enum:{
      values: [
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
      ]  ,
      message: "blood group must be select one"
    },

  },
  guardian: {
    type:guardianSchema ,
    required:true
  },

  localGuardian: {
    type: localGuardianSchema ,
    required:true
  },
  profileImg: { type: String},
  studentActive:{
    type:String ,
    enum:  ['Active', 'blocked'],
    default : "Active"
  },
});

//create a model
export const StudentModel = model<Student>('student', studentSchema);
