import React from 'react'
import CourseStep from './CourseStep';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { set_course_details, set_edit_course } from '../../Slices/courseSlice';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AddCourse() {

  const [loading, set_loading] = useState(false);
  const {step} = useSelector((state) => state.course);

    const dispatch = useDispatch();
    useEffect(() => {

      if(step === 1){
          dispatch(set_edit_course(false));
          dispatch(set_course_details(null));
      }
        set_loading(true)
         // eslint-disable-next-line
    }, []);

  return (
    <div className='flex flex-col justify-evenly md:flex-row gap-5'>
        <div  className='text-white flex flex-col gap-5 md:w-[60%]'>

            <h1 className='text-3xl font-bold text-center'>Add Course</h1>

            {loading && <CourseStep/>}
        </div>

        <div className='text-white md:w-[40%] bg-richblack-800 h-fit p-5 rounded-md'>
              <div className='flex gap-2 items-center mb-5'>
                <AiOutlineThunderbolt size={25} color='yellow'/>
                <h1 className='text-xl'>Course Upload Tips</h1>
              </div>

              <ul className='text-[14px] flex flex-col gap-2'>
                <li><span className='inline-block'><GoDotFill/></span> Set the course price option or make it free.</li>
                <li><span className='inline-block'><GoDotFill/></span> Standard size for the course thumbnail is 1024x576.</li>
                <li><span className='inline-block'><GoDotFill/></span> Video Section contains the course overview video</li>
                <li><span className='inline-block'><GoDotFill/></span> Course Builder is where you create and organise a course.</li>
                <li><span className='inline-block'><GoDotFill/></span> Information from the Additional Data section shows up on the course single page.</li>
                <li><span className='inline-block'><GoDotFill/></span> Make Announcements to notify any important.</li>
                <li><span className='inline-block'><GoDotFill/></span> Notes to all enrolled students at once.</li>
              </ul>
        </div>
    </div>
    
  )
}
