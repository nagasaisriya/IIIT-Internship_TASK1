import {
  useQuery

} from "@apollo/client";
import { getKeyFeaturesQuery } from '../queries/queries'
// import { graphql } from 'graphql';
// const getKeySpecificationsQuery = gql`
// {
//   specifications{
//     ARAIMileage
//     FuelType
//   }
// }`
function KeyFeaturesList({ id }) {
  // console.log(this.props);
  const { loading, error, data } = useQuery(getKeyFeaturesQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data.keyFeatures.PowerSteering.toString());
  return (
    <div className="KeyFeaturesList">
      <ul id="key-spec-list">
        {data.keyFeatures.PowerSteering.toString()

        },
        {
          data.keyFeatures.PowerWindowsFront.toString()
        }
      </ul>
    </div>
  );
}

export default KeyFeaturesList;
/* <div className="KeySpecificationsList">
      <ul id="key-spec-list">
        {data.keySpecifications.map(keyspec => (
          <li key={keyspec.id}>{keyspec.ARAIMileage},{keyspec.FuelType}</li>
        ))}
      </ul>
    </div> */