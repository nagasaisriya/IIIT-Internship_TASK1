import { React, useState } from "react";
// import { flowRight as compose } from 'lodash';
// import { graphql } from 'graphql';
import { addKeySpecificationsMutation } from '../queries/queries'
import {
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
  // const [CarName, setCarName] = useState('');
  const [ARAIMileage, setARAIMileage] = useState('');
  const [FuelType, setFuelType] = useState('');
  const [EngineDisplacement, setEngineDisplacement] = useState('');
  const [MaxPower, setMaxPower] = useState('');
  const [MaxTorque, setMaxTorque] = useState('');
  const [SeatingCapacity, setSeatingCapacity] = useState('');
  const [TransmissionType, setTransmissionType] = useState('');
  const [BootSpace, setBootSpace] = useState('');
  const [FuelTankCapacity, setFuelTankCapacity] = useState('');
  const [BodyType, setBodyType] = useState('');
  // const [kfid, setkfid] = useState('');
  const [createuser, { error }] = useMutation(addKeySpecificationsMutation);
  const addUser = () => {
    createuser({
      variables: {
        // CarName: CarName,
        ARAIMileage: ARAIMileage,
        FuelType: FuelType,
        EngineDisplacement: EngineDisplacement,
        MaxPower: MaxPower,
        MaxTorque: MaxTorque,
        SeatingCapacity: SeatingCapacity,
        TransmissionType: TransmissionType,
        BootSpace: BootSpace,
        FuelTankCapacity: FuelTankCapacity,
        BodyType: BodyType,
        // kfid: kfid
      },
    });

    if (error) {
      console.log(error);
    }
  };
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   this.props.addKeySpecificationsMutation();
  // };
  return (
    <form id="add-key-spec" >

      {/* <div className="field">
        <label>Car name:</label>
        <input type="text" onChange={(e) => {
          setFuelTankCapacity(e.target.value);
        }} />
      </div> */}

      {/* <div className="field">
        <label>ARAIMileage</label>
        <input type="text" onChange={(e) => {
          setARAIMileage(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>FuelType</label>
        <input type="text" onChange={(e) => {
          setFuelType(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>EngineDisplacement</label>
        <input type="text" onChange={(e) => {
          setEngineDisplacement(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>MaxPower</label>
        <input type="text" onChange={(e) => {
          setMaxPower(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>MaxTorque</label>
        <input type="text" onChange={(e) => {
          setMaxTorque(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>SeatingCapacity</label>
        <input type="text" onChange={(e) => {
          setSeatingCapacity(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>TransmissionType</label>
        <input type="text" onChange={(e) => {
          setTransmissionType(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>BootSpace</label>
        <input type="text" onChange={(e) => {
          setBootSpace(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>FuelTankCapacity</label>
        <input type="text" onChange={(e) => {
          setFuelTankCapacity(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>BodyType</label>
        <input type="text" onChange={(e) => {
          setBodyType(e.target.value);
        }} />
      </div>

      <div className="field">
        <label>kfid</label>
        <input type="text" onChange={(e) => {
          setkfid(e.target.value);
        }} />
      </div> */}

      {/* <div className="field">
        <label>PowerSteering</label>
        <input type="text" onChange={(e) => { this.setState({ PowerSteering: e.target.value }) }} />
      </div>

      <div className="field">
        <label>PowerWindowsFront</label>
        <input type="text" onChange={(e) => { this.setState({ PowerWindowsFront: e.target.value }) }} />
      </div> */}

      {/* <button onClick={addUser}>+</button> */}
      <div>
        <input
          type="text"
          placeholder="ARAIMileage"
          onChange={(e) => {
            setARAIMileage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="FuelType"
          onChange={(e) => {
            setFuelType(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="setEngineDisplacement"
          onChange={(e) => {
            setEngineDisplacement(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="setMaxPower"
          onChange={(e) => {
            setMaxPower(e.target.value);
          }}
        />
        <br></br>
        <input
          type="text"
          placeholder="setMaxTorque"
          onChange={(e) => {
            setMaxTorque(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="setSeatingCapacity"
          onChange={(e) => {
            setSeatingCapacity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="setTransmissionType"
          onChange={(e) => {
            setTransmissionType(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="setBootSpace"
          onChange={(e) => {
            setBootSpace(e.target.value);
          }}
        /><br></br>
        <input
          type="text"
          placeholder="setFuelTankCapacity"
          onChange={(e) => {
            setFuelTankCapacity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="setBodyType"
          onChange={(e) => {
            setBodyType(e.target.value);
          }}
        />



        <button onClick={addUser}> Create KeySpecification</button>
      </div>
    </form>
  );
}

export default AddKeySpecifications;
// onSubmit={this.submitForm.bind(this)}
// getKeySpecificationsQuery,