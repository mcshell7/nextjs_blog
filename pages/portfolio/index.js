import Seo from "../../components/seo";
import Layout from "../../components/layout";
import {fetchAPI} from "../../lib/api";
import PortfolioCard from "../../components/PortfolioCard";
import PortfolioList from "../../components/PortfolioList";

const Portfolio = ({ items, headerNav, homepage }) => {


    return (
        <Layout headerNav={headerNav} headerClass="header__single">
            <Seo seo={homepage.attributes.seo} />
            <div className="container container-lg">
                <PortfolioList items={items} title="Portfolio" />
            </div>
        </Layout>
    );
};
export async function getStaticProps() {
    // Run API calls in parallel
    const [itemsRes, headerNavRes, homepageRes] = await Promise.all([
        fetchAPI("/portfolios", { populate: ["image", "client"] }),
        fetchAPI("/navs", { populate: "*" }),
        fetchAPI("/homepage", {
            populate: {
                seo: { populate: "*" },
            },
        }),
    ]);

    return {
        props: {
            items: itemsRes.data,
            headerNav: headerNavRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}

export default Portfolio;