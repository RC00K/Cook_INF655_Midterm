import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductImageGallery from './ProductImageGallery';
import ProductListViewMore from './ProductListViewMore';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/config';
import { cartActions } from '../../store/CartSlice';
import { useToast } from '@chakra-ui/react';
import useCart from '../../firebase/useCart';
import { formatPrice } from '../../helper';

function ProductDetails() {
    // Get the product id from the url
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const { isLoggenIn } = useSelector((state) => state.user);
    const { items } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    
    useEffect(() => {
        const getProduct = async () => {
            const productRef = doc(firestore, 'products', id);
            const productSnapshot = await getDoc(productRef);
            if(productSnapshot.exists()) {
                setProduct({
                    id: productSnapshot.id,
                    ...productSnapshot.data(),
                });
            } else {
                navigate('/product');
            }
        };
        getProduct();
    }, [id, navigate]);

    useEffect(() => {
        if(product != null) {
            setQuantity(1);
            setSelectedImage(product?.images[0]);
        }
    }, [product]);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product?.images[0]);

    const isItemInCart = items.find(
        (e) => e.productId === id
    );

    useEffect(() => {
        if(isItemInCart) {
            setQuantity(isItemInCart.quantity);
        } else {
            setQuantity(1);
        }
    }, [isItemInCart]);

    const { handleCartUpdate } = useCart();

    useEffect(() => {
        handleCartUpdate().catch((err) => console.error(err));
    }, [items]);

    const handleAddToCart = async () => {
        if(isItemInCart) {
            toast({
                status: "error",
                description: "Product is already in cart",
                isClosable: true,
                duration: 3000,
            });
            return;
        }
        if(!isLoggenIn) {
            navigate('/signin?return_url=/product/' + id);
            return;
        }
        let cartItem = {
            id: id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity,
        };
        dispatch(cartActions.ADD_ITEM({ cartItem }));
        toast({
            status: "success",
            description: "Product added to cart",
            isClosable: true,
            duration: 3000,
        });
    };
    
    return (
        <div key={product?.id} className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-left text-xl font-bold">
                {/* Go back to products */}
                <a
                    href="/product"
                    className="mt-2 font-semibold hover:text-indigo-600 text-sm"
                >
                    Go Back
                </a>
            </h2>
            <h2 className="text-left text-2xl font-bold mb-8">{product.name} Pack</h2>
            <hr className="mb-8" />
            <div className="flex flex-col justify-between lg:flex-row gap-16" key={product.id}>
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img
                        src={selectedImage}
                        alt={product.id}
                        className="w-full h-full aspect-auto object-cover rounded-xl"
                    />
                </div>
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <ProductImageGallery 
                        product={product}
                        setSelectedImage={setSelectedImage}
                    />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    {/* Product Details */}
                    <div className="flex flex-col gap-4 lg:w-2/4">
                        <div>
                            <span className="text-gray-400 font-semibold">{product.type}</span>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                        </div>
                        <p className="text-gray-700">{product.description}</p>
                        <div className="flex flex-row items-center gap-4">
                            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                            <button
                                className="px-4 py-2 ml-4 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
                                onClick={handleAddToCart}
                                >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-xl font-bold">Features</h2>
                        {product.features && (
                            <ul className="mt-2 list-disc list-inside">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <ProductListViewMore />
        </div>
    );
}

export default ProductDetails;
