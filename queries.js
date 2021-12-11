import {
  gql
} from "@apollo/client";

const getKeySpecificationsQuery = gql`
{
  keySpecifications(id:"61b4abfe437415ea611fc4f1"){
    ARAIMileage
    FuelType
    
  }
}`
const addKeySpecificationsMutation = gql`
mutation{
  addkeySpecifications(kfid:"",ARAIMileage:"",FuelType:"",EngineDisplacement:"",MaxPower:"",MaxTorque:"",SeatingCapacity:"",TransmissionType:"",BootSpace:"",FuelTankCapacity:"",BodyType:""){
    id
    ARAIMileage
    FuelType
  }
}
`
export { getKeySpecificationsQuery, addKeySpecificationsMutation };