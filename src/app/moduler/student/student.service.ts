import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// find method get all students from db
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// findOne student from db
const getSingleStudentfromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentfromDB,
};
