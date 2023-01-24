import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import PortfolioSingle from "../../components/PortfolioSingle";

const Portfolio = ({ article, headerNav }) => {

    // const imageUrl = getStrapiMedia(article.attributes.image);

    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        portfolio: true,
    };
    const item = {
        title: article.attributes.name,
        content: article.attributes.content,
        date: article.attributes.createdAt,
        img: article.attributes.image,
        backTo: "portfolio"
    }

    return (
        <Layout  headerClass="header__single" headerNav={headerNav.data}>
            <Seo seo={seo} />
            <PortfolioSingle item={item} />
        </Layout>
    );
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/portfolios", { fields: ["slug"] });

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
    const articlesRes = await fetchAPI("/portfolios", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    });
    const headerNavRes = await fetchAPI("/navs");

    return {
        props: { article: articlesRes.data[0], headerNav: headerNavRes },
        revalidate: 1,
    };
}

export default Portfolio;