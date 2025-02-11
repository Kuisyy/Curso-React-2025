import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getImageUrl, getMovieDetails } from "../services/tmdb";
import { PacmanLoader } from "react-spinners";

const MovieDetail = () => {
  const { id } = useParams(); // Obtienes la ID de la URL
  const { data, loading, error } = useFetch(() => getMovieDetails(Number(id)));

  if (error) {
    return (
      <div className="text-center p-10">
        <h2 className="text-red-600 font-bold text-2xl">Error</h2>
        <p className="text-xl font-medium">{error?.message}</p>
        <Link to="/" className="text-blue-600">Volver al inicio</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader color="#e3ff00" margin={10} />
      </div>
    );
  }

  return (
      <div className="max-w-4xl mx-auto">
        {/* Imagen principal */}
        <div className="relative h-96 mb-8">
          <img
            src={getImageUrl(data.backdrop_path)}
            alt={data.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Información de la película */}
        <div className="flex mt-5">
          {/* Título y Póster */}
          <div className="w-1/3">
            <img
              src={getImageUrl(data.poster_path)}
              alt={data.title}
              className="w-full h-auto object-contain"
            />
           <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-6 mt-5 rounded-lg shadow-2xl">
              {/* Puntuación */}
              <p className="font-semibold text-2xl text-yellow-400 mb-2">
                Puntuación: <span className="text-white">{data.vote_average} / 10</span>
              </p>
              
              {/* Fecha de salida */}
              <p className="font-semibold text-xl text-white mb-2">
                <span className="text-cyan-300">Fecha de salida:</span> {data?.release_date ? new Date(data.release_date).toLocaleDateString() : "No disponible"}
              </p>
              
              {/* Duración */}
              <p className="font-semibold text-xl text-white">
                <span className="text-cyan-300">Duración:</span> {data?.runtime ? `${data.runtime} minutos` : "No disponible"}
              </p>
            </div>
          </div>
          <div className="w-2/3 pl-5">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-gray-700 mt-2">{data.overview}</p>
            <p className="mt-3 font-semibold text-xl">Género: {
            data.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>

        {/* Trailer */}
        {data.videos?.results?.length > 0 && (
          <div className="mt-5">
            <h2 className="text-2xl font-bold">Trailer</h2>
            <div className="mt-3">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
  );
};

export default MovieDetail;
