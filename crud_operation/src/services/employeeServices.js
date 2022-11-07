import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

const employeeCollectionRef = collection(db, "employee");

class EmployeeDataServices {
  // CREATE / ADD - adding new employees
  addEmployee = (newEmp) => {
    return addDoc(employeeCollectionRef, newEmp);
  };

  // READ- get all the employees data
  getAllEmp = () => {
    return getDocs(employeeCollectionRef);
  };

  // READ (Single) - Individual Employee
  getSingleEmp = (id) => {
    const empDoc = doc(db, "employee", id);
    return getDoc(empDoc);
  };

  // UPDATE - updating the newly added employees
  updateEmployee = (id, updatedEmp) => {
    const empDoc = doc(db, "employee", id);
    return updateDoc(empDoc, updatedEmp);
  };

  // DELETE - deleting the existing employee
  deleteEmployee = (id) => {
    const empDoc = doc(db, "employee", id);
    return deleteDoc(empDoc);
  };
}

export default new EmployeeDataServices();
