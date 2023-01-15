import {getStrapiMedia} from "../lib/media";

const GetImage = ({data}) => {

    const url = data.attributes.image.data !== null ? getStrapiMedia(data.attributes.image) : null;

    return (
        <>
            {
                url != null ?
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
                        data-src="../public/img/image-not-found.png"
                        data-srcset="../public/img/image-not-found.png"
                    />
            }
        </>
    );
};

export default GetImage;