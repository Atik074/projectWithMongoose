import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; // body theke data destructure kore  niye pathano holo
    const result = await studentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'successfully send your data',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// find method get all students from db
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'get all students by find are done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//find single student from db
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentfromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'single student is founded',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
