
import Message from "../components/message";
import { useApiData } from "../hooks/data";
import HomePage from "./homePage";

// Our pre proccing data page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  // const { data, isLoading, isError } = useApiData();

  // if (isLoading) return <Message content="Loading..." />
  // if (isError) return <Message content="An error occured..." />
  // if (!data) return <Message content="No data could be loaded..." />
  let data = [{"id":"1",
               "subject":"שוק חופשי",
               "head_text":"מיזוג נוסף בתחום המזון?",
               "publish_date":"12/12/2022",
               "likes": "80",
               "views": "500"
              },
              { "id":"2",
                "subject":"הון שלטון",
                "head_text":"המדריך לממשלה שתבחר להיאבק ביוקר מחירי המזון",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },    
              { "id":"3",
                "subject":"שוק חופשי",
                "head_text":"הבנקים מרוויחים על חשבון החסכונות שלכם מבלי לעשות דבר",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"4",
                "subject":"רשיות מקומיות",
                "head_text":"עוד פחות משנה הולכים שוב לבחירות ברשויות המקמויות",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"5",
                "subject":"משאבי טבע",
                "head_text":"מה יקרה למשק הישראלי כשייגמר לנו הגז?",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"6",
                "subject":"פנסיה וביטוח",
                "head_text":"ניצחון לשקיפות! דמי ניהול שהוסתרו מכם ייחשפו",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              }        
             ];                            
   
  if (data){
    //console.log(data);
    return (
      <>
        <HomePage data={data}/>
      </>
    )
  }
  else {
    return(
      // showing some loading/error messages
      <div>
        <h1> no data </h1>
      </div>
    )
  }
}
