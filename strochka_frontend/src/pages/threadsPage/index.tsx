import { Link } from 'react-router-dom';
import { routerConfig } from '@/lib/routerConfig';
import { trpc } from '@/lib/trpcConfig';

const ThreadsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>
            <Link to={routerConfig.appRoutes.getOneThreadUrl({ ideaNick: idea.nick })}>
              {idea.name}
            </Link>
          </h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreadsPage;
