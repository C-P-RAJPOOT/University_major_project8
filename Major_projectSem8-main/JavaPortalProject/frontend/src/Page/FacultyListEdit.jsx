import React, { useEffect } from "react";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  fetchCoursesAsync,
  selectCourses,
} from "../features/course/courseSlice";
import {
  fetchFacultyByIdAsync,
  selectFacultyById,
  updateFacultyByIdAsync,
} from "../features/faculty/facultySlice";
import { useNavigate } from "react-router-dom"; 

const FacultyListEdit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const courseList = useSelector(selectCourses);
  const dispatch = useDispatch();
  const selectedFaculty = useSelector(selectFacultyById);
  useEffect(() => {
    dispatch(fetchCoursesAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchFacultyByIdAsync(params.id));
  }, [dispatch, params]);

  useEffect(() => {
    if (selectedFaculty && params.id) {
      setValue("facultyName", selectedFaculty.facultyName);
      setValue("mobileNumber", selectedFaculty.mobileNumber);
      setValue("email", selectedFaculty.email);
      setValue("dateOfBirth", selectedFaculty.dateOfBirth);
      setValue("city", selectedFaculty.city);
      setValue("address", selectedFaculty.address);
      setValue("courseId", selectedFaculty.courseId);
    }
  }, [selectedFaculty, params.id, setValue]);

  return (
    <>
      {selectedFaculty &&  <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h5">
            <div className="center">
              <form
                className="form"
                onSubmit={handleSubmit((data) => {
                  let id = params.id;
                  dispatch(updateFacultyByIdAsync({data,id}))
                  toast.success("Faculty Record Updated Successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                })}
              >
                <p className="title">Edit Faculty Info </p>

                <div className="flex">
                  <label>
                    Full name :
                    <input
                      placeholder="full name"
                      type="text"
                      className="input"
                      id="facultyName"
                      maxLength={30}
                      {...register("facultyName", {
                        required:
                          "-Full Name is required \n - Cannot exceed 30 characters",

                        // pattern: {
                        //   value:
                        //     /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/gim,
                        //   message: `Start with capital letter must contain surname/middlename`,
                        // },
                      })}
                    />
                  </label>
                  {errors.facultyName && (
                    <p className="text-red-400">{errors.facultyName.message}</p>
                  )}
                </div>
                <div>
                  <label>
                    Mobile no:
                    <input
                      placeholder="XXXXXXXXXX"
                      type="tel"
                      className="input"
                      id="mobileNumber"
                      minLength={10}
                      maxLength={13}
                      {...register("mobileNumber", {
                        required: "Mobile Number  is required",
                        pattern: {
                          pattern: /^[0-9]{10}$/,
                          message: "Number cannot exceed ten characters",
                        },
                      })}
                    />
                  </label>
                  {errors.mobileNumber && (
                    <p className="text-red-400">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                  {errors.mobileNumber &&
                    errors.mobileNumber.type === "minLength" && (
                      <span role="text-red-400">
                        Phone Number must contian 10 characters
                      </span>
                    )}
                </div>
                <div>
                  <label>
                    Email:
                    <input
                      id="email"
                      placeholder="xyz@gmail.com"
                      type="email"
                      className="input"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Email not valid",
                        },
                      })}
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-400">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label>
                    DOB(Date of Birth):
                    <input
                      id="dateOfBirth"
                      placeholder="DOB"
                      type="date"
                      className="input"
                      {...register("dateOfBirth", {
                        required: "DOB is required",
                      })}
                    />
                  </label>
                  {errors.dateOfBirth && (
                    <p className="text-red-400">{errors.dateOfBirth.message}</p>
                  )}
                </div>
                <div>
                  <label>
                    City:
                    <input
                      placeholder="City"
                      type="text"
                      className="input"
                      id="city"
                      {...register("city", {
                        required: "City is required",
                      })}
                    />
                  </label>
                  {errors.city && (
                    <p className="text-red-400">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <label>
                    Address:
                    <input
                      id="address"
                      placeholder="Address"
                      type="text"
                      className="input"
                      maxLength={40}
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                  </label>
                  {errors.address && (
                    <p className="text-red-400">{errors.address.message}</p>
                  )}
                </div>
                <br />
                <div>
                    
                <label>
                    Select Course:
                    <select
                      className="select-dropdown"
                      {...register("courseId", {
                        required: "Course  is required",
                      })}
                    
                    >
                  
                      {courseList.map(
                        (course) =>
                          course.id===selectedFaculty.courseId?
                          (
                            <option key={course.id} value={course.courseId} defaultChecked>
                              {course.courseName}
                            </option>
                          ):(
                            <option key={course.id} value={course.courseId}>
                            {course.courseName}
                          </option>
                          )
                      )}
                    </select>
                  </label>
                  
                  {errors.courseId && (
                    <p className="text-red-400">{errors.courseId.message}</p>
                  )}
                </div>

                <div className="button-container">
                  <button type="reset" className="reset" value="Reset"  onClick={()=>{navigate(`/StudentList`)}}>
                    Cancel
                  </button>

                  <button type="submit" className="submit-2 " value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Typography>
        </Box>
      </Box>}
      <ToastContainer />
    </>
  );
};

export default FacultyListEdit;
