import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";


const layoutList = {
  "MainLayout": MainLayout
}

function MyApp({ Component, pageProps }) {
  
  const Layout = layoutList[Component.layout] || MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
