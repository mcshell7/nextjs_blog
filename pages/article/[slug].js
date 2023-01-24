import Moment from "react-moment";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Single from "../../components/Single";

const Article = ({ article, headerNav }) => {

    // const imageUrl = getStrapiMedia(article.attributes.image);
    console.log(article.attributes);
    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true,
    };
    const single = {
        title: article.attributes.title,
        content: article.attributes.content,
        date: article.attributes.createdAt,
        author: article.attributes.name,
        img: article.attributes.image,
        imgUrl: article.attributes.image.data.attributes.url,
        backTo: "article",
        authorName: article.attributes.author.data.attributes.name,
        authorImg: article.attributes.author.data.attributes.picture,
    }

    return (
        <Layout headerClass="header__single" headerNav={headerNav}>
            {/*<Seo seo={seo} />*/}
            <Single single={single} />
        </Layout>
    );
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture"],
    });
    const headerNavRes = await fetchAPI("/navs");

    return {
        props: { article: articlesRes.data[0], headerNav: headerNavRes.data },
        revalidate: 1,
    };
}

export default Article;