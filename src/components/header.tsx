import { useLocation } from "@solidjs/router";
import { createSignal, onCleanup, onMount } from "solid-js";

export default function Header() {
  // const location = useLocation();
  // const active = (path: string) =>
  //   path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";

  const [hamburger, setHamburger] = createSignal(true);
  const [fixNav, setFixNav] = createSignal(false);


  const toggleHamburger = () => { 
    setHamburger(!hamburger())
  }

  
  const scrollNav = () => {
    const header = document.querySelector('#navbar') as HTMLHeadElement | null; // Ambil elemen header
    if (header) {
      const fixedNav: number = header.offsetTop; // Ambil offset header

      // Periksa posisi scroll
      if (window.pageYOffset > fixedNav) {
        setFixNav(true);
      } else {
        setFixNav(false);
      }
    }
  };

  onMount(() => {
    window.addEventListener("scroll", scrollNav);
    // Cleanup event listener saat komponen dibongkar
    onCleanup(() => window.removeEventListener("scroll", scrollNav));
  });
  
  return (
    <header id="navbar" class={`nav-bar ${fixNav() ? `fix-nav` : ``}`}>
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-4" >
            <a href="#home" class="font-bold text-lg text-primary block py-6">MuhammadHisyam</a>
          </div>
          <div class="flex items-center px-4" >
            <button id="" name="hamburger" type="button" class={`block absolute right-4 ${hamburger() ? ``: 'hamburger-active'} lg:hidden`} onclick={toggleHamburger}>
              <span class="hamburger-line origin-top-left"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line origin-bottom-left"></span>
            </button>
            <nav id="nav-menu" class={`${hamburger() ? `hidden`:``} absolute py-5 bg-white shadow-lg shadow-slate-500 rounded-lg max-w-[250px] lg:max-w-full w-full right-5 top-full lg:static lg:block lg:bg-transparent lg:shadow-none lg:rounded-none`}>
              <ul class="flex flex-col gap-3 items-center lg:flex-row">
              <li class="group">
                  <a href="#home" class="text-base text-secondary py-2 mx-8 group-hover:text-primary">Home</a>
                </li>
                <li class="group">
                  <a href="#about-me" class="text-base text-secondary py-2 mx-8 group-hover:text-primary">About Me</a>
                </li>
                <li class="group">
                  <a href="#portfolio" class="text-base text-secondary py-2 mx-8 group-hover:text-primary">Portfolio</a>
                </li>
                <li class="group">
                  <a href="#blog" class="text-base text-secondary py-2 mx-8 group-hover:text-primary">Blog</a>
                </li>
                <li class="group">
                  <a href="#contact" class="text-base text-secondary py-2 mx-8 group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
