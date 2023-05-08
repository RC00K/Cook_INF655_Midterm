// Product Data Array
const productData = [
    {
        id: 1,
        name: 'Abstract Fun',
        type: 'Graphic Pack',
        description: 'Shapes are fun and so abstract.',
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FWelcomeAbstractFun.jpg?alt=media&token=63e77f30-f0f9-49c2-89e5-3110b9ea2b10',
        imageAlt: 'Abstract fun is the best kind of fun.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FDistanceAbstractFun.jpg?alt=media&token=ef6c55a5-6c20-4897-88a7-065a8e28eebe',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FSocialAbstractFun.jpg?alt=media&token=e01c5338-cf5b-443f-8d85-e11da2889409',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FGroupAbstractFun.jpg?alt=media&token=8afb826c-0309-4d61-873e-6492680d58bb',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FDistanceAbstractFun.jpg?alt=media&token=ef6c55a5-6c20-4897-88a7-065a8e28eebe'
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
        description: 'Inverted shapes are fun and so abstract.',
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FWelcomeAbstractFunInvert.jpg?alt=media&token=00b5501c-788c-48f3-a497-82a6896fcb9a',
        imageAlt: 'Abstract fun is the best kind of fun.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FWelcomeAbstractFunInvert.jpg?alt=media&token=00b5501c-788c-48f3-a497-82a6896fcb9a',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FSocialAbstractFunInvert.jpg?alt=media&token=eeb43c97-cda9-4bdf-9edd-b7c05f69fe42',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FGroupAbstractFunInvert.jpg?alt=media&token=f23f85ed-9e76-4559-808e-94fa562625ed',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FDistanceAbstractFunInvert.jpg?alt=media&token=d392cd76-ad18-4629-a46d-d2aeb266eea7'
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
        price: 2.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/BurstOfColorPack%2FWelcomeBurstOfColor.jpg?alt=media&token=c73929cd-654a-4305-b3c8-ba51de96a948',
        imageAlt: 'Burst of color is the best kind of color.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/BurstOfColorPack%2FWelcomeBurstOfColor.jpg?alt=media&token=c73929cd-654a-4305-b3c8-ba51de96a948',
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
        price: 0.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/GrungeVibesPack%2FWelcomeGrungeVibes.jpg?alt=media&token=17cac06c-ce36-4939-97bd-09a3bb188cb3',
        imageAlt: 'Grunge is a new kind of vibe.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/GrungeVibesPack%2FWelcomeGrungeVibes.jpg?alt=media&token=17cac06c-ce36-4939-97bd-09a3bb188cb3',
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
        description: 'It never hurts to tear things up and make a mess of things.',
        type: 'Graphic Pack',
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewTearPack%2FWelcomeTear.jpg?alt=media&token=418591e8-4990-4d96-828d-880e2f1debfd',
        imageAlt: 'Tear things up and make a mess of things.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewTearPack%2FWelcomeTear.jpg?alt=media&token=418591e8-4990-4d96-828d-880e2f1debfd',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewTearPack%2FConnectTear.jpg?alt=media&token=cac09681-c309-4966-95b7-bb8eaa9ff0ac',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewTearPack%2FFollowTear.jpg?alt=media&token=a2ac67a6-def1-49aa-bdd4-fcd925b0f259',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewTearPack%2FMaskTear.jpg?alt=media&token=34098a7e-8b5e-4893-88eb-1ba3aa2872d7'
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
        description: 'Vintage is the new future.',
        type: 'Graphic Pack',
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FWelcomeNewFuture.jpg?alt=media&token=fa0fc698-1711-4803-a2a7-bcf1787037c8',
        imageAlt: 'Vintage is the new future.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FWelcomeNewFuture.jpg?alt=media&token=fa0fc698-1711-4803-a2a7-bcf1787037c8',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FConnectNewFuture.jpg?alt=media&token=a84d4c47-3008-4314-bd53-088a5c20cd48',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FFollowNewFuture.jpg?alt=media&token=97b17bad-58ba-461e-a8da-619fc787584f',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FStatementNewFuture.jpg?alt=media&token=55558ded-5916-4f38-aaea-a52a753e4c20'
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
    {
        id: 7,
        name: 'Out of this World',
        description: 'Out of this world in to the next.',
        type: 'Graphic Pack',
        price: 5.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/OutOfThisWorldPack%2FWelcomeOOTW.jpg?alt=media&token=82dd8be3-f6e6-403e-a018-6b68d5757d21',
        imageAlt: 'Out of this world in to the next.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/OutOfThisWorldPack%2FWelcomeOOTW.jpg?alt=media&token=82dd8be3-f6e6-403e-a018-6b68d5757d21',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/OutOfThisWorldPack%2FSocialOOTW.jpg?alt=media&token=691179f5-ad96-4420-8d30-d9ab29fe5f77',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/OutOfThisWorldPack%2FGroupOOTW.jpg?alt=media&token=1b5149cc-6211-4b69-8d55-e7c90590dcc9',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/OutOfThisWorldPack%2FDistanceOOTW.jpg?alt=media&token=c889e3a2-1ec2-40a1-946d-57e6bfbc3337'
        ],
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
        description: 'Summer is here and its time for some fun.',
        price: 25.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/PlayfulSummerPack%2FWelcomePS.jpg?alt=media&token=1f553ccf-3a18-46d2-bec1-e70e134df25c',
        imageAlt: 'Playful summers are sure to come.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/PlayfulSummerPack%2FWelcomePS.jpg?alt=media&token=1f553ccf-3a18-46d2-bec1-e70e134df25c',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/PlayfulSummerPack%2FConnectPS.jpg?alt=media&token=e5b07a8c-e957-4829-a8d4-4e686e203403',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/PlayfulSummerPack%2FGivingPS.jpg?alt=media&token=e1e38430-67ad-4a25-b456-4f8ff4d1fe79',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/PlayfulSummerPack%2FBaptismPS.jpg?alt=media&token=1afa7a38-0388-4851-af86-cbd0836526fe'
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
        description: 'Retro vibes are the best vibes.',
        price: 25.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/RetroVibesPack%2FWelcomeRV.jpg?alt=media&token=56d7d60e-0cca-416a-96af-e27437274ef6',
        imageAlt: 'Retro vibes are the best vibes.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/RetroVibesPack%2FWelcomeRV.jpg?alt=media&token=56d7d60e-0cca-416a-96af-e27437274ef6',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/RetroVibesPack%2FSocialRV.jpg?alt=media&token=22552941-45e9-4763-ad12-b06993bb0e9a',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/RetroVibesPack%2FPrayerRV.jpg?alt=media&token=bba52fa4-88a7-4bfe-bcbb-3115cec7ac50',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/RetroVibesPack%2FGoodByeRV.jpg?alt=media&token=7f86e53d-ec92-45e5-b88e-c943ce7f2c64'
        ],
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
        description: 'Social just got a whole lot lighter.',
        price: 25.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FWelcomeLightSocialDesign.jpg?alt=media&token=4e174745-4772-40a2-8f48-d8b41aa37151',
        imageAlt: 'Social just got a whole lot lighter.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FWelcomeLightSocialDesign.jpg?alt=media&token=4e174745-4772-40a2-8f48-d8b41aa37151',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FConnectLightSocialDesign.jpg?alt=media&token=b1bf57c9-7a87-49dd-a5c7-a9ebd8cdbee2',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FFollowLightSocialDesign.jpg?alt=media&token=d43d4b63-8802-4389-9ba3-2aa1af8fceab',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FGroupsLightSocialDesign.jpg?alt=media&token=f9f270ca-bfb8-4d4b-aa9f-c55e8e9f170a'
        ],
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
        description: 'Social just got a whole lot darker.',
        price: 25.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FWelcomeDarkSocialDesign.jpg?alt=media&token=e7b6282e-b122-46c8-b8ce-083524d50765',
        imageAlt: 'Social just got a whole lot darker.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FWelcomeDarkSocialDesign.jpg?alt=media&token=e7b6282e-b122-46c8-b8ce-083524d50765',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FConnectDarkSocialDesign.jpg?alt=media&token=1e456b10-3378-4157-8c68-d9a654ad648d',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FFollowDarkSocialDesign.jpg?alt=media&token=ca15df17-07e5-4464-85e6-d9afe706d79c',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FGroupsDarkSocialDesign.jpg?alt=media&token=fbd2f116-5bb5-45cc-9944-20ef32f70491'
        ],
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
        description: 'Split the screen to make it blue.',
        price: 10.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FWelcomeSplitBlue.jpg?alt=media&token=d679bb74-f10e-4382-88c9-adef9647ee7c',
        imageAlt: 'Split the screen to make it blue.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FWelcomeSplitBlue.jpg?alt=media&token=d679bb74-f10e-4382-88c9-adef9647ee7c',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FConnectSplitBlue.jpg?alt=media&token=b8f04411-d91e-4ca0-a522-3e1569de8ef4',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FSocialSplitBlue.jpg?alt=media&token=bd867401-6c1c-4895-af15-dc17963fa3fc',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FGroupSplitBlue.jpg?alt=media&token=0aae5bbb-9c93-4a63-81df-d2196766a250'
        ],
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
        description: 'Split the screen to make it yellow.',
        price: 10.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FWelcomeSplitYellow.jpg?alt=media&token=433aa54b-56e6-4a00-9c61-55bdfbbcac8d',
        imageAlt: 'Split the screen to make it yellow.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FWelcomeSplitYellow.jpg?alt=media&token=433aa54b-56e6-4a00-9c61-55bdfbbcac8d',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FConnectSplitYellow.jpg?alt=media&token=e672327e-c71f-4e1d-90e8-806ac4817990',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FSocialSplitYellow.jpg?alt=media&token=ab93252f-1c75-4d4e-9a9a-ab6522c7d8d3',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SplitScreenPack%2FGroupSplitYellow.jpg?alt=media&token=fdf40a9c-e78b-41b1-b6aa-c4843f925e74'
        ],
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
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SwirledPack%2FWelcomeSwirled.jpg?alt=media&token=618dd8c5-0c23-432a-8921-66af6ccb037c',
        imageAlt: 'Swirled is the new way to go.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SwirledPack%2FWelcomeSwirled.jpg?alt=media&token=618dd8c5-0c23-432a-8921-66af6ccb037c',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SwirledPack%2FConnectSwirled.jpg?alt=media&token=b451c4a5-20f0-4b63-82fa-130cdae935e6',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SwirledPack%2FFollowSwirled.jpg?alt=media&token=0191de96-8f94-4a0a-acae-f8a9e010af27',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SwirledPack%2FStaySafeSwirled.jpg?alt=media&token=b4558761-e2a4-4cab-bd84-62eb06325032'
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
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FWelcomeLightTouch.jpg?alt=media&token=3a9fc9ac-5122-474f-aabc-ae4726db069b',
        imageAlt: 'Touch the light the modern way.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FWelcomeLightTouch.jpg?alt=media&token=3a9fc9ac-5122-474f-aabc-ae4726db069b',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FSocialMediaLightTouch.jpg?alt=media&token=a562d314-3195-439f-bd8a-37dbdb1a3c9b',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FGroupLightTouch.jpg?alt=media&token=e604ad63-f8bf-42de-a879-81da71a7491d',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FDistanceLightTouch.jpg?alt=media&token=5f9eaccb-1bfa-44d4-b682-3fa4410472e5'
        ],
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
        price: 15.0,
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FWelcomeDarkTouch.jpg?alt=media&token=ac6cdd46-dcad-4d66-a4c1-5e807863c3f8',
        imageAlt: 'Touch the dark the modern way.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FWelcomeDarkTouch.jpg?alt=media&token=ac6cdd46-dcad-4d66-a4c1-5e807863c3f8',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FSocialMediaDarkTouch.jpg?alt=media&token=15f20cb3-425a-40ef-a490-8faa7ad3eb02',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FGroupDarkTouch.jpg?alt=media&token=6ad1e2da-0baf-47fb-9871-e7d662ac065e',
            'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/TouchOfModernPack%2FDistanceDarkTouch.jpg?alt=media&token=94439402-eb9b-4348-a292-c97552f642fc'
        ],
        features: [
            'Category: Graphics',
            'High Resolution: 1920x1080',
            'Photoshop File: PSD Files Included',
        ],
    },
];

export default productData;