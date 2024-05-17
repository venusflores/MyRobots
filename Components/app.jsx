import { useState } from "react"
import SearchRobots from "./api"
import SearchBar from "./Components/SearchBar"
import RobotsList from "./Components/RobotsList"
SearchRobots()
function App(){
// Cree un estado robots de tipo ([]) utilizando useState
const [robots, setRobots] = useState([])
// Construya una funcions handleSubmit asyncrona que recibe como
paramentro term
// y sigua las instrucciones del documento
const handleSubmit = async(term) => {
const result = await searchRobots(term)
setRobots(result)
}
return (
<>
<h1>My Robots</h1>
<SearchBar onSubmit={handleSubmit} />
<RobotsList robots={robots} />
</>
 )
}
export default App