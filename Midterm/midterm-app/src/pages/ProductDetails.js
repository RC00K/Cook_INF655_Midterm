import { useState } from 'react';
// PSD Graphic Pack
import WelcomePS from '../images/PlayfulSummerPack/WelcomePS.jpg';
import ConnectPS from '../images/PlayfulSummerPack/ConnectPS.jpg';
import GivingPS from '../images/PlayfulSummerPack/GivingPS.jpg';
import BaptismPS from '../images/PlayfulSummerPack/BaptismPS.jpg';
// New Tear Graphic Pack
import WelcomeTear from '../images/NewTearPack/WelcomeTear.jpg';
import ConnectTear from '../images/NewTearPack/ConnectTear.jpg';
import FollowTear from '../images/NewTearPack/FollowTear.jpg';
import MaskTear from '../images/NewTearPack/MaskTear.jpg';
// Swirled Graphic Pack
import WelcomeSwirled from '../images/SwirledPack/WelcomeSwirled.jpg';
import ConnectSwirled from '../images/SwirledPack/ConnectSwirled.jpg';
import FollowSwirled from '../images/SwirledPack/FollowSwirled.jpg';
import StaySafeSwirled from '../images/SwirledPack/StaySafeSwirled.jpg';

const ProductDetails = () => {
    const productData = [
        {
            id: 1,
            name: "Playful Summer",
            description: "Summer is here and its time for some fun. This graphic can be used any accation and will most certainly bring the good vibes to your audience.",
            price: 15,
            images: [
                WelcomePS,
                ConnectPS,
                GivingPS,
                BaptismPS
            ],
            features: [
                "Category: Graphics",
                "High Resolution: 1920x1080",
                "Photoshop File: PSD Files Included",
            ],
        },
        {
            id: 2,
            name: "New Tear",
            description: "It never hurts to tear things up and make a mess of things. Have some fun with this vintage future pack.",
            price: 15,
            images: [
                WelcomeTear,
                ConnectTear,
                FollowTear,
                MaskTear
            ],
            features: [
                "Category: Graphics",
                "High Resolution: 1920x1080",
                "Photoshop File: PSD Files Included",
            ],
        },
        {
            id: 3,
            name: "Swirled",
            description: "Twist and shout or better yet twist and swirl. This pack is perfect if you want to spice things up but stay simple.",
            price: 5,
            images: [
                WelcomeSwirled,
                ConnectSwirled,
                FollowSwirled,
                StaySafeSwirled
            ],
            features: [
                "Category: Graphics",
                "High Resolution: 1920x1080",
                "Photoshop File: PSD Files Included",
            ],
        }
    ];

    const [selectedProduct, setSelectedProduct] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                {/* Product images */}
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img
                        src={productData[selectedProduct].images[selectedImage]}
                        alt={productData[selectedProduct].name}
                        className="w-full h-full aspect-auto object-cover rounded-xl"
                    />
                    <div className="flex flex-row justify-between h-24">
                    {productData[selectedProduct].images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={productData[selectedProduct].name}
                            className={`w-24 h-24 rounded-md object-cover shadow-md cursor-pointer ${
                                index === selectedImage ? "border-2 border-black" : ""
                            }`}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                    </div>
                </div>
                {/* Product Details */}
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                    <span className="text-gray-400 font-semibold">Graphic Pack</span>
                        <h1 className="text-3xl font-bold">{productData[selectedProduct].name}</h1>
                    </div>
                    <p className="text-gray-700">{productData[selectedProduct].description}</p>
                    <h6 className="text-2xl font-semibold">${productData[selectedProduct].price}</h6>
                    <div className="flex flex-row items-center gap-12">
                        <button className="bg-black text-white font-semibold py-3 px-6 rounded-xl h-full">Add to Cart</button>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-xl font-bold">Features</h2>
                        <ul className="mt-2 list-disc list-inside">
                            {productData[selectedProduct].features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetails;
