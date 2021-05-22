import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;700;900&display=swap"
                rel="stylesheet"/>
          <link href="/css/bootstrap-4.4.1.css" rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>

        {/* <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> */}
        <script src="/js/jquery-3.4.1.min.js" />
        {/* <!-- Include all compiled plugins (below), or include individual files as needed -->  */}
        <script src="/js/popper.min.js" />
        <script src="/js/bootstrap-4.4.1.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
