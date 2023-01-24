import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/Articles";
import {fetchAPI} from "../../lib/api";


const Blog = ({ articles, headerNav, homepage }) => {

    return (
        <Layout headerNav={headerNav} headerClass="header__single">
            <Seo seo={homepage.attributes.seo} />
                <div className="container container-lg">
                    {/*<h1>{category.attributes.name}</h1>*/}
                    <Articles articles={articles} title="Blog" />
                </div>
        </Layout>
    );
};
export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, headerNavRes, homepageRes] = await Promise.all([
        fetchAPI("/articles", { populate: ["image", "category"] }),
        fetchAPI("/navs", { populate: "*" }),
        fetchAPI("/homepage", {
            populate: {
                seo: { populate: "*" },
            },
        }),
    ]);
    return {
        props: {
            articles: articlesRes.data,
            headerNav: headerNavRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}

export default Blog;