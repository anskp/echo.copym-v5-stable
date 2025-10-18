import React from "react";
import { LavaLamp } from "../../components/ui/fluid-blob";
import { 
  GiShield,
  GiLockedChest,
  GiPowerLightning,
  GiPerson,
  GiHouse,
  GiRocket,
  GiGlobe,
  GiHalfHeart,
  GiTargetArrows,
  GiRoundStar,
  GiChart,
  GiTimeBomb,
  GiTreasureMap,
  GiBinoculars,
  GiHourglass
} from "react-icons/gi";


const AboutUs = () => {
    return (
        <div className="min-h-screen bg-blue-100">
            {/* Section 1: Hero Section */}
            <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh] max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
                </div>

                {/* Fluid Blob Background */}
                <div className="absolute inset-0 opacity-30">
                    <LavaLamp />
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                                 {/* Hero Content */}
                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Leading RWA Tokenization Platform</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular">
                            <span className="text-gray-900">About</span>{" "}
                            <span className="text-blue-600">COPYm</span>
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Transforming asset ownership through blockchain innovation and institutional-grade tokenization
                        </p>
                        
                        {/* CTA Button */}
                        <div className="flex justify-center pt-8">
                            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base rounded-full">
                                Explore Our Journey
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Company Overview */}
            <section className="relative">
                {/* Main Content */}
                <div className="relative z-10 bg-blue-700 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
                    
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                                Company <span className="text-black">Overview</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-white leading-relaxed font-medium">
                                                COPYm is a cutting-edge <span className="font-semibold text-white">Real World Asset (RWA) tokenization platform</span> designed to transform how the world perceives and manages ownership.
                                            </p>
                                            
                                            <p className="text-white leading-relaxed">
                                                We bridge tangible value and digital innovation, enabling physical assets — from <span className="font-semibold text-white">real estate and commodities</span> to <span className="font-semibold text-white">collectibles and intellectual property</span> — to be securely digitized, fractionalized, and traded on a global scale.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center border border-white/20">
                                    <div className="text-center space-y-6">
                                        <h3 className="text-2xl font-bold text-black anton-regular">Why We Exist</h3>
                                        <div className="space-y-4 text-left">
                                            <p className="text-white leading-relaxed">
                                                The traditional asset market is <span className="font-semibold text-white">fragmented, slow, and geographically restricted</span>. COPYm is here to change that.
                                            </p>
                                            <p className="text-white leading-relaxed">
                                                By merging blockchain technology with real-world compliance, we create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mission & Vision */}
            <section className="py-20 bg-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Mission & <span className="text-blue-600">Vision</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mission - Left Side */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    
                                    <h3 className="text-2xl font-bold text-blue-600 anton-regular">Our Mission</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        To make asset ownership borderless, transparent, and universally accessible through blockchain innovation.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        We democratize access to investment opportunities by enabling fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and valuable assets with as little as $100.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our mission extends beyond technology — we strive to foster financial inclusion and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision - Right Side */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    
                                    <h3 className="text-2xl font-bold text-green-600 anton-regular">Our Vision</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        We see a future where any asset, anywhere, can be owned, traded, and verified instantly.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our vision is to create a world where investment opportunities are not limited by geography, wealth, or traditional barriers.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Through our platform, we envision a future where everyone has access to premium investment opportunities, creating a more inclusive and prosperous global economy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Core Values */}
            <section className="py-20 bg-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Core <span className="text-blue-600">Values</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16  mx-auto mb-6 flex items-center justify-center">
                                <img src="/assets/Images/icons/ab3.png" alt="Integrity" className="w-13 h-13 object-contain filter brightness-75 contrast-125" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 anton-regular">Integrity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We operate with complete transparency and ethical practices in all our dealings.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16  mx-auto mb-6 flex items-center justify-center">
                                <img src="/assets/Images/icons/a5.png" alt="Security" className="w-13 h-13 object-contain filter brightness-75 contrast-125" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 anton-regular">Security</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enterprise-grade security measures protect every transaction and asset on our platform.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16  mx-auto mb-6 flex items-center justify-center">
                                <img src="/assets/Images/icons/ab4.png" alt="Innovation" className="w-13 h-13 object-contain filter brightness-75 contrast-125" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 anton-regular">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We continuously push the boundaries of what's possible in asset tokenization.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16  mx-auto mb-6 flex items-center justify-center">
                                <img src="/assets/Images/icons/ab2.png" alt="Inclusivity" className="w-13 h-13 object-contain filter brightness-75 contrast-125"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 anton-regular">Inclusivity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We make premium investments accessible to everyone, regardless of background.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Company Timeline */}
            <section className="relative">
                {/* Main Content */}
                <div className="relative z-10 bg-blue-700 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">

                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                                Company <span className="text-black">Timeline</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Timeline Item 1 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12  mx-auto flex items-center justify-center">
                                        <img src="/assets/Images/icons/contact1.png" alt="Foundation" className="w-13 h-13 object-contain filter brightness-125 contrast-125 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 text-center anton-regular">2023 - Foundation</h3>
                                <p className="text-white/80 leading-relaxed text-center">
                                    COPYm was founded with a vision to democratize access to premium investment opportunities.
                                </p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12  mx-auto flex items-center justify-center">
                                        <img src="/assets/Images/icons/contact3.png" alt="Platform Launch" className="w-13 h-13 object-contain filter brightness-125 contrast-125 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 text-center anton-regular">2024 - Platform Launch</h3>
                                <p className="text-white/80 leading-relaxed text-center">
                                    Our revolutionary RWA tokenization platform goes live, enabling fractional ownership.
                                </p>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 mx-auto flex items-center justify-center">
                                        <img src="/assets/Images/icons/t3.png" alt="Global Expansion" className="w-13 h-13 object-contain filter brightness-125 contrast-125 invert" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 text-center anton-regular">2025 - Global Expansion</h3>
                                <p className="text-white/80 leading-relaxed text-center">
                                    Expanding our reach globally, making premium investments accessible worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Leadership Team */}
            {/* <section className="py-20 bg-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Leadership <span className="text-green-600">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Kuldeep - CEO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Kuldeep.png" 
                                    alt="Kuldeep" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Kuldeep</h4>
                                    <p className="text-blue-600 font-semibold text-lg">CEO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Rameez - COO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Rameez.png" 
                                    alt="Rameez" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Rameez</h4>
                                    <p className="text-green-600 font-semibold text-lg">COO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Azwaan - HR */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Azwaan.png" 
                                    alt="Azwaan" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Azwaan</h4>
                                    <p className="text-green-600 font-semibold text-lg">HR</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Raayif Aarif - CTO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Raayif-aarif.png" 
                                    alt="Raayif Aarif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Raayif Aarif</h4>
                                    <p className="text-blue-600 font-semibold text-lg">CTO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Ansab */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Ansab.png" 
                                    alt="Ansab" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Ansab</h4>
                                    <p className="text-blue-600 font-semibold text-lg">Blockchain Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Abhishek */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Abhishek.png" 
                                    alt="Abhishek" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Abhishek</h4>
                                    <p className="text-green-600 font-semibold text-lg">Mobile UI/UX Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Hanan Arif */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Hanan.png" 
                                    alt="Hanan Arif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Hanan Arif</h4>
                                    <p className="text-blue-600 font-semibold text-lg">Infrastructure & Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Anas KP */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Anas K.P.png" 
                                    alt="Anas KP" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Anas KP</h4>
                                    <p className="text-green-600 font-semibold text-lg">Blockchain Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Nada Abdulla */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Nada.png" 
                                    alt="Nada Abdulla" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nada Abdulla</h4>
                                    <p className="text-blue-600 font-semibold text-lg">UI/UX Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Nuha Fathima */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Nuha.png" 
                                    alt="Nuha Fathima" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nuha Fathima</h4>
                                    <p className="text-green-600 font-semibold text-lg">React Native Developer</p>
                                </div>
                            </div>
                        </div> */}
                    {/* </div>
                </div>
            </section> */}

            {/* Section 7: Technology & Innovation */}
            <section className="py-20 bg-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Technology & <span className="text-blue-600">Innovation</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column - Technology Integration */}
                        <div className="space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                                <h3 className="text-2xl font-bold text-blue-600 mb-6 anton-regular">Technology Integration</h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {/* Solana */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/solana-sol-logo.svg" alt="Solana" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Polygon */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/polygon-matic-logo.svg" alt="Polygon" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Optimism */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/optimism-ethereum-op-logo.svg" alt="Optimism" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Ethereum */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/ethereum-eth-logo.svg" alt="Ethereum" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Bitcoin */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/bitcoin-btc-logo.svg" alt="Bitcoin" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Avalanche */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/avalanche-avax-logo.svg" alt="Avalanche" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Audit & Security Partners */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Audit & Security Partners</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/audit0.png" alt="Audit Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Audit Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/cervik.png" alt="Cervik" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Cervik</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/h.png" alt="Security Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Security Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/ic.png" alt="IC Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">IC Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/z.png" alt="Z Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Z Partner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Platform Integration */}
                        <div className="space-y-8">
                                                         <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                                 <h3 className="text-2xl font-bold text-green-600 mb-6 anton-regular">Platform Integration</h3>
                                 <div className="grid grid-cols-2 gap-6">
                                     {/* Fireblocks */}
                                     <div className="flex items-center justify-center">
                                         <div className="w-16 h-16 flex items-center justify-center">
                                             <img src="/assets/svg/Fireblocks.svg" alt="Fireblocks" className="w-full h-full" />
                                         </div>
                                     </div>
                                     
                                     {/* Crossmint */}
                                     <div className="flex items-center justify-center">
                                         <div className="w-16 h-16 flex items-center justify-center">
                                             <img src="/assets/svg/Crossmint_idPetUnPey_0.png" alt="Crossmint" className="w-full h-full" />
                                         </div>
                                     </div>
                                     
                                     {/* Imperial PFS */}
                                     <div className="flex items-center justify-center">
                                         <div className="w-16 h-16 flex items-center justify-center">
                                             <img src="/assets/svg/Imperial PFS_id6TGACQIO_1.png" alt="Imperial PFS" className="w-full h-full" />
                                         </div>
                                     </div>
                                     
                                     {/* Sumsub */}
                                     <div className="flex items-center justify-center">
                                         <div className="w-16 h-16 flex items-center justify-center">
                                             <img src="/assets/svg/sumsub.png" alt="Sumsub" className="w-full h-full" />
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

