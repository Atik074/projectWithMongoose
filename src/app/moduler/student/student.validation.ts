import Joi from "joi";

const userJoiSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .max(15)
      .trim()
      ,
    middleName: Joi.string(),
    lastName: Joi.string()
      .required()
      .max(15)
      .trim()
      
  });
  
  // Define Joi schema for the guardian
  const guardianJoiSchema = Joi.object({
    fatherName: Joi.string().required().trim(),
    fatherContactNo: Joi.string().required().trim(),
    fatherOccupation: Joi.string().required(),
    motherName: Joi.string().required(),
    motherContactNo: Joi.string().required().trim(),
    motherOccupation: Joi.string().required().trim(),
  });
  
  // Define Joi schema for the local guardian
  const localGuardianJoiSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    address: Joi.string().required(),
  });
  
  // Define Joi schema for the student
  const studentJoiSchema = Joi.object({
    id: Joi.string().required(),
    name: userJoiSchema.required(),
    age: Joi.number().optional(),
    gender: Joi.string().valid('Female', 'Male', 'other').required(),
    dateOfBirth: Joi.string().optional().trim(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emmergenceContactNo: Joi.string().required(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    bloodGroup: Joi.string().valid(
      'A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ).required(),
    guardian: guardianJoiSchema.required(),
    localGuardian: localGuardianJoiSchema.required(),
    profileImg: Joi.string(),
    studentActive: Joi.string().valid('Active', 'blocked').default('Active'),
  
  
  });

  export default studentJoiSchema ;