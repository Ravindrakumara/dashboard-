/* eslint-disable */ 
import {useEffect,React,useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'
import './socialmap.css'
import apiService from '../../../service/apiService'
// import apiService from '../../../service/apiService'

function analysis() {
  const [surveyData, setSurveyData] = useState([]);
  
  useEffect(() => {
    apiService.getAll()
    .then(data => setSurveyData(data.data))
  }, []);

  return (
    <div>
        <MapContainer center={[6.927079,79.861244]} zoom={7.4} scrollWheelZoom={true}>
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {surveyData && surveyData.map((data,index)=>(
  <Marker key={data.id} 
  position={[data.latitude,data.longitude]}>
    <Popup>
    {data.fullname}. <br /> {data.address}.
    </Popup>
  </Marker>
  ))}
        </MapContainer>
    </div>
    
  )
}

export default analysis