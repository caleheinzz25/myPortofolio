
export default function Hero(){
    const handleScroll = () => {
        const target = document.getElementById("about");
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    return (
        <section id="home" class="pt-36">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full self-center items-center lg:pt-14 px-4 lg:w-1/2">
                        <h1 class="text-base font-semibold text-primary lg:text-2xl">Halo Semua 👋, Saya <span class="block font-bold text-white text-4xl mt-1 mb-1 lg:text-5xl">Muhammad Hisyam</span></h1>
                        <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">BackEnd Developer & <span class="text-white">AI enthusiast</span></h2>
                        <p class="font-medium text-secondary mb-10 leading-relaxed">Passionate about building <span class="text-white  font-semibold">robust backends</span> and <span class="text-white  font-semibold">leveraging AI</span> for smart, scalable solutions.</p>

                        <a href="" onclick={handleScroll} class="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300  ease-in-out">Hubungi Saya</a>
                    </div>
                    <div class="w-full self-end px-4 lg:w-1/2">
                        <div class="mt-10 relative lg:mt-9 lg:right-0">
                            <img src="/img/MuhammadHisyam.png" alt="My Foto" class="max-w-full mx-auto" />
                            <span class="absolute bottom-16 -z-10 left-1/2 -translate-x-1/2">
                                <svg viewBox="0 0 200 200" width={500} height={500} xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#3b82f6" d="M34.2,-50.2C44.8,-46.4,54.2,-37.7,61.9,-26.6C69.6,-15.5,75.4,-1.9,75.2,11.9C74.9,25.7,68.5,39.7,57.9,48C47.3,56.2,32.6,58.7,17.7,65.3C2.8,71.9,-12.3,82.7,-20.3,76.9C-28.3,71.1,-29.2,48.5,-39.9,35.1C-50.6,21.8,-71.1,17.5,-80.2,6.7C-89.3,-4.1,-86.8,-21.3,-75.6,-29.7C-64.3,-38.2,-44.2,-37.8,-30.1,-40C-16,-42.2,-8,-47,1.9,-49.9C11.8,-52.8,23.6,-53.9,34.2,-50.2Z" transform="translate(100 100) scale(1.1)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}