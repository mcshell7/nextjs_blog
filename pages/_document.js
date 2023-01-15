import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* eslint-disable-next-line */}

                    {/*<link*/}
                    {/*    rel="stylesheet"*/}
                    {/*    href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"*/}
                    {/*/>*/}
                    {/*<script*/}
                    {/*    async*/}
                    {/*    src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"*/}
                    {/*/>*/}
                    {/*<script*/}
                    {/*    async*/}
                    {/*    src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"*/}
                    {/*/>*/}
                    {/*<script*/}
                    {/*    async*/}
                    {/*    src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"*/}
                    {/*/>*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;700;800;900&display=swap"
                                rel="stylesheet" />
                </Head>
                <body>
                <Main />
                <NextScript />

                </body>
            </Html>
        );
    }
}

export default MyDocument;
