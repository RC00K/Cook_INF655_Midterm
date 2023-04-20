import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import products from '../Product/ProductData';
import ProductListViewMore from './ProductListViewMore';
import { fs, auth } from '../../firebase';
import { collection, doc, getDoc, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const ProductDetails = () => {
    const { productId } = useParams();
    
    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    
    const [selectedImage, setSelectedImage] = useState(0);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(selectedProduct);
    };

    const [product, setProduct] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            });
        }, []);
        return uid;
    };

    const uid = GetUserUid();

    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    const uid = user.uid;
                    const docRef = doc(collection(fs, "users"), uid);
                    const docSnap = getDoc(docRef);
                    docSnap.then((snapshot) => setUser(snapshot.data().name));
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user;
    };

    const user = GetCurrentUser();

    const navigate = useNavigate();
    
    const AddToCart = (product) => {
        if (uid !== null) {
            console.log(uid[0].uid);
            addDoc(collection(fs, `cart-${uid[0].uid}`), {
                product, quantity: 1
            }).then(() => {
                setSuccessMsg("Product added to cart");
            }).catch((error) => {
                setErrorMsg(error.message);
            });
        } else {
            setErrorMsg("You must be signed in to add to cart");
            navigate('/signin');
        }
    }

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-left text-xl font-bold">
                <a 
                    href="/product"
                    className="mt-2 font-semibold hover:text-indigo-600 text-sm"
                >
                    Go Back
                </a>
            </h2>
            <h2 className="text-left text-2xl font-bold mb-8">{selectedProduct.name} Pack</h2>
            <hr className="mb-8" />
            {selectedProduct && (
                <div className="flex flex-col justify-between lg:flex-row gap-16" key={selectedProduct.id}>
                    {/* Product images */}
                    <div className="flex flex-col gap-6 lg:w-2/4">
                        {selectedProduct.images?.length > 0 && (
                            <>
                                <img
                                    src={selectedProduct.images[selectedImage]}
                                    alt={selectedProduct.name}
                                    className="w-full h-full aspect-auto object-cover rounded-xl"
                                />
                                <div className="flex flex-row justify-between h-24">
                                    {selectedProduct.images.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={selectedProduct.name}
                                            className={`w-24 h-24 rounded-md object-cover shadow-md cursor-pointer ${index === selectedImage ? "border-2 border-black" : ""
                                                }`}
                                            onClick={() => setSelectedImage(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {/* Product Details */}
                    <div className="flex flex-col gap-4 lg:w-2/4">
                        <div>
                            <span className="text-gray-400 font-semibold">{selectedProduct.type}</span>
                            <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
                        </div>
                        <p className="text-gray-700">{selectedProduct.description}</p>
                        <h6 className="text-2xl font-semibold">${selectedProduct.price}</h6>
                        {successMsg &&
                        <>
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Success! </strong>
                                <span className="block sm:inline">{successMsg}</span>
                            </div>
                        </>
                        }
                        {errorMsg &&
                        <>
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error! </strong>
                                <span className="block sm:inline">{errorMsg}</span>
                            </div>
                        </>
                        }
                        <div className="flex flex-row items-center gap-12">
                            <button 
                                className="bg-black text-white font-semibold py-3 px-6 rounded-xl h-full"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Features</h2>
                            {selectedProduct.features && (
                                <ul className="mt-2 list-disc list-inside">
                                    {selectedProduct.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <ProductListViewMore  />
        </div>
    );
}

export default ProductDetails;
