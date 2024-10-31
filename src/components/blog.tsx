import { createSignal, onMount } from "solid-js";

export default function Blog() {
    let ulRef: any; // Mengubah tipe untuk ulRef menjadi HTMLDivElement
    const [fixedImage, setFixedImage] = createSignal<boolean[]>([]); // Tipe array boolean

    onMount(() => {
        // Saat komponen di-mount, ambil jumlah <li> dalam <ul>
        const liCount: number = ulRef.children.length;
        setFixedImage(Array(liCount).fill(false)); // Inisialisasi array dengan panjang sesuai liCount
    });

    // Fungsi untuk toggle status fixedImage di indeks tertentu
    const toggleFixedImage = (index: number) => {
        setFixedImage(prev =>
            prev.map((item, idx) => (idx === index ? !item : item))
        );
    };

    return (
        <section id="blog" class="pt-36 pb-16 bg-[#083344]">
            <div class="container">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg mb-2 text-primary">
                            Blog
                        </h4>
                        <h2 class="font-bold text-white text-3xl mb-4">Latest Writing</h2>
                        <p class="font-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus saepe consequatur amet ut numquam magni voluptatem nemo aliquam recusandae.</p>
                    </div>
                    <div ref={ulRef} class="w-full px-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        {[...Array(6)].map((_, index) => (
                            <div class="mb-12 shadow-xl shadow-secondary rounded-xl overflow-hidden">
                                <div
                                    class={`rounded-md overflow-hidden ${fixedImage()[index] ? `fixed inset-0 flex items-center justify-center bg-slate-200 z-50 transition duration-1000` : ``} ease-in-out`}
                                    onClick={() => toggleFixedImage(index)} // Memanggil toggleFixedImage dengan index
                                >
                                    <img src={`/img/foto${index + 1}.png`} alt="Landing Page" class={`cursor-pointer ${fixedImage()[index] ? `img-pop-up` : ``}`} />
                                </div>
                                <div class="px-5 pb-5">
                                    <h3 class="font-semibold text-white text-xl mt-5 mb-3">Item {index + 1}</h3>
                                    <p class="font-medium text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque consequuntur cupiditate corrupti nam cum!</p>
                                    <a href="#" class="underline font-semibold text-slate-600 hover:text-slate-500 mt-5 text-sm">Baca Selengkapnya</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
