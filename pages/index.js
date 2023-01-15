import Articles from "../components/Articles";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { fetchAPI } from "../lib/api";
import StdSection from "../components/StdSection";
import Button from "../components/UI/Button";
import {getStrapiMedia} from "../lib/media";
import button from "../components/UI/Button";
import Accordion from "../components/UI/Accordion";
import HeroStyleOne from "../components/HeroStyleOne";
import BrandsList from "../components/BrandsList";
import Form__old from "../components/Form";
import ContactSection from "../components/ContactSection";
import Summary from "../components/Summary";
import Heading from "../components/Heading";

const Home = ({ articles, headerNav, homepage, nav }) => {

  const homeData = homepage.attributes;
  const { text, theme, href } = homepage.attributes.FirstScreen.btn;

  const button = <Button text={text} theme={theme} href={href} />;
  const imageUrl = getStrapiMedia(homeData.FirstScreen.img);

  return (
      <Layout headerNav={headerNav}>
        <Seo seo={homeData.seo} />
        <StdSection text={homeData.FirstScreen.text} title={homeData.FirstScreen.title} subtitle={homeData.FirstScreen.subtitle} button={button}  image={imageUrl}/>
        <Summary />
        <section className="section section-about">
          <div className="container">
            <div className="inner flex">
              <div className="left">
                <Heading tag="h2" align="left" theme="dark" text="About Me" />
                <p>
                  Hello! My name is Michael and I enjoy creating things that live on the internet.
                  Daily, I'm using modern frontend technologies that bring the creative process to life just as designers intended them to be.
                </p>
                <p>
                  Right now you can find me hacking away primarily with <mark>React.js</mark>, <mark>Next.js</mark> ,
                  <mark>Strapi</mark> headless CMS and in general anything JavaScript, HTML and CSS related.
                </p>
                <p>
                  Before I arrived in America, I worked as a UI Developer for <a href="siteplus.com">Siteplus</a>,
                  helping craft design systems and building parts of a website builder for multi-million dollar companies.
                </p>
              </div>

              <div className="right">
                <div className="img">
                  <img src="https://hamadev.net/assets/img/portfolio/avatar.jpg" target="_blank" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline section light">
          <div className="container">
            <div className="inner">
              <Heading tag="h2" align="left" theme="dark" text="Work experience" />
              <div className="big-text">
                <p>
                  Here's a brief rundown of my most recent experiences.
                </p>
              </div>
              <div className="timeline__list">
                <div className="timeline__item">
                  <div className="timeline__item-left">
                    <Heading tag="h4" align="left" theme="dark" text="Pictures Editor" />
                    <Heading tag="h5" align="left" theme="dark" text="mign.design" />
                    <div className="date-mc">March 2022 - June 2022</div>
                  </div>
                  <div className="timeline__item-right">
                    <p>Helped development technology for young mothers to feed babies using artificial intelligence.</p>
                  </div>
                </div>

                <div className="timeline__item">
                  <div className="timeline__item-left">
                    <Heading tag="h4" align="left" theme="dark" text="Middle Front-end Developer" />
                    <Heading tag="h5" align="left" theme="dark" text="Siteplus " />
                    <div className="date-mc">March 2021 - October 2021</div>
                  </div>
                  <div className="timeline__item-right">
                    <p>Worked as the middle Front-end Developer for the firm.Created website builder for hosting companies, domain registrars, telcos, and agencies.</p>
                    <p>
                      Helped development of a reusable UI component library.
                      Responsible for developing solutions for multi-million dollar enterprise clients, utilizing React for the frontend.
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__item-left">
                    <Heading tag="h4" align="left" theme="dark" text="Full Stack Web Developer " />
                    <Heading tag="h5" align="left" theme="dark" text="Web Technologies" />
                    <div className="date-mc">November 2019 - December 2020</div>
                  </div>
                  <div className="timeline__item-right">
                    <p>
                      Worked as the main Full Stack Developer for the firmWorked closely with programmers and clients to meet project requirements, goals, and desired functionality.
                      Created custom websites to client’s specific order that varied in complexity on different topics, from the beginning to the finished product on the Diafan CMS system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq bg-dark">
          <div className="container">
            <div className="inner flex">
              <div className="flex-left">
                <HeroStyleOne />
              </div>
              <div className="flex-right flex-accordion flex--shrink-0">
                <Accordion/>
              </div>
            </div>
            <div className="brands">
              <BrandsList />
            </div>
          </div>
        </section>

        <ContactSection/>
        <section className="section section-articles">
          <div className="container container-sm">
            <Articles articles={articles} />
          </div>
        </section>
      </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, headerNavRes, homepageRes, navRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/navs", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        FirstScreen: {
          populate: {
            text: "*",
            subtitle: "*",
            btn: "*",
            title: "*",
            img: "*"
          }
        },
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

export default Home;