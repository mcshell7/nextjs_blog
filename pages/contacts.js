import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { GlobalContext } from "../pages/_app";
import Form from "../components/Form";
import Heading from "../components/Heading";
import GetImage from "../components/GetImage";

const Contacts = ({contacts, navMenu }) => {
    console.log(contacts.attributes);
    return (
        <Layout mainClass="main--contacts" headerClass="header__single" navMenu={navMenu}>
            <Seo seo={GlobalContext} />
            <Heading align="center" text={contacts.attributes.title} theme="" />

            <div className="contacts__form">
                <div className="container container-sm">
                    <Form />
                </div>
            </div>
        </Layout>
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
            navMenu: navsRes.data
        },
        revalidate: 1,
    };
}


export default Contacts;