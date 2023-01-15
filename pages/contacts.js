import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { GlobalContext } from "../pages/_app";

const Contacts = ({contacts, headerNav }) => {
    return (
        <div>
            <Layout headerNav={headerNav}>
                <Seo seo={GlobalContext} />
                <div className="articles__section">
                    <div className="container container-sm">
                        <h1>{contacts.attributes.title}</h1>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export async function getStaticProps() {
    // Run API calls in parallel
    const [ contactsRes, navsRes] = await Promise.all([
        fetchAPI("/contact", {
            populate: {
                button: {populate: "*"},
            }
        }),
        fetchAPI("/navs", { populate: "*" }),
    ]);

    return {
        props: {
            contacts: contactsRes.data,
            navs: navsRes.data
        },
        revalidate: 1,
    };
}


export default Contacts;