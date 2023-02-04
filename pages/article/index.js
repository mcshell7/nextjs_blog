import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/Articles";
import {fetchAPI} from "../../lib/api";

const Blog = ({ articles, navMenu, homepage }) => {

    return (
        <Layout navMenu={navMenu} headerClass="header__single">
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
    const [articlesRes, navMenuRes, homepageRes] = await Promise.all([
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
            navMenu: navMenuRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}
// export async function getStaticPaths(context) {
//     // Get total number of posts from API.
//     const totalPages = await getTotalPagesFromAPI()
//     const numberOfPages = Math.ceil(totalPages / 10)
//
//     // Build paths `blog/0`, `blog/1` ...etc.
//     const paths = Array(numberOfPages)
//         .fill(0)
//         .map((_, page) => ({
//             params: {
//                 page: `${page + 1}`,
//             },
//         }))
//
//     return {
//         paths,
//         fallback: "false",
//     }
// }




export default Blog;