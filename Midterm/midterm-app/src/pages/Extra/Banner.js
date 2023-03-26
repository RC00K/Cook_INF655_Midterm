export default function Banner() {
    return (
        <main>
            <div className="mt-24 mb-8 mx-auto max-w-7xl px-4">
                <div className="text-center">
                    {/* Heading with gradient text */}
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Unlimited Use. <span className="sm:block">Unlimited Possibilities.</span>
                    </h1>
                    {/* Description text */}
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        We have a wide range of graphics for you to choose from that will leave a lasting impression on your audience. Design <strong>Different</strong>. Design <strong>Better</strong>. Design with <strong>Design Different Graphics</strong>.
                    </p>
                </div>
            </div>
        </main>
    );
}