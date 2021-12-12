import {
  gql
} from "@apollo/client";

const getKeySpecificationsQuery = gql`
{
  specifications{
    ARAIMileage
    FuelType
    EngineDisplacement
    FuelTankCapacity 
  }
}`
const getKeyFeaturesQuery = gql`
{ 
  keyFeatures(id:"61b42b4def6484456b16bfc8"){
    PowerSteering
    PowerWindowsFront
  }
}`
const addKeySpecificationsMutation = gql`
mutation(
    $ARAIMileage: String!
    $FuelType:String!,
    $EngineDisplacement:Number!,
    $MaxPower:String!,
    $MaxTorque:String!,
    $SeatingCapacity:Number!,
    $TransmissionType: String!,
    $BootSpace:Number!,
    $FuelTankCapacity:Number!,
    $BodyType:String!,
    $kfid: String
  ){
  addkeySpecifications(ARAIMileage:$String,FuelType:$String,EngineDisplacement:$Number,MaxPower:$String,MaxTorque:$String,SeatingCapacity:$Number,TransmissionType:$String,BootSpace:$Number,FuelTankCapacity:$Number,BodyType:$String,kfid:$String){
    id
    ARAIMileage
    FuelType
  }
}
`
export { getKeySpecificationsQuery, getKeyFeaturesQuery, addKeySpecificationsMutation };