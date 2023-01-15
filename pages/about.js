import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";
const About = ({headerNav, about}) => {

    return (
        <Layout headerNav={headerNav} headerClass="header__single" >
            <main className="main">
                <div className="container container-sm">
                    <AboutSection about={about} />
                </div>
            </main>
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