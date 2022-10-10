import axios from "axios"
import { useEffect, useState } from "react"
import LocationData from "./LocationData"

const RMCard = () => {

  const [response, setResponse] = useState({})
  const [maxLocations, setMaxLocations] = useState(1)

  const rmURL = "https://rickandmortyapi.com/api/"
  const locURI = "location/"
  const ifError = (error) => {
    console.error(error)
  }
  const getRMInfo = (URL, URI) => {
    return axios.get(URL + URI)
  }
  const getLocation = () => {
    const inputLocation = document.getElementById("locationInput")
    getRMInfo(rmURL + locURI, inputLocation.value).then((response) => {
      setResponse(response.data)
    }, ifError)
  }

  useEffect(() => {
    getRMInfo(rmURL + locURI, "").then((response) => {
      setMaxLocations(response.data.info.count)
      getRMInfo(rmURL + locURI, Math.floor(Math.random() * response.data.info.count) + 1).then((response) => {
        setResponse(response.data)
        console.log(response)
      }, ifError)
    }, ifError)
  }, [])

  return (
    <div>
      <input id="locationInput" name="locationInput" type="number" min="1" max={maxLocations} />
      <button onClick={getLocation}>New location</button>
      <LocationData response={response} fetchResident={getRMInfo} query={response}></LocationData>
    </div>
  )
}

export default RMCard
