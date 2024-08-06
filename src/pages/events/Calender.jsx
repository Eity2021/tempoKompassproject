import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calender() {
  return (
 <div>
    <div className='pb-[40px]'>
    <p className='font-poppins text-[40px] text-[#076F74] font-medium' style={{ fontFamily: "Noe Display" }}> Events </p>
    </div>
     <div className="border-2 rounded-[12px] w-[330px]">
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
     </div>
 </div>
  )
}
