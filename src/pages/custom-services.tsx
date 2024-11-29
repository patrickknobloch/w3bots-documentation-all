import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Navbar from '@theme/Navbar';
import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (<header className=' text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/10 via-blue-950/0 to-slate-950/0'>
   
   <svg
      className="absolute inset-0 opacity-10 z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
    </svg>
  
      <div className=" relative overflow-hidden z-20">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
  
   
    <div className="mt-5 max-w-4xl text-center mx-auto">
      <h1 className="block font-bold text-4xl md:text-6xl lg:text-7xl">
      Custom Development Services
      </h1>
    </div>

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-neutral-400 ">
      Your Vision, Our Expertise – Transforming Ideas into Reality
      </p>
    </div>

    <div className="mt-8 gap-3 flex justify-center">
      <a href="https://t.me/+t1qAnJclybgwODQy" className="hover:shadow-xl hover:shadow-white/5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border border-neutral-700 rounded-full hover:text-neutral-900 hover:no-underline group ">
        <span className="absolute left-0 block w-full h-0 transition-all bg-white/10 opacity-100 group-hover:h-full top-1/2  group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease group:hover:text-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative ">Get in Touch</span>
      </a>
    </div>
  </div>
</div>
</header>
  );
}


function SalesManager(){
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="mx-auto max-w-4xl text-center mb-10">
      <h2 className="text-3xl md:text-6xl font-bold text-white">Let's Talk!</h2>
      <p className="mt-4 text-lg text-neutral-400">Ready to transform your ideas into reality? Connect with our expert.</p>
    </div>

    <div className="flex flex-col items-center">
      <div className="group relative rounded-xl p-6 sm:p-8 border border-neutral-700 bg-neutral-800/50">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <img
            src="/img/salesmanager.jpeg"
            alt="John Teixeira"
            className="w-32 h-32 rounded-full border-2 border-neutral-700"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">John Teixeira</h3>
            <p className="text-lg text-neutral-300 mb-4">Business Development Representative</p>
            <p className="text-neutral-400 mb-6 max-w-xl">Specialized in helping businesses bridge the gap between traditional and Web3 technologies through custom development solutions.</p>
            <a
              href="https://t.me/JoaoPBTeixeira"
              target='_blank'
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] hover:bg-white transition-colors rounded-lg text-white font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.187.943.114.786.89z"/>
              </svg>
              Connect on Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function Products() {
  return (
    <div id="products" className="relative z-30 max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-300/20 to-green-300/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-green-300">
              Game Development & Design
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              Full-service game development from concept to launch.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>AAA-quality game development</li>
              <li>Custom game mechanics and systems</li>
              <li>Cross-platform optimization</li>
              <li>Blockchain game integration</li>
              <li>Multiplayer infrastructure</li>
            </ul>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500/20 to-indigo-500/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-yellow-400">
              3D & Visual Design
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              Professional 3D modeling and visual design services.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>3D modeling and animation</li>
              <li>Character and environment design</li>
              <li>Visual effects and cinematics</li>
              <li>Art direction and brand identity</li>
              <li>Concept art and storyboarding</li>
            </ul>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-300/20 to-cyan-300/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-cyan-300">
              UI/UX Design
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              Creating intuitive and engaging user experiences.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>User interface design</li>
              <li>Interactive prototypes</li>
              <li>User experience research</li>
              <li>Figma workflow implementation</li>
              <li>Design system development</li>
            </ul>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/20 to-indigo-500/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-indigo-400">
              AI Chatbots & Support
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              Revolutionize your customer support with intelligent AI solutions.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>Real-time automated Web3 support</li>
              <li>Token-specific trading assistants</li>
              <li>Multilingual support systems</li>
              <li>Transaction troubleshooting</li>
            </ul>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/20 to-blue-500/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-blue-400">
              Blockchain Integration
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              Unlock the full potential of blockchain technology.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>Smart contract development</li>
              <li>DeFi protocol implementation</li>
              <li>Cross-chain bridge development</li>
              <li>Custom token creation</li>
            </ul>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          <div className="h-2 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-500/20 to-red-500/0 rounded-t-xl">
          </div>
          <div className="p-5 md:p-7">
            <h3 className="mb-2 text-xl font-bold uppercase text-red-400">
              Enterprise Solutions
            </h3>
            <span className="block mb-4 text-lg font-semibold text-white">
              End-to-end development for business transformation.
            </span>
            <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-1.5">
              <li>Custom blockchain infrastructure</li>
              <li>Web3 platform development</li>
              <li>Legacy system integration</li>
              <li>Security and compliance</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function WhyChooseW3BOTS() {
  return (
    <div className="relative z-30 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 text-white">Why W3BOTS?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          
          <div className="p-5 md:p-7">
            <h3 className="mb-3 text-xl font-bold text-white">
              Creative Excellence
            </h3>
            <span className="block text-lg text-neutral-100/70">
              Award-winning team of designers, developers, and artists delivering exceptional digital experiences.
            </span>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          
          <div className="p-5 md:p-7">
            <h3 className="mb-3 text-xl font-bold text-white">
              Technical Mastery
            </h3>
            <span className="block text-lg text-neutral-100/70">
              Deep expertise in game development, blockchain, and cutting-edge technologies.
            </span>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          
          <div className="p-5 md:p-7">
            <h3 className="mb-3 text-xl font-bold text-white">
              Proven Track Record
            </h3>
            <span className="block text-lg text-neutral-100/70">
              Successfully delivered projects for AAA games and major entertainment brands.
            </span>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-neutral-700/10 border border-neutral-700 text-white shadow-sm rounded-xl dark:bg-neutral-900 dark:shadow-neutral-700/70">
          
          <div className="p-5 md:p-7">
            <h3 className="mb-3 text-xl font-bold text-white">
              End-to-End Support
            </h3>
            <span className="block text-lg text-neutral-100/70">
              Comprehensive support from concept to deployment and beyond.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}


<<<<<<< HEAD
=======
function Community(){
  return(
    <div className="">
      <div className="mx-auto py-12 sm:px-6 sm:py-12">
        <div className="mx-4 rounded-xl relative isolate overflow-hidden p-8 border border-neutral-800 bg-neutral-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-indigo-300/0  to-indigo-300/0  shadow-2xl sm:rounded-3xl ">
        <svg
          className="absolute inset-0 opacity-10 z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="400" height="400" x="10%" y="-1"
              patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
        </svg>
        <div className='backdrop-blur-sm relative z-30 w-full flex p-4 rounded-xl'>
            <div className="mx-auto text-center lg:py-16 ">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Let's Create Something Amazing
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
              From game development to blockchain integration, we're ready to bring your vision to life.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://t.me/+t1qAnJclybgwODQy"
                  className="text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <img
                    src="img/telegramlogo.svg"
                    className="w-40 md:w-64 p-6 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

>>>>>>> 4b9427614dc951566217e7067c6ffe479b37ece6
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  React.useEffect(() => {
    document.title = `W3BOTS - Innovating with Passion for Web3`;

  }, []);
  
  return (
    <Layout>

  <div className='bg-neutral-900'>

    <HomepageHeader />

      <main>
      <Products />
      <WhyChooseW3BOTS />
      <SalesManager />
      </main>
      </div>
      </Layout>

      );
}
