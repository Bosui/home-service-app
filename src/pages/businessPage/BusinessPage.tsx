// src/pages/businessPage/BusinessPage.tsx

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchBusiness = async (id: string) => {
  // Simuliuotas API užklausos pavyzdys
  const response = await fetch(`/api/businesses/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch business data");
  }
  return response.json();
};

const BusinessPage = () => {
  const { id } = useParams<{ id: string }>(); // Gauti ID iš maršruto
  const { data, isLoading, error } = useQuery(["business", id], () =>
    fetchBusiness(id!)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default BusinessPage;
