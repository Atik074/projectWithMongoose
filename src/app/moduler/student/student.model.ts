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
    required: [true, 'first name is required'],
    maxlength:[15, "fist name is to long"],
    trim:true,

    // validate:{
    //   validator: function(value:string){
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
    //      return firstNameStr === value
    //   },
    //   message:"{VALUE} is not capitalize formate"
    // }

    //joi babohar kore validdate koreci tai ei custome validation dorker nei
    

   },
  middleName: { type: String },
  lastName: { 
    type: String ,
    required : [true, 'last name is required'],
    maxlength:[15, "last name is to long"] ,
    trim:true ,
    // validate:{
    //   validator :(value:string)=>validator.isAlpha(value),
    //   message:"{VALUE} is not match"
    // }


   },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'father name is required'],
    trim:true
  },
  fatherContactNo: {
    type: String,
    required: [true, 'father contact is required'],
    trim:true
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
    required: [true, 'mother contact  is required'],
    trim:true
  },
  motherOccupation: {
    type: String,
    required: [true, 'mother occupation name is required'],
    trim:true
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
  age: { type: Number ,trim:true },
  gender: {
    type:String ,
    enum: {
      values: ['Female', 'Male' , 'other'] ,
      message: '{VALUE} is not match'
    } ,
    required:true
  

  },
  dateOfBirth: { 
    type: String ,
    trim:true
  },
  // trim: removes your extra space , unique: can not add duplicate values
  email: { 
    type: String, required:true ,unique:true ,trim:true ,
    // validate:{
    //   validator:(value:string)=>validator.isEmail(value),
    //   message:"{VALUE} is not valid"
    // }

   },
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
