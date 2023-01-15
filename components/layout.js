import Header from "./Header";
import {fetchAPI} from "../lib/api";
import Footer from "./Footer";

const Layout = ({ children, headerNav, seo, headerClass }) => (
    <>
        <Header headerClass={headerClass} headerNav={headerNav}/>
        {children}
        <Footer  />
    </>
);

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI("/navs", { populate: "*" });
    const allCategories = await fetchAPI("/categories");

    return {
        props: {
            category: matchingCategories.data[0],
            headerNav: allCategories,
        },
        revalidate: 1,
    };
}

export default Layout;