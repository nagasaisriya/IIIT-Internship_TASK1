import { useState } from "react";
import { flowRight as compose } from 'lodash';
import { getKeySpecificationsQuery, addKeySpecificationsMutation } from '../queries/queries'
import {
  gql,
  useQuery,
  useMutation
} from "@apollo/client";
// // // const AddKeySpec = props => {
// // //   const { loading, error, data } = useQuery(getKeyFeaturesQuery);
// // //   if (loading) return "Loading...";
// // //   if (error) return `Error! ${error.message}`;
// // //   console.log(data);
// // // console.log(this.props);
// // // const { loading, error, data } = useQuery(getKeyFeaturesQuery);
// // // if (loading) return <option disabled>Loading...</option>;
// // // if (error) return <p>Error </p>;
// // // else {
// // //   return data.features.map(feature => {
// // //     <option key={feature.id} value={feature.id}>{feature.PowerSteering},{feature.FuelType}</option>
// // //   })
// // // }

function AddKeySpecifications() {
  const [CarName, setCarName] = useState('');
  const [ARAIMileage, setARAIMileage] = useState('');
  const [FuelType, setFuelType] = useState('');
  const [EngineDisplacement, setEngineDisplacement] = useState('');
  const [MaxPower, setMaxPower] = useState('');
  const [PowerSteering, setPowerSteering] = useState('');
  const [PowerWindowsFront, setPowerWindowsFront] = useState('');
  // const [createuser, { error }] = useMutation(CREATE_USER_MUTATION);
  // const addUser = () => {
  //   createuser({
  //     variables: {
  //       CarName: CarName,
  //       ARAIMileage: ARAIMileage,
  //       FuelType: FuelType,
  //       EngineDisplacement: EngineDisplacement,
  //       MaxPower: MaxPower,
  //       PowerSteering: PowerSteering,
  //       PowerWindowsFront: PowerWindowsFront
  //     },
  //   });

  //   if (error) {
  //     console.log(error);
  //   }
  // };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  return (
    <form id="add-key-spec" onSubmit={this.submitForm.bind(this)}>

      <div className="field">
        <label>Car name:</label>
        <input type="text" onChange={(e) => { this.setState({ CarName: e.target.value }) }} />
      </div>

      <div className="field">
        <label>ARAIMileage</label>
        <input type="text" onChange={(e) => { this.setState({ ARAIMileage: e.target.value }) }} />
      </div>

      <div className="field">
        <label>FuelType</label>
        <input type="text" onChange={(e) => { this.setState({ FuelType: e.target.value }) }} />
      </div>

      <div className="field">
        <label>EngineDisplacement</label>
        <input type="text" onChange={(e) => { this.setState({ EngineDisplacement: e.target.value }) }} />
      </div>

      <div className="field">
        <label>MaxPower</label>
        <input type="text" onChange={(e) => { this.setState({ MaxPower: e.target.value }) }} />
      </div>

      <div className="field">
        <label>MaxTorque</label>
        <input type="text" onChange={(e) => { this.setState({ MaxTorque: e.target.value }) }} />
      </div>

      <div className="field">
        <label>SeatingCapacity</label>
        <input type="text" onChange={(e) => { this.setState({ SeatingCapacity: e.target.value }) }} />
      </div>

      <div className="field">
        <label>TransmissionType</label>
        <input type="text" onChange={(e) => { this.setState({ TransmissionType: e.target.value }) }} />
      </div>

      <div className="field">
        <label>BootSpace</label>
        <input type="text" onChange={(e) => { this.setState({ BootSpace: e.target.value }) }} />
      </div>

      <div className="field">
        <label>FuelTankCapacity</label>
        <input type="text" onChange={(e) => { this.setState({ FuelTankCapacity: e.target.value }) }} />
      </div>

      <div className="field">
        <label>BodyType</label>
        <input type="text" onChange={(e) => { this.setState({ BodyType: e.target.value }) }} />
      </div>

      {/* <div className="field">
        <label>PowerSteering</label>
        <input type="text" onChange={(e) => { this.setState({ PowerSteering: e.target.value }) }} />
      </div>

      <div className="field">
        <label>PowerWindowsFront</label>
        <input type="text" onChange={(e) => { this.setState({ PowerWindowsFront: e.target.value }) }} />
      </div> */}

      <button>+</button>

    </form>
  );
}

export default AddKeySpecifications;