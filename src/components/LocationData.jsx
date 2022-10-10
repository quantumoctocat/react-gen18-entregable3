import Residents from "./Residents"

const LocationData = (props) => {
  return (
    <div>
      <div className="rmId">{props.response.id}</div>
      <div className="rmName">{props.response.name}</div>
      <div className="rmType">{props.response.type}</div>
      <div className="rmDimension">{props.response.dimension}</div>
      {
        props.response.residents?.map((resident, i)=>(
          <Residents key={i} list={resident} getResidentInfo={props.fetchResident} query={props.query}></Residents>
        ))
      }
      {console.log(props.response.residents)}
    </div>
  )
}

export default LocationData
