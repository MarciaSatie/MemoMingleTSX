//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./DateTime_Class_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  DateTime_Class to content array at Content.jsx

// Command+F replace DateTime_Class for the name of the file (the name will be used at Content.jsx)

//export DateTime_Class
const r1Title = "DateTime_Class"; //Replace Title
const r1Date = createDate("2024-01-28"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <details>
        <summary>Creating a new Date Object.</summary>

        <CodeMirror
          value={`namespace Date;

class Program
{
    static void Main()
    {
        var pancakeDay = new DateTime(2024, 2, 13);
        Console.WriteLine(pancakeDay.Year);//2024
        Console.WriteLine(pancakeDay.Month);//2
        Console.WriteLine(pancakeDay.Day);//13
        Console.WriteLine(pancakeDay.AddDays(4));//2/17/2024 12:00:00 AM
        Console.WriteLine($"Pancake day will be on {pancakeDay.DayOfWeek}");
        //Pancake day will be on Tuesday

        //Passing DateTime class information as a parameter:
        var booking1 = new HotelBooking("Ricardo", new DateTime(2024, 2, 13),3);
        Console.WriteLine($"{booking1.GuestName} booked a room from {booking1.StartDate} until {booking1.EndDate}");
        //Ricardo booked a room from 2/13/2024 12:00:00 AM until 2/16/2024 12:00:00 AM
    }



    class HotelBooking
    {
        public string GuestName;
        public DateTime StartDate = new DateTime();
        public DateTime EndDate = new DateTime();
        

        public HotelBooking(string guestName, DateTime startDate, int lengthOfStayInDays)
        {
            GuestName = guestName;
            StartDate = startDate;
            
            EndDate = startDate.AddDays(lengthOfStayInDays);

        }
    }


}
          
          `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
    </>
  );
}

//Function to format Date
function createDate(dateImput) {
  const x = new Date(dateImput);
  const currentDate = x.toISOString();

  const month = x.toLocaleString("en-US", { month: "long" });
  const day = x.toLocaleString("en-US", { day: "2-digit" });
  const year = x.getFullYear();

  return day + " " + month + " " + year;
}

//Adding information to the Map
const CreateNewProject = new Map();
CreateNewProject.set("title", r1Title);
CreateNewProject.set("date", r1Date);
CreateNewProject.set("text", r1Text);

function convertMapToObject(map) {
  const object = {};
  for (let [key, value] of map.entries()) {
    object[key] = value;
  }
  return object;
}

const DateTime_Class = convertMapToObject(CreateNewProject);
export default DateTime_Class;
