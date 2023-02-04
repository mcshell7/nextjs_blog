import Moment from "react-moment";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Single from "../../components/Single";
import { useEffect } from 'react';


const Article = ({ article, navMenu, prevP, nextP  }) => {

    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true,
    };
    let imageUrl = null;
    let authName = null;
    let authImg = null;
        if (article.attributes.image.data !== null){
            imageUrl = article.attributes.image.data.attributes.url;
        }
        if (article.attributes.author.data !== null){
            authImg = article.attributes.author.data.attributes.picture;
            authName = article.attributes.author.data.attributes.name;
        }

    const single = {
        title: article.attributes.title,
        content: article.attributes.content,
        date: article.attributes.createdAt,
        author: article.attributes.name,
        img: article.attributes.image,
        imgUrl: imageUrl,
        backTo: "article",
        authorName: authName,
        authorImg: authImg,
        previousPost: prevP!=null ? prevP : null,
        nextPost: nextP!=null ? nextP : null,
    }




    return (
        <Layout headerClass="header__single" navMenu={navMenu}>
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
    const posts = await fetchAPI("/articles", { populate: ["image", "category"] });

    const currentPostIndex = posts.data.findIndex((article) => article.attributes.slug === params.slug);
    const prevPost = posts.data[currentPostIndex - 1] || posts.data[posts.length - 1];
    const nextPost = posts.data[currentPostIndex + 1] || posts.data[0];

    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture"],
    });
    const navMenuRes = await fetchAPI("/navs");

    return {
        props: {
            article: articlesRes.data[0],
            navMenu: navMenuRes.data,
            prevP: prevPost!= null ? prevPost : null,
            nextP: nextPost!= null ? nextPost : null,
        },
        revalidate: 1,
    };
}


export default Article;