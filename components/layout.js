import Header from "./Header";
import {fetchAPI} from "../lib/api";
import Footer from "./Footer";
import cx from "classnames";
import styles from "../styles/footer.module.scss";

const Layout = ({ children, headerNav, seo, headerClass, mainClass }) => (
    <>
        <Header headerClass={headerClass} headerNav={headerNav}/>
        <main
            className={
                cx(
                    { [`${'main'} ${mainClass !== undefined ? mainClass : ''}`]: true}
                )
            }
        >
            {children}
        </main>
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