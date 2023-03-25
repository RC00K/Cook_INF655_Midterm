// Abstract Fun Graphic Pack
import WelcomeAbstractFun from '../../images/AbstractFunPack/WelcomeAbstractFun.jpg';
import SocialAbstractFun from '../../images/AbstractFunPack/SocialAbstractFun.jpg';
import GroupAbstractFun from '../../images/AbstractFunPack/GroupAbstractFun.jpg';
import DistanceAbstractFun from '../../images/AbstractFunPack/DistanceAbstractFun.jpg';
// Abstract Fun Invert Graphic Pack
import WelcomeAbstractFunInvert from '../../images/AbstractFunPack/WelcomeAbstractFunInvert.jpg';
import SocialAbstractFunInvert from '../../images/AbstractFunPack/SocialAbstractFunInvert.jpg';
import GroupAbstractFunInvert from '../../images/AbstractFunPack/GroupAbstractFunInvert.jpg';
import DistanceAbstractFunInvert from '../../images/AbstractFunPack/DistanceAbstractFunInvert.jpg';
// Burst of Color Graphic Pack
import WelcomeBurstOfColor from '../../images/BurstOfColorPack/WelcomeBurstOfColor.jpg';
// Grunge Vibes Graphic Pack
import WelcomeGrungeVibes from '../../images/GrungeVibesPack/WelcomeGrungeVibes.jpg';
// New Tear Graphic Pack
import WelcomeTear from '../../images/NewTearPack/WelcomeTear.jpg';
import ConnectTear from '../../images/NewTearPack/ConnectTear.jpg';
import FollowTear from '../../images/NewTearPack/FollowTear.jpg';
import MaskTear from '../../images/NewTearPack/MaskTear.jpg';

import WelcomeNewFuture from '../../images/NewVintageFuturePack/WelcomeNewFuture.jpg';
import WelcomeOOTW from '../../images/OutOfThisWorldPack/WelcomeOOTW.jpg';
import WelcomeRV from '../../images/RetroVibesPack/WelcomeRV.jpg';
import WelcomeLightSocialDesign from '../../images/SocialDesignPack/WelcomeLightSocialDesign.jpg';
import WelcomeDarkSocialDesign from '../../images/SocialDesignPack/WelcomeDarkSocialDesign.jpg';
import WelcomeSplitBlue from '../../images/SplitScreenPack/WelcomeSplitBlue.jpg';
import WelcomeSplitYellow from '../../images/SplitScreenPack/WelcomeSplitYellow.jpg';
import WelcomeLightTouch from '../../images/TouchOfModernPack/WelcomeLightTouch.jpg';
import WelcomeDarkTouch from '../../images/TouchOfModernPack/WelcomeDarkTouch.jpg';

// PSD Graphic Pack
import WelcomePS from '../../images/PlayfulSummerPack/WelcomePS.jpg';
import ConnectPS from '../../images/PlayfulSummerPack/ConnectPS.jpg';
import GivingPS from '../../images/PlayfulSummerPack/GivingPS.jpg';
import BaptismPS from '../../images/PlayfulSummerPack/BaptismPS.jpg';

// Swirled Graphic Pack
import WelcomeSwirled from '../../images/SwirledPack/WelcomeSwirled.jpg';
import ConnectSwirled from '../../images/SwirledPack/ConnectSwirled.jpg';
import FollowSwirled from '../../images/SwirledPack/FollowSwirled.jpg';
import StaySafeSwirled from '../../images/SwirledPack/StaySafeSwirled.jpg';

