"use client"
import '@radix-ui/themes/styles.css';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

export default function Home(){

  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/create", { originalUrl: url, password, shortCode: slug });
      const data = res.data;
      if (data.error) {
        setError(data.error);
        toast.error(data.error);
      } else {
        toast.success("Short URL created successfully");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError('An unexpected error occurred.');
        toast.error('An unexpected error occurred.');
      }
    }
  }

  return(
    <>
    <ToastContainer />
<section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-gray-1 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
          <div className="mb-10 text-center md:mb-16">
            <a
              href="javascript:void(0)"
              className="mx-auto inline-block max-w-[160px]"
            >
              <img src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Noobsverse.png" alt="logo" />
            </a>
            <p>{error}</p>
          </div>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your long URL"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Slug"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <input
                type="submit"
                defaultValue="Generate Short URL"
                className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                onClick={(e)=>handleSubmit(e)}
              />
            </div>
          </form>
          <div>
            <span className="absolute right-1 top-1">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.39737"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 1.39737 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 1.39737 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 13.6943 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 13.6943 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 25.9911 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 25.9911 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 38.288 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 38.288 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 1.39737 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 13.6943 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 25.9911 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 38.288 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 1.39737 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 13.6943 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 25.9911 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 38.288 14.0086)"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span className="absolute bottom-1 left-1">
              <svg
                width={29}
                height={40}
                viewBox="0 0 29 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2.288"
                  cy="25.9912"
                  r="1.39737"
                  transform="rotate(-90 2.288 25.9912)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 14.5849 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 26.7216 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="13.6944"
                  r="1.39737"
                  transform="rotate(-90 2.288 13.6944)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 14.5849 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 26.7216 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="38.0087"
                  r="1.39737"
                  transform="rotate(-90 2.288 38.0087)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="1.39739"
                  r="1.39737"
                  transform="rotate(-90 2.288 1.39739)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 14.5849 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 26.7216 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 14.5849 1.39761)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 26.7216 1.39761)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}