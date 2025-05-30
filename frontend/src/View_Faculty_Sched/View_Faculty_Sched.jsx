import React, { useState, useEffect } from 'react';

import './View_Faculty_Sched.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';

const FacultyScheduleTable = () => {
  const [ scheduleData, setScheduleData ] = useState( [] );

  const username = localStorage.getItem("UserName")

  useEffect(() => {

    async function fetchAlerts()
    {
      console.log("Recieved request for Faculty view schedule")
      try{
        const response = await axios.post("http://localhost:5000/fetch_faculty_sched",{name: username});
    
        if(response.status === 200)
        {
          let dataval = response.data.schedulerecords
  
        //   dataval.sort((a, b) => new Date(b.date) - new Date(a.date));
  
          setScheduleData( dataval )
          
        }
        else if(response.status === 404)
        {
          
        }
        else{
          // alert("Cannot Connect with Server")
          return;
        }
    
        }
        catch(e)
        {
          alert(e)
        }
    }
      fetchAlerts();
    }, []);

  // create function to sort the data based on date
  const sortDataDate = () => {
    const sortedData = scheduleData.sort( ( a, b ) => {
      if ( a.date < b.date ) {
        return -1;
      }
      if ( a.date > b.date ) {
        return 1;
      }
      return 0;
    } );
    setScheduleData( [ ...sortedData ] );
  };

  // create function to sort the data based on time
  const sortDataTime = () => {
    const sortedData = scheduleData.sort( ( a, b ) => {
      if ( a.TimeSlot < b.TimeSlot ) {
        return -1;
      }
      if ( a.TimeSlot > b.TimeSlot ) {
        return 1;
      }
      return 0;
    } );
    setScheduleData( [ ...sortedData ] );
  };

  // create function to sort the data based on course
  const sortDataCourse = () => {
    const sortedData = scheduleData.sort( ( a, b ) => {
      if ( a.course < b.course ) {
        return -1;
      }
      if ( a.course > b.course ) {
        return 1;
      }
      return 0;
    } );
    setScheduleData( [ ...sortedData ] );
  };

  // // create function to sort the data based on invigilator
  // const sortDataInvigilator = () => {
  //   const sortedData = scheduleData.sort( ( a, b ) => {
  //     if ( a.Invigilator < b.Invigilator ) {
  //       return -1;
  //     }
  //     if ( a.Invigilator > b.Invigilator ) {
  //       return 1;
  //     }
  //     return 0;
  //   } );
  //   setScheduleData( [ ...sortedData ] );
  // };

  // create function to sort the data based on hall
  const sortDataHall = () => {
    const sortedData = scheduleData.sort( ( a, b ) => {
      if ( a.Hall < b.Hall ) {
        return -1;
      }
      if ( a.Hall > b.Hall ) {
        return 1;
      }
      return 0;
    } );
    setScheduleData( [ ...sortedData ] );
  };

  return (
    <div className='schedule-container'>

      <div className='exam-schedule'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>
                Date&nbsp;
                <button onClick={ sortDataDate }>
                  <FontAwesomeIcon icon={ faSort } />
                </button>
              </th>
              <th>
                TimeSlot&nbsp;
                <button onClick={ sortDataTime }>
                  <FontAwesomeIcon icon={ faSort } />
                </button>
              </th>
              <th>
                Course Name&nbsp;
                <button onClick={ sortDataCourse }>
                  <FontAwesomeIcon icon={ faSort } />
                </button>
              </th>
              {/* <th>
                Invigilator&nbsp;
                <button onClick={ sortDataInvigilator }>
                  <FontAwesomeIcon icon={ faSort } />
                </button>
              </th> */}
              <th>
                Hall Alloted&nbsp;
                <button onClick={ sortDataHall }>
                  <FontAwesomeIcon icon={ faSort } />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            { scheduleData.map( schedule => (
              <tr key={ schedule._id }>
                <td>{ schedule.date }</td>
                <td>{ schedule.TimeSlot }</td>
                <td>{ schedule.course }</td>
                {/* <td>{ schedule.Invigilator }</td> */}
                <td>{ schedule.Hall }</td>
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default FacultyScheduleTable;
