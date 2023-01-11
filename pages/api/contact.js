import { CONTACT_FORM_TABLE_NAME } from "../../config";
import { client } from "../../datastore";
// consider going another folder up ? check w paul

export default async function handler(req, res) {
  // Don't allow methods we don't support
  console.log("entered")
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Unsupported request method' })
    return
  }

  // explicitly getting the fields we support for safety and consistency
  const { name } = req.body;

  // write our data to the database
  try {
    const { error } = await client.from(CONTACT_FORM_TABLE_NAME).insert({ name});
    if (error) {
        console.log(error)
        res.status(500).json({ message: error });
        return;
    }
    res.status(200).json({message: "Success"})
  } catch (error) {
    res.status(400).json({ message: `Something went wrong: ${error}` })
  }
}