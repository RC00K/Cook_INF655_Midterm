import Banner from './Extra/Banner';
import Features from './Extra/Features';
import ProductCollection from '../components/Product/ProductCollection';
import DownloadOfMonth from './Extra/DownloadOfMonth';
import ProductListViewMore from '../components/Product/ProductListViewMore';

export default function Home() {
    return (
        <>
        <Banner />
        <Features />
        <ProductListViewMore />
        <ProductCollection  />
        <DownloadOfMonth />
        </>
    );
}