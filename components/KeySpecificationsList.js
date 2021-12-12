import {
  useQuery

} from "@apollo/client";
import { getKeySpecificationsQuery } from '../queries/queries'
// import { graphql } from 'graphql';
// const getKeySpecificationsQuery = gql`
// {
//   specifications{
//     ARAIMileage
//     FuelType
//   }
// }`
function KeySpecificationsList() {
  // console.log(this.props);
  const { loading, error, data } = useQuery(getKeySpecificationsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div className="KeySpecificationsList">
      <ul id="key-spec-list">
        {data.specifications.map(keyspec => (
          <li key={keyspec.id}>{keyspec.ARAIMileage},{keyspec.FuelType},{keyspec.EngineDisplacement},{keyspec.FuelTankCapacity}</li>
        ))}
      </ul>
    </div>
  );
}

export default KeySpecificationsList;
/* <div className="KeySpecificationsList">
      <ul id="key-spec-list">
        {data.keySpecifications.map(keyspec => (
          <li key={keyspec.id}>{keyspec.ARAIMileage},{keyspec.FuelType}</li>
        ))}
      </ul>
    </div> */