const products = [
    {
        id: 1,
        name: 'Abstract Fun',
        type: 'Graphic Pack',
        description: 'Shapes are fun and so abstract. Let your audience know that you are fun and abstract.',
        price: 15,
        imageSrc: WelcomeAbstractFun,
        imageAlt: 'Abstract fun is the best kind of fun.',
        images: [
            WelcomeAbstractFun,
            SocialAbstractFun,
            GroupAbstractFun,
            DistanceAbstractFun
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 2,
        name: 'Abstract Fun Invert',
        type: 'Graphic Pack',
        description: 'Inverted shapes are fun and so abstract. Let your audience know that you are fun and abstract.',
        price: 15,
        imageSrc: WelcomeAbstractFunInvert,
        imageAlt: 'Abstract fun is the best kind of fun.',
        images: [
            WelcomeAbstractFunInvert,
            SocialAbstractFunInvert,
            GroupAbstractFunInvert,
            DistanceAbstractFunInvert
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 3,
        name: 'Burst of Color',
        type: 'Graphic Pack',
        description: 'Let the colors pop of your screen with this burst of color.',
        price: 2,
        imageSrc: WelcomeBurstOfColor,
        imageAlt: 'Burst of color is the best kind of color.',
        images: [
            WelcomeBurstOfColor,
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 4,
        name: 'Grunge Vibes',
        type: 'Graphic Pack',
        description: 'Our high-quality grunge textures that is exclusively free to download this month.',
        price: 'Free',
        imageSrc: WelcomeGrungeVibes,
        imageAlt: 'Grunge is a new kind of vibe.',
        images: [
            WelcomeGrungeVibes,
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 5,
        name: 'Tear',
        description: 'It never hurts to tear things up and make a mess of things. Have some fun with this vintage future pack.',
        type: 'Graphic Pack',
        price: 15,
        imageSrc: WelcomeTear,
        imageAlt: 'Tear things up and make a mess of things.',
        images: [
            WelcomeTear,
            ConnectTear,
            FollowTear,
            MaskTear
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 6,
        name: 'Vintage Future',
        type: 'Graphic Pack',
        price: 15,
        imageSrc: WelcomeNewFuture,
        imageAlt: 'Vintage is the new future.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 7,
        name: 'Out of this World',
        type: 'Graphic Pack',
        price: 5,
        imageSrc: WelcomeOOTW,
        imageAlt: 'Out of this world in to the next.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 8,
        name: 'Playful Summer',
        type: 'Graphic Pack',
        description: 'Summer is here and its time for some fun. This graphic can be used any accation and will most certainly bring the good vibes to your audience.',
        price: 25,
        imageSrc: WelcomePS,
        imageAlt: 'Playful summers are sure to come.',
        images: [
            WelcomePS,
            ConnectPS,
            GivingPS,
            BaptismPS
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 9,
        name: 'Retro Vibes',
        type: 'Graphic Pack',
        price: 25,
        imageSrc: WelcomeRV,
        imageAlt: 'Retro vibes are the best vibes.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 10,
        name: 'Social Design Light',
        type: 'Graphic Pack',
        price: 25,
        imageSrc: WelcomeLightSocialDesign,
        imageAlt: 'Social just got a whole lot lighter.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 11,
        name: 'Social Design Dark',
        type: 'Graphic Pack',
        price: 25,
        imageSrc: WelcomeDarkSocialDesign,
        imageAlt: 'Social just got a whole lot darker.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 12,
        name: 'Split Screen Blue',
        type: 'Graphic Pack',
        price: 10,
        imageSrc: WelcomeSplitBlue,
        imageAlt: 'Split the screen to make it blue.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 13,
        name: 'Split Screen Yellow',
        type: 'Graphic Pack',
        price: 10,
        imageSrc: WelcomeSplitYellow,
        imageAlt: 'Split the screen to make it yellow.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 14,
        name: 'Swirled',
        type: 'Graphic Pack',
        price: 15,
        imageSrc: WelcomeSwirled,
        imageAlt: 'Swirled is the new way to go.',
        images: [
            WelcomeSwirled,
            ConnectSwirled,
            FollowSwirled,
            StaySafeSwirled
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 15,
        name: 'Touch Light',
        type: 'Graphic Pack',
        price: 15,
        imageSrc: WelcomeLightTouch,
        imageAlt: 'Touch the light the modern way.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 16,
        name: 'Touch Dark',
        type: 'Graphic Pack',
        price: 15,
        imageSrc: WelcomeDarkTouch,
        imageAlt: 'Touch the dark the modern way.',
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
];

export default products;