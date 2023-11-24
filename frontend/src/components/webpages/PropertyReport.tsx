import { FC } from 'react';
import { useParams } from 'react-router-dom';
// Import any subcomponents you might need

const PropertyReport: FC = () => {
    const { acronym } = useParams();
  return (
    <div>
      <h1>{acronym}</h1>
    </div>
  );
};

export default PropertyReport;