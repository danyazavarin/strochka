import { useParams } from 'react-router-dom';
import type { TAppRoutesParams } from '@/lib/routerConfig';
import { trpc } from '@/lib/trpcConfig';

const OneThreadPage = () => {
  const { ideaNick } = useParams<TAppRoutesParams['getOneThreadUrl']>();

  if (!ideaNick) {
    return <span>Invalid idea nick</span>;
  }

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
    ideaNick,
  });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data.idea) {
    return <span>Idea not found</span>;
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div>{data.idea.text}</div>
    </div>
  );
};

export default OneThreadPage;
