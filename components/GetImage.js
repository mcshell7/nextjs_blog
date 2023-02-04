import {getStrapiMedia} from "../lib/media";

const GetImage = ({data}) => {

    const url = data != null ? getStrapiMedia(data) : null;

    return (
        <>
            {
                url !== null ?
                    <img
                        src={url} alt=""
                        className="hookImg"
                        data-src={url}
                        data-srcset={url}
                    />
                    :
                    <img
                        src="/img/image-not-found.png"
                        alt="image-not-found.png"
                        className="hookImg"
                        data-src="/img/image-not-found.png"
                        data-srcset="/img/image-not-found.png"
                    />
            }
        </>
    );
};

export default GetImage;