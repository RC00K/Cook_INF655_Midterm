import { Fragment } from 'react';

export default function Features() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto px-4 py-12 sm:py-6 sm:px-6 lg:py-16 lg:items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">What we offer</h2>
                    <p className="mt-4 text-gray-300">
                        Experience an extensive range of captivating content with ease,
                        thanks to our user-friendly format. Our expert creators craft
                        exceptional content that guarantees high quality every time.
                        Trust us to provide you with an unforgettable entertainment experience.
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Creative</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Our team of highly creative professionals work tirelessly 
                                to produce unique and innovative content that sets us apart from the rest.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Delivery</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Our lightning-fast delivery ensures that you can 
                                access the content you love, whenever and wherever you want it.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Diverse</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                With a diverse range of content designs to choose from, 
                                you'll be spoilt for choice when it comes to finding the 
                                perfect style to suit your preferences.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Effective</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Effectively way to visually communicate and 
                                reinforce your church's mission, values and message, 
                                while also creating a welcoming and engaging 
                                environment for its members and visitors.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Inexpensive</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Cost-effective solution for churches looking to 
                                establish an online presence and connect with their audience.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Quality</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                High quality content engages and captivates its audience, 
                                leaving a lasting impression that resonates 
                                long after the experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}