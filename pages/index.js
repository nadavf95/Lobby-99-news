
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


  let data = [{"id":"0",
               "subject":"שוק חופשי",
               "head_text":"מיזוג נוסף בתחום המזון?",
               "publish_date":"12/12/2022",
               "likes": "80",
               "views": "500",
               "fight_for":"במשך שנים חברות המזון הגדולות רכשועוד חברותוכך הגדילו את כוחן ויצרו שוק ריכוזי...",
               "action_stages":["משהו שאנחנו עושים",
                                "עוד משהו שאנחנו עושים",
                                "זה כרגע הדבר שאנחנו עושים",
                                "דבר אחרון שאנחנו צריכים לעשות"],
               "curr_stage":"3",
               "opposite":"קבוצת דיפלומט",
               "opposite_represent_by":"שם שם ועוד שם",
               "lobby_represent_by":"שם שם ועו כמה שמות"

              },
              { "id":"1",
                "subject":"הון שלטון",
                "head_text":"המדריך לממשלה שתבחר להיאבק ביוקר מחירי המזון",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },    
              { "id":"2",
                "subject":"שוק חופשי",
                "head_text":"הבנקים מרוויחים על חשבון החסכונות שלכם מבלי לעשות דבר",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"3",
                "subject":"רשיות מקומיות",
                "head_text":"עוד פחות משנה הולכים שוב לבחירות ברשויות המקמויות",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"4",
                "subject":"משאבי טבע",
                "head_text":"מה יקרה למשק הישראלי כשייגמר לנו הגז?",
                "publish_date":"12/12/2022",
                "likes": "80",
                "views": "500"
              },
              { "id":"5",
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
