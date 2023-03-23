import React from 'react';
import { Link } from 'react-router-dom';

import WelcomeAbstractFun from '../../images/AbstractFunPack/WelcomeAbstractFun.jpg';
import WelcomeAbstractFunInvert from '../../images/AbstractFunPack/WelcomeAbstractFunInvert.jpg';
import WelcomeBurstOfColor from '../../images/BurstOfColorPack/WelcomeBurstOfColor.jpg';
import WelcomeGrungeVibes from '../../images/GrungeVibesPack/WelcomeGrungeVibes.jpg';
import WelcomeTear from '../../images/NewTearPack/WelcomeTear.jpg';
import WelcomeNewFuture from '../../images/NewVintageFuturePack/WelcomeNewFuture.jpg';
import WelcomeOOTW from '../../images/OutOfThisWorldPack/WelcomeOOTW.jpg';
import WelcomePS from '../../images/PlayfulSummerPack/WelcomePS.jpg';
import WelcomeRV from '../../images/RetroVibesPack/WelcomeRV.jpg';
import WelcomeLightSocialDesign from '../../images/SocialDesignPack/WelcomeLightSocialDesign.jpg';
import WelcomeDarkSocialDesign from '../../images/SocialDesignPack/WelcomeDarkSocialDesign.jpg';
import WelcomeSplitBlue from '../../images/SplitScreenPack/WelcomeSplitBlue.jpg';
import WelcomeSplitYellow from '../../images/SplitScreenPack/WelcomeSplitYellow.jpg';
import WelcomeSwirled from '../../images/SwirledPack/WelcomeSwirled.jpg';
import WelcomeLightTouch from '../../images/TouchOfModernPack/WelcomeLightTouch.jpg';
import WelcomeDarkTouch from '../../images/TouchOfModernPack/WelcomeDarkTouch.jpg';

const products = [
    {
        id: 1,
        name: 'Abstract Fun',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeAbstractFun,
        imageAlt: 'Abstract fun is the best kind of fun.',
    },
    {
        id: 2,
        name: 'Abstract Fun Invert',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeAbstractFunInvert,
        imageAlt: 'Abstract fun is the best kind of fun.',
    },
    {
        id: 3,
        name: 'Burst of Color',
        type: 'Graphic Pack',
        price: '$2',
        imageSrc: WelcomeBurstOfColor,
        imageAlt: 'Burst of color is the best kind of color.',
    },
    {
        id: 4,
        name: 'Grunge Vibes',
        type: 'Graphic Pack',
        price: 'Free',
        imageSrc: WelcomeGrungeVibes,
        imageAlt: 'Grunge is a new kind of vibe.',
    },
    {
        id: 5,
        name: 'Tear',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeTear,
        imageAlt: 'Tear things up and make a mess of things.',
    },
    {
        id: 6,
        name: 'Vintage Future',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeNewFuture,
        imageAlt: 'Vintage is the new future.',
    },
    {
        id: 7,
        name: 'Out of this World',
        type: 'Graphic Pack',
        price: '$5',
        imageSrc: WelcomeOOTW,
        imageAlt: 'Out of this world in to the next.',
    },
    {
        id: 8,
        name: 'Playful Summer',
        type: 'Graphic Pack',
        price: '$25',
        imageSrc: WelcomePS,
        imageAlt: 'Playful summers are sure to come.',
    },
    {
        id: 9,
        name: 'Retro Vibes',
        type: 'Graphic Pack',
        price: '$25',
        imageSrc: WelcomeRV,
        imageAlt: 'Retro vibes are the best vibes.',
    },
    {
        id: 10,
        name: 'Social Design Light',
        type: 'Graphic Pack',
        price: '$25',
        imageSrc: WelcomeLightSocialDesign,
        imageAlt: 'Social just got a whole lot lighter.',
    },
    {
        id: 11,
        name: 'Social Design Dark',
        type: 'Graphic Pack',
        price: '$25',
        imageSrc: WelcomeDarkSocialDesign,
        imageAlt: 'Social just got a whole lot darker.',
    },
    {
        id: 12,
        name: 'Split Screen Blue',
        type: 'Graphic Pack',
        price: '$10',
        imageSrc: WelcomeSplitBlue,
        imageAlt: 'Split the screen to make it blue.',
    },
    {
        id: 13,
        name: 'Split Screen Yellow',
        type: 'Graphic Pack',
        price: '$10',
        imageSrc: WelcomeSplitYellow,
        imageAlt: 'Split the screen to make it yellow.',
    },
    {
        id: 14,
        name: 'Swirled',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeSwirled,
        imageAlt: 'Swirled is the new way to go.',
    },
    {
        id: 15,
        name: 'Touch Light',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeLightTouch,
        imageAlt: 'Touch the light the modern way.',
    },
    {
        id: 16,
        name: 'Touch Dark',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: WelcomeDarkTouch,
        imageAlt: 'Touch the dark the modern way.',
    },
];

const ProductList = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                <div className="object-cover">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full aspect-auto object-cover rounded-xl mb-4"
                  />
                </div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-2/3 pr-6">
                    <h3 className="text-gray-900 font-semibold text-lg">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.type}</p>
                  </div>
                  <p className="text-gray-700 font-bold text-xl">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ProductList;