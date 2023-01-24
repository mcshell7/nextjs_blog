import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";
const About = ({headerNav, about}) => {

    return (
        <Layout mainClass="main--about" headerNav={headerNav} headerClass="header__single" >
            <div className="container container-sm">
                <AboutSection about={about} />
            </div>
        </Layout>
    );
};
export async function getStaticProps() {
    // Run API calls in parallel
    const [headerNavRes, aboutRes] = await Promise.all([
        fetchAPI("/navs", { populate: "*" }),
        fetchAPI("/about", {
            populate: "*"
        })
    ]);

    return {
        props: {
            headerNav: headerNavRes.data,
            about: aboutRes.data
        },
        revalidate: 1,
    };
}


export default About;