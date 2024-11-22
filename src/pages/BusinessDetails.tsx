// src/pages/BusinessDetails.tsx
import { useParams } from "react-router-dom";

const BusinessDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Business Details</h1>
      <p>Business ID: {id}</p>
    </div>
  );
};

export default BusinessDetails;
