import { useQuery, gql } from '@apollo/client';

//your query
const GET_VIDEOS = gql `
    query {
      videos {
        title
        id
        url
      }
    }
  `
export default function VideoList() {
  const { loading, error, data } = useQuery(GET_VIDEOS);

  if (loading) {
    return (
      <div className="App">
        <p>loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='App'>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  //output query
  return (
    <div>
      {data.videos.map((video) => (
        <div key={video.id}>
          <p>{video.id}</p>
          <p>{video.title}</p>
          <p>{video.url}</p>
        </div>
      ))}
    </div>
  );
}
