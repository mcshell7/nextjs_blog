import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";
const About = ({navMenu, about}) => {

    return (
        <Layout mainClass="main--about" navMenu={navMenu} headerClass="header__single" >
            <div className="container container-sm">
                <AboutSection about={about} />
            </div>
        </Layout>
    );
};
export async function getStaticProps() {
    // Run API calls in parallel
    const [navMenuRes, aboutRes] = await Promise.all([
        fetchAPI("/navs", { populate: "*" }),
        fetchAPI("/about", {
            populate: "*"
        })
    ]);

    return {
        props: {
            navMenu: navMenuRes.data,
            about: aboutRes.data
        },
        revalidate: 1,
    };
}


export default About;