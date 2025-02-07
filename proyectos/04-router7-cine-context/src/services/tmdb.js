const apiToken = import.meta.env.VITE_API_TOKEN;
const apiUrl = import.meta.env.VITE_API_URL;
const apiUrlImages= import.meta.env.VITE_API_URL_IMAGES;

export const IMAGES_SIZES={
    POSTER:"w500",
    BACKDROP:"original"
}


export const getImageUrl =  (path,size=IMAGES_SIZES.POSTER) => {
    if(!path){
        return "/placeholder-movie.jpg"
    }
    return `${apiUrlImages}${size}/${path}`;
};

const fetchFromApi = async (endpoint,options={}) => {
    try {
        const response = await fetch(`${apiUrl}${endpoint}?api_key=${apiToken}&language=es-ES&${new URLSearchParams(options)}`);
        if(!response.ok){
            throw new Error("Error en fetchFromApi");
        }
        return await response.json();
    } catch (error) {
        console.error("Error: ",error);
    }
}

export const getPopularMovies = async (page=1) => {
  return fetchFromApi("movie/popular",{page});
};

export const getMovieDetails = async (id) => {
    return fetchFromApi(`movie/${id}`);
};

export const searchMovies = async (query,page=1) => {
    return fetchFromApi(`search/movie`,{query, page});
};

export const getMovieVideos = async (id) => {
    return fetchFromApi(`movie/${id}/videos`);
};

