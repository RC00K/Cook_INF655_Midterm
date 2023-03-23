import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './Banner/Banner';
import Features from './Features';
import ProductCollection from './Collection/ProductCollection';
import DownloadOfMonth from './DownloadOfMonth';
import ProductListViewMore from '../components/Product/ProductListViewMore';

export default function HomePage() {
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