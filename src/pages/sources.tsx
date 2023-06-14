/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { api } from "~/utils/api";
import { ChatIcon, LinkIcon } from "@heroicons/react/solid";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Chat from "./components/chatgpt";

const Home: NextPage = () => {
  const [translate, setTranslate] = useState(false);

  const menuHandler = () => {
    setTranslate(!translate);
  };

  return (
    <main className="relative overflow-hidden  bg-white duration-150 dark:bg-black">
      <div className="font-hanken">
        <Navbar />
        <button
          className="absolute bottom-4 right-5 z-20 rounded-2xl bg-red-500 p-2 text-white shadow-lg  duration-150 hover:bg-red-600"
          onClick={() => menuHandler()}
        >
          <ChatIcon className="h-12 w-12" />
        </button>
        <Chat translate={translate} setTranslate={setTranslate} />
        <section className="scrollbar max-h-[calc(100vh-5rem-1.5px)] min-h-[calc(100vh-5rem-1.5px)] overflow-x-hidden overflow-y-scroll">
          <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-8 2xl:px-0">
            <div className="mt-8 text-6xl font-extrabold">Sources</div>
            <div className="mt-4 flex flex-col rounded-lg bg-gray-200 p-2 shadow-inner dark:bg-[#1d1d1d] sm:p-4">
              <p className="text-2xl font-extrabold">The 1940s</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 1 - The Truman Committee
                  <Link href="/eras/1940s">
                    <Image
                      src="/images/artifacts/truman-committee.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.trumanlibrary.gov/photograph-records/58-442"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://www.senate.gov/about/powers-procedures/investigations/truman.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                    <Link
                      href="https://www.npr.org/2023/05/11/1175403633/truman-committee-became-the-model-for-scrutinizing-giant-public-expenditures"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 2: Boeing Company Plant 2
                  <Link href="/eras/1940s">
                    <Image
                      src="/images/artifacts/b17.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.heraldtribune.com/story/news/2010/09/15/airplane-plants-historical-journey-nearing-its-end/28966928007/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://www.independent.org/publications/article.asp?id=141"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>
                    <Link
                      href="https://www.nber.org/system/files/working_papers/w27375/w27375.pdf"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col rounded-lg bg-gray-200 p-2 shadow-inner dark:bg-[#1d1d1d] sm:p-4">
              <p className="text-2xl font-extrabold">The 1950s</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 1 - Anti-U.S. Propaganda Posters
                  <Link href="/eras/1950s">
                    <Image
                      src="/images/artifacts/uncle-sam.jfif"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.trumanlibrary.gov/photograph-records/2017-141"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://blogs.loc.gov/international-collections/2017/09/korean-war-propaganda-leaflet-collection-at-the-library-of-congress/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                    <Link
                      href="https://www.loc.gov/collections/world-war-i-posters/about-this-collection/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 2: Gloriosa Victoria
                  <Link href="/eras/1950s">
                    <Image
                      src="/images/artifacts/gloriosa-victoria.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://modernart2011.blogspot.com/2011/04/gloriosa-victoria-diego-rivera.html "
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://sites.psu.edu/arthistory/2017/01/30/glorious-victory/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>{" "}
                    <Link
                      href="https://history.state.gov/historicaldocuments/frus1952-54Guat/intro"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 3: The Power Elite
                  <Link href="/eras/1950s">
                    <Image
                      src="/images/artifacts/power-elite.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://gatesapgov.blogspot.com/2019/08/models-of-democracy-participatory.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://www.thoughtco.com/c-wright-mills-power-elite-3026474"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>{" "}
                    <Link
                      href="https://www1.udel.edu/htr/American/Texts/power.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col rounded-lg bg-gray-200 p-2 shadow-inner dark:bg-[#1d1d1d] sm:p-4">
              <p className="text-2xl font-extrabold">The 1960s</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 1 -{" "}
                  {`Eisenhower's Warning about the Military-Industrial Complex`}
                  <Link href="/eras/1960s">
                    <iframe
                      src={`https://www.youtube.com/embed/V9dbBWA5dmA`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Eisenhower's Speech"
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.eisenhowerlibrary.gov/sites/default/files/research/online-documents/farewell-address/reading-copy.pdf"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> TRANSCRIPT
                    </Link>
                    <Link
                      href="https://www.archives.gov/milestone-documents/president-dwight-d-eisenhowers-farewell-address"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>{" "}
                    <Link
                      href="https://www.thelugarcenter.org/blog-a-nation-in-balance-eisenhowers-farewell-address"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 2: Father and Napalmed Child
                  <Link href="/eras/1960s">
                    <Image
                      src="/images/artifacts/napalm.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover object-top p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="http://www.bytesdaily.com.au/2013/09/pulitzer-prize-for-photography-1965.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://www.pbs.org/wgbh/americanexperience/features/two-days-in-october-dow-chemical-and-use-napalm/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>{" "}
                    <Link
                      href="https://michiganintheworld.history.lsa.umich.edu/antivietnamwar/exhibits/show/exhibit/military_and_the_university/dow_chemical"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col rounded-lg bg-gray-200 p-2 shadow-inner dark:bg-[#1d1d1d] sm:p-4">
              <p className="text-2xl font-extrabold">The 1970s+</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 1 - The C5A Scandal
                  <Link href="/eras/1970s">
                    <Image
                      src="/images/artifacts/c5a.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href=" https://i.ebayimg.com/images/g/HaEAAOSwDfBjKveW/s-l400.jpg"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://wikisummaries.org/congress-begins-hearings-on-overspending-for-the-c-5-a-galaxy/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>{" "}
                    <Link
                      href="https://www.nytimes.com/1971/02/02/archives/lockheed-accepts-a-loss-of-200million-on-c5a-lockheed-accepts-a.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 2: Iraq War Resolution
                  <Link href="/eras/1970s">
                    <Image
                      src="/images/artifacts/iraq-resolution.jpg"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.prisonlegalnews.org/news/publications/olc-memo-re-authorization-for-use-of-military-force-against-iraq-resolution-10-21-02/"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://www.brookings.edu/blog/planetpolicy/2016/07/07/when-bush-and-cheney-doubled-down-on-fossil-fuels-a-fateful-choice-for-the-climate/#:~:text=Fifteen%20years%20ago%20this%20spring%2C%20the%20United%20States,dependence%20on%20oil%20from%20the%20unstable%20Middle%20Easthttps://www.npr.org/2021/09/11/1036217612/how-the-bush-administration-permanently-shaped-national-security-after-9-11"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>{" "}
                    <Link
                      href="https://georgewbush-whitehouse.archives.gov/news/releases/2002/10/20021002-2.html"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
                <div className="h-full rounded-md bg-white p-2 shadow-lg dark:bg-black">
                  Artifact 3: F-35 Joint Strike Fighter
                  <Link href="/eras/1970s">
                    <Image
                      src="/images/artifacts/f35.jfif"
                      alt="logo"
                      height={400}
                      width={400}
                      className="mx-auto h-[20rem] w-full overflow-hidden rounded-lg object-cover p-2"
                    />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="https://www.vermontpublic.org/podcast/brave-little-state/2021-07-22/why-is-the-f-35-based-in-vermont "
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> IMAGE{" "}
                    </Link>
                    <Link
                      href="https://jacobin.com/2023/01/f-35-military-industrial-complex-us-air-force-lockheed-martin "
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4 " /> SOURCE
                    </Link>{" "}
                    <Link
                      href="https://www.bloomberg.com/news/articles/2023-05-30/f-35-jet-s-overworked-engines-may-cost-pentagon-38-billion-in-upkeep#xj4y7vzkg"
                      className="flex items-center rounded-md bg-gray-200 p-2 text-sm duration-150 hover:bg-gray-300 dark:bg-[#101010] dark:hover:bg-gray-800 lg:text-base"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> SOURCE{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
