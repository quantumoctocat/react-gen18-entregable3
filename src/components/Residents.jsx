import { useState, useEffect } from "react";

const Residents = (props) => {
  // const filter = props.list === undefined ? [] : props.list;
  // console.log(props.list)

  // let residentElements = filter.map((item => {
  //   <li className="rmResident">{item}</li>
  // }));
  console.log()
  const [resident, setResident] = useState()
  useEffect(() => {
    
    props.getResidentInfo(props.list, "")
    .then(response=>setResident(response.data))
    .catch(error=>console.error(error))
  }, [props.query])
  
  return (<div>
    <div className="rmResidentImage"><img src={resident?.image} alt="" /></div>
    <div className="rmResidentTitle">{`Name: ${resident?.name}`}</div>
    <div className="rmResidentStatus">{`Staus: ${resident?.status}`}</div>
    <div className="rmResidentOrigin">{`Origin: ${resident?.origin?.name}`}</div>
    <div className="rmResidentEpisodes">{`Episodes where appears: ${resident?.episode?.length}`}</div>
    <div className="rmResidentsList"></div>
  </div>);
}

export default Residents;
