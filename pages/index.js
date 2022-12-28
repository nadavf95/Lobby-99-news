
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
               "subject":"Traffic",
               "head_text":"traffic in israel is bad!!!!!!!!!.",
               "publish_date":"12/12/2022"
              },
              { "id":"2",
                "subject":"Real estate",
                "head_text":"apartments in israel are over prices!!!!!!!!!.",
                "publish_date":"12/12/2022"
              },    
              { "id":"3",
                "subject":"climate",
                "head_text":"Israet is HOT!!!!!!!!!.",
                "publish_date":"12/12/2022"
              },
              { "id":"4",
                "subject":"animels",
                "head_text":"Do not abuse animals!!!!!!!!!.",
                "publish_date":"12/12/2022"
              }        
             ];           
   
  if (data){
    console.log(data);
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
