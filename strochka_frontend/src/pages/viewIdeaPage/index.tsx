import { useParams } from 'react-router-dom';
import { TAppRoutesParams } from '../../lib/routerConfig';

const ViewIdeaPage = () => {
  const { ideaNick } = useParams<TAppRoutesParams['viewIdea']>();
  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description of idea 1...</p>
      <div>
        <p>Text paragraph 1 of idea 1...</p>
        <p>Text paragraph 2 of idea 1...</p>
        <p>Text paragraph 3 of idea 1...</p>
      </div>
    </div>
  );
};

export default ViewIdeaPage;
