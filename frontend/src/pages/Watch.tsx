import { ArrowLeftIcon } from '@heroicons/react/outline';
import useFetchMovie from '../hooks/useFetchMovie';
import { useNavigate, useParams } from 'react-router-dom';

export default function WatchPage() {
  const navigateTo = useNavigate();
  const { id } = useParams() as { id: string };
  const { data, loading, error } = useFetchMovie(id);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error || !data) {
    return <p>{error}</p>;
  }
  const { title, videoUrl } = data;
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full flex items-center gap-8 p-4 z-10 bg-black bg-opacity-80">
        <ArrowLeftIcon
          onClick={() => navigateTo('/browse')}
          className="w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching:</span> {title}
        </p>
      </nav>
      <iframe
        className="h-full w-full"
        width="1895"
        height="712"
        src={videoUrl}
        title={title}
        style={{ border: 0 }}
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
}
