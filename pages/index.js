
import Message from "../components/message";
import { useApiData } from "../hooks/data";
import HomePage from "./homePage";

// Our pre proccing data page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  const records = data.teams;
  if (data){
    return (
      <>
        <HomePage data={data}/>
      </>
    )
  }
  else {
    return{
      // showing some loading/error messages
    }
  }
}
