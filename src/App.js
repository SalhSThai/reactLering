import logo from './logo.svg';
import './App.css';
import Geocode from 'react-geocode'
function App() {
  const getCurrentLatLong = ()=> {
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        resolve(pos.coords.latitude + ',' + pos.coords.longitude)
      })
    })
  }





console.log("a",a,"b",b(),"c",c());



  const  getAddress = (loc) => {
    Geocode.setApiKey();
    Geocode.setLanguage('en');
    Geocode.setLocationType('ROOFTOP');
    Geocode.enableDebug()


    const lat = loc.split(',')[0];
    const long = loc.split(',')[1];

    return new Promise(()=> {
      Geocode.fromLatLng(lat,long).then(
        (res) => {
          resolve(
            response.plus_code.compound_code
            .split(' ')
            .slice(1)
            .join(' ')
            .split(', ')
            .slice(-2)
            .join(', ')
          )
        },
        (error) => {
          console.error(error);
        }
      )
    })

  }

const getLatLong = (address) => {
  Geocode.setApiKey();
  Geocode.setLanguage('en');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug()


return new Promise((resolve) => {
  Geocode.fromAddress(address).then(
    (res)=>{
      resolve(
        [
          res.results[0].geometry.location.lat,
          res.results[0].geometry.location.long
        ].join(',') 
      )
    },
    (error)=>{
      console.error(error)
    }
  )
})

}

const  calcDistance = (myLocation,yourLocation) => {
const a = Number(myLocation.split(',')[0])
const b = Number(myLocation.split(',')[1])
const x = Number(yourLocation.split(',')[0])
const y = Number(yourLocation.split(',')[1])

const distance = Math.cal (
  Math.sqrt(((x-a)*111.139)** 2 + ((y-b)*111.139)**2)
)
return distance


}



  return (

    <div className=" ">
      
    </div>
  );
}

export default App;
