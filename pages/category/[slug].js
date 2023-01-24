import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/Articles";

import { fetchAPI } from "../../lib/api";

const Category = ({ category, categories, headerNav }) => {
    const seo = {
        metaTitle: category.attributes.name,
        metaDescription: `All ${category.attributes.name} articles`,
    };
    console.log(category.attributes);
    return (
        <Layout headerNav={headerNav} headerClass="header__single" >
            <Seo seo={seo} />
            <div className="category__list">
                <div className="container container-lg">
                    <Articles articles={category.attributes.articles.data} title={category.attributes.name} />
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

    return {
        paths: categoriesRes.data.map((category) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI("/categories", {
        filters: { slug: params.slug },
        populate: {
            articles: {
                populate: "*",
            },
        },
    });
    const allCategories = await fetchAPI("/categories");
    const headerNavRes = await fetchAPI("/navs", { populate: "*" });
    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories,
            headerNav: headerNavRes.data
        },
        revalidate: 1,
    };
}

export default Category;