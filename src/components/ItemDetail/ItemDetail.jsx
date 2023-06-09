import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import BannerSix from "./BannerSix";
import MainSlider from "./MainSlider";
import SecondarySlider from "./SecondarySlider";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import CarouselOne from "../HomePage/CarouselOne";
import CarouselTwo from "../HomePage/CarouselTwo";
import BannerTwo from "../HomePage/BannerTwo";
import { LayoutActivatorContext } from "../../context/LayoutActivatorContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../../FirebaseSettings";
import { getDoc, collection, doc } from "firebase/firestore";
import Spinner from "../Spinner";

const ItemDetail = () => {
  const { spinner, setSpinner } = useContext(LayoutActivatorContext);
  const navigate = useNavigate();
  const useId = useParams();

  const [currentProduct, setCurrentProduct] = useState([]);

  //Fetching products from Firebase
  useEffect(() => {
    // Spinner Activator
    setSpinner(true);

    const itemCollection = collection(db, "aTempoProducts");
    const refDoc = doc(itemCollection, useId.productId);

    getDoc(refDoc)
      .then((res) => {
        setCurrentProduct(res.data());
        setSpinner(false);
      })
      .catch((err) => {
        // Replace navigate with the appropriate navigation function for your app
        navigate("/*");
        setSpinner(false);
      });
  }, [useId]);

  /*Get Items from an updated json to not consume them from firebase
  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1682176449/aTempo/Assets/aTempoProducts_no7idv.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const product = data.find((prod) => prod.id === useId.productId);
        setCurrentProduct(product);
      });
  }, []);*/

  const { img1, img2, img3, img4, img5, img6 } = currentProduct;

  const currentImages = [img1, img2, img3, img4, img5, img6];
  const imagesWithSrc = currentImages.filter((img) => img);

  //ID Generator
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  //Modal Activator
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState();

  const handleShowModal = (e, data) => {
    e.preventDefault();
    console.log(data);
    setShowModal(!showModal);
    setDataModal(data);
  };

  //Swipper Select Function
  const [imageSelected, setImageSelected] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSelectImage = (e, data) => {
    e.preventDefault();
    setImageSelected(data);
  };

  return (
    <div>
      {/*Modal*/}
      {showModal && (
        <div
          className="fixed drawerEffect z-30 min-h-full h-full bg-zinc-800/90 w-full"
          onClick={handleShowModal}
        >
          {dataModal === "shipping" ? (
            <div className="paymentInfo md:container md:mx-auto z-40 flex justify-center px-2 pt-20 md:pt-40">
              {/*Shipping*/}
              <div className="h-72 bg-zinc-100 rounded-lg p-4">
                <div className="flex justify-between py-4 border-b border-zinc-300">
                  {" "}
                  <h1 className="t text-xl font-medium text-zinc-800">
                    Medios de envío
                  </h1>
                  <button
                    onClick={handleShowModal}
                    type="button"
                    data-drawer-hide="drawer-example"
                    aria-controls="drawer-example"
                    className="text-gray-400  btnCloseDrawer bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>

                <div className="lg:pt-4">
                  <p className="mt-4">
                    Nos aseguramos que tu compra llegue en perfectas condiciones
                  </p>
                  <p className="mt-4">
                    Trabajamos con los mejores metodos de envio
                  </p>
                </div>

                <div className="flex justify-between px-5">
                  <img
                    src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682674432/aTempo/expressShiping2-removebg-preview_tflcev.png"
                    alt="pagofacil"
                    className="h-24"
                  />
                  <img
                    src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682673764/aTempo/expressShiping-removebg-preview_y4j6x9.png"
                    alt="rapipago"
                    className="h-16 mt-4"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="paymentInfo md:container md:mx-auto z-40 flex justify-center px-2 pt-20 md:pt-40">
              {/*Financing*/}
              <div className="h-72 bg-zinc-100 rounded-lg p-4">
                <div className="flex justify-between py-4 border-b border-zinc-300">
                  {" "}
                  <h1 className="t text-xl font-medium text-zinc-800">
                    Formas de Pago
                  </h1>
                  <button
                    onClick={handleShowModal}
                    type="button"
                    data-drawer-hide="drawer-example"
                    aria-controls="drawer-example"
                    className="text-gray-400  btnCloseDrawer bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>

                <div className="lg:py-4">
                  <p className="mt-4">
                    Podes pagar en efectivo, con tarjeta de debito o con tarjeta
                    de crédito
                  </p>
                  <p className="mt-4">
                    Tenés 3, 6 y hasta 12 cuotas sin interés con todas las
                    tarjetas bancarizadas
                  </p>
                </div>

                <div className="flex justify-between">
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 -140 780 780"
                    enableBackground="new 0 0 780 500"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m293.2 348.73l33.359-195.76h53.358l-33.384 195.76h-53.333zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-0.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-0.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885 0.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-0.271 30.088 3.534 39.936 7.5l4.781 2.259 7.231-42.427m137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555 0.084 68.336 0.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-0.314 0.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293v3e-3zm-363.3-126.41l-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-0.063 84.004-195.39-56.524-1e-3"
                      fill="#0E4595"
                    />
                    <path
                      d="m146.92 152.96h-86.041l-0.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
                      fill="#F2AE14"
                    />
                  </svg>

                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="55px"
                    height="55px"
                    viewBox="0 0 750 471"
                    enableBackground="new 0 0 750 471"
                    xmlSpace="preserve"
                  >
                    <title>Slice 1</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Page-1" sketch:type="MSPage">
                      <g id="mastercard" sketch:type="MSLayerGroup">
                        <path
                          id="Fill-1"
                          sketch:type="MSShapeGroup"
                          fill="#D9222A"
                          d="M434.008,235.5c0,99.142-80.371,179.504-179.508,179.504
			C155.363,415.004,75,334.642,75,235.5c0-99.133,80.362-179.504,179.5-179.504C353.637,55.996,434.008,136.367,434.008,235.5"
                        />
                        <path
                          id="Fill-2"
                          sketch:type="MSShapeGroup"
                          fill="#EE9F2D"
                          d="M495.491,55.996c-46.379,0-88.642,17.596-120.5,46.467
			c-6.487,5.883-12.546,12.238-18.125,18.996h36.267c4.958,6.029,9.525,12.371,13.684,19.012h-63.634
			c-3.813,6.104-7.274,12.446-10.342,19.008h84.313c2.88,6.159,5.421,12.496,7.601,19.004h-99.513
			c-2.075,6.191-3.821,12.529-5.217,19.008h109.941c2.638,12.25,4.042,24.967,4.042,38.008c0,19.934-3.254,39.112-9.254,57.021
			h-99.513c2.175,6.512,4.717,12.854,7.596,19.008h84.316c-3.074,6.563-6.528,12.904-10.346,19.012h-63.625
			c4.154,6.63,8.729,12.98,13.684,18.996h36.259c-5.571,6.771-11.634,13.134-18.13,19.013
			c31.858,28.866,74.117,46.454,120.496,46.454C594.629,415.004,675,334.642,675,235.5C675,136.371,594.629,55.996,495.491,55.996"
                        />
                        <path
                          id="Fill-3"
                          sketch:type="MSShapeGroup"
                          d="M651.074,335.559c0-3.2,2.592-5.801,5.796-5.801s5.796,2.601,5.796,5.801
			c0,3.199-2.592,5.8-5.796,5.8S651.074,338.758,651.074,335.559L651.074,335.559L651.074,335.559z M656.87,339.967
			c2.434,0,4.408-1.975,4.408-4.408c0-2.438-1.975-4.404-4.408-4.404c-2.438,0-4.404,1.967-4.404,4.404
			C652.466,337.992,654.433,339.967,656.87,339.967L656.87,339.967L656.87,339.967z M656.087,338.108H654.9v-5.096h2.15
			c0.45,0,0.908,0,1.304,0.254c0.413,0.279,0.646,0.771,0.646,1.279c0,0.571-0.338,1.104-0.884,1.313l0.938,2.25h-1.316
			l-0.779-2.017h-0.871V338.108L656.087,338.108z M656.087,335.217h0.658c0.246,0,0.505,0.021,0.726-0.1
			c0.195-0.125,0.296-0.359,0.296-0.584c0-0.195-0.121-0.421-0.288-0.517c-0.208-0.129-0.537-0.101-0.758-0.101h-0.634V335.217
			L656.087,335.217z"
                        />
                        <path
                          id="Fill-4"
                          sketch:type="MSShapeGroup"
                          d="M212.587,255.154c-2.046-0.238-2.945-0.301-4.35-0.301
			c-11.046,0-16.638,3.788-16.638,11.268c0,4.612,2.729,7.545,6.987,7.545C206.525,273.666,212.245,266.108,212.587,255.154
			L212.587,255.154L212.587,255.154z M226.758,288.15h-16.146l0.371-7.676c-4.926,6.066-11.496,8.95-20.426,8.95
			c-10.563,0-17.804-8.25-17.804-20.229c0-18.024,12.596-28.541,34.217-28.541c2.208,0,5.042,0.199,7.941,0.57
			c0.604-2.441,0.763-3.487,0.763-4.8c0-4.908-3.396-6.737-12.5-6.737c-9.533-0.108-17.396,2.271-20.625,3.333
			c0.204-1.229,2.7-16.659,2.7-16.659c9.712-2.846,16.116-3.917,23.325-3.917c16.732,0,25.596,7.513,25.579,21.712
			c0.033,3.805-0.597,8.5-1.579,14.671C230.883,259.559,227.254,282.546,226.758,288.15L226.758,288.15L226.758,288.15z"
                        />
                        <path
                          id="Fill-5"
                          sketch:type="MSShapeGroup"
                          d="M164.6,288.15h-19.487l11.162-69.996L131.35,288.15h-13.279l-1.642-69.596
			l-11.733,69.596H86.454l15.237-91.055h28.021l1.7,50.967l17.092-50.967h31.167L164.6,288.15"
                        />
                        <path
                          id="Fill-6"
                          sketch:type="MSShapeGroup"
                          d="M519.574,255.154c-2.037-0.238-2.941-0.301-4.342-0.301
			c-11.041,0-16.633,3.788-16.633,11.268c0,4.612,2.725,7.545,6.983,7.545C513.521,273.666,519.245,266.108,519.574,255.154
			L519.574,255.154L519.574,255.154z M533.758,288.15h-16.146l0.366-7.676c-4.925,6.066-11.5,8.95-20.421,8.95
			c-10.566,0-17.8-8.25-17.8-20.229c0-18.024,12.588-28.541,34.213-28.541c2.208,0,5.037,0.199,7.933,0.57
			c0.604-2.441,0.763-3.487,0.763-4.8c0-4.908-3.392-6.737-12.496-6.737c-9.533-0.108-17.387,2.271-20.629,3.333
			c0.204-1.229,2.709-16.659,2.709-16.659c9.712-2.846,16.112-3.917,23.313-3.917c16.741,0,25.604,7.513,25.587,21.712
			c0.033,3.805-0.596,8.5-1.579,14.671C537.887,259.559,534.25,282.546,533.758,288.15L533.758,288.15L533.758,288.15z"
                        />
                        <path
                          id="Fill-7"
                          sketch:type="MSShapeGroup"
                          d="M313.366,287.025c-5.333,1.679-9.491,2.399-14,2.399
			c-9.962,0-15.399-5.725-15.399-16.267c-0.142-3.271,1.433-11.879,2.671-19.737c1.125-6.917,8.449-50.529,8.449-50.529h19.371
			l-2.263,11.208h11.7l-2.642,17.796h-11.742c-2.25,14.083-5.454,31.625-5.491,33.95c0,3.816,2.037,5.483,6.671,5.483
			c2.221,0,3.941-0.226,5.254-0.7L313.366,287.025"
                        />
                        <path
                          id="Fill-8"
                          sketch:type="MSShapeGroup"
                          d="M372.758,286.425c-6.654,2.034-13.075,3.017-19.879,3
			c-21.684-0.021-32.987-11.346-32.987-33.033c0-25.313,14.379-43.946,33.899-43.946c15.971,0,26.171,10.433,26.171,26.796
			c0,5.429-0.7,10.729-2.388,18.212H339c-1.305,10.741,5.57,15.217,16.837,15.217c6.934,0,13.188-1.429,20.142-4.663
			L372.758,286.425L372.758,286.425z M361.87,242.525c0.108-1.542,2.055-13.217-9.013-13.217c-6.17,0-10.583,4.704-12.379,13.217
			H361.87L361.87,242.525z"
                        />
                        <path
                          id="Fill-9"
                          sketch:type="MSShapeGroup"
                          d="M238.446,237.508c0,9.367,4.542,15.826,14.842,20.676
			c7.892,3.708,9.112,4.809,9.112,8.17c0,4.617-3.479,6.701-11.191,6.701c-5.813,0-11.221-0.908-17.458-2.922
			c0,0-2.563,16.321-2.68,17.101c4.43,0.967,8.38,1.862,20.279,2.191c20.563,0,30.059-7.829,30.059-24.75
			c0-10.175-3.976-16.146-13.737-20.634c-8.171-3.75-9.108-4.587-9.108-8.045c0-4.004,3.237-6.046,9.537-6.046
			c3.825,0,9.05,0.408,14,1.112l2.775-17.175c-5.046-0.8-12.696-1.442-17.15-1.442C245.925,212.446,238.379,223.833,238.446,237.508
			"
                        />
                        <path
                          id="Fill-10"
                          sketch:type="MSShapeGroup"
                          d="M467.533,214.392c5.412,0,10.458,1.421,17.412,4.921l3.188-19.763
			c-2.854-1.121-12.904-7.7-21.417-7.7c-13.041,0-24.066,6.471-31.82,17.15c-11.309-3.746-15.958,3.825-21.658,11.367l-5.063,1.179
			c0.383-2.483,0.729-4.95,0.612-7.446h-17.896c-2.446,22.917-6.779,46.128-10.171,69.075l-0.884,4.976h19.496
			c3.254-21.143,5.037-34.68,6.121-43.842l7.341-4.084c1.097-4.078,4.529-5.458,11.417-5.291c-0.899,4.833-1.383,9.916-1.383,15.184
			c0,24.225,13.07,39.308,34.05,39.308c5.404,0,10.041-0.712,17.221-2.658l3.429-20.759c-6.458,3.18-11.758,4.676-16.558,4.676
			c-11.329,0-18.184-8.363-18.184-22.184C442.787,228.45,452.983,214.392,467.533,214.392"
                        />
                        <path
                          id="Fill-12"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M170.208,282.742h-19.491l11.171-69.988l-24.926,69.988h-13.283
			l-1.642-69.588l-11.733,69.588H92.063L107.3,191.7h28.021l0.788,56.362l18.904-56.362h30.267L170.208,282.742"
                        />
                        <path
                          id="Fill-11"
                          sketch:type="MSShapeGroup"
                          d="M632.521,197.096l-4.321,26.309c-5.329-7.013-11.054-12.088-18.612-12.088
			c-9.833,0-18.783,7.455-24.642,18.425c-8.158-1.692-16.596-4.563-16.596-4.563l-0.004,0.067c0.658-6.134,0.921-9.875,0.862-11.146
			h-17.9c-2.438,22.917-6.771,46.128-10.158,69.075l-0.892,4.976h19.492c2.633-17.096,4.649-31.292,6.133-42.551
			c6.658-6.016,9.992-11.266,16.721-10.916c-2.979,7.204-4.725,15.504-4.725,24.017c0,18.513,9.366,30.725,23.533,30.725
			c7.142,0,12.621-2.462,17.967-8.171l-0.913,6.884H636.9l14.842-91.042H632.521L632.521,197.096z M608.15,271.037
			c-6.633,0-9.983-4.908-9.983-14.596c0-14.554,6.271-24.875,15.112-24.875c6.696,0,10.321,5.104,10.321,14.509
			C623.6,260.754,617.229,271.037,608.15,271.037L608.15,271.037L608.15,271.037z"
                        />
                        <path
                          id="Fill-13"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M218.192,249.758c-2.042-0.236-2.946-0.299-4.346-0.299
			c-11.046,0-16.634,3.787-16.634,11.266c0,4.604,2.729,7.547,6.979,7.547C212.138,268.271,217.859,260.713,218.192,249.758
			L218.192,249.758L218.192,249.758z M232.37,282.742h-16.146l0.367-7.663c-4.921,6.054-11.5,8.95-20.421,8.95
			c-10.567,0-17.805-8.25-17.805-20.229c0-18.033,12.592-28.542,34.217-28.542c2.208,0,5.042,0.2,7.938,0.571
			c0.604-2.441,0.763-3.487,0.763-4.808c0-4.909-3.392-6.729-12.496-6.729c-9.537-0.108-17.396,2.271-20.629,3.321
			c0.204-1.225,2.7-16.637,2.7-16.637c9.708-2.858,16.12-3.929,23.32-3.929c16.737,0,25.604,7.517,25.588,21.704
			c0.029,3.821-0.604,8.513-1.584,14.675C236.495,254.15,232.863,277.15,232.37,282.742L232.37,282.742L232.37,282.742z"
                        />
                        <path
                          id="Fill-14"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M493.745,194.15l-3.191,19.767c-6.95-3.496-12-4.92-17.408-4.92
			c-14.55,0-24.75,14.058-24.75,34.107c0,13.821,6.858,22.18,18.184,22.18c4.8,0,10.096-1.492,16.554-4.675l-3.421,20.75
			c-7.184,1.958-11.816,2.671-17.225,2.671c-20.976,0-34.05-15.084-34.05-39.309c0-32.55,18.058-55.3,43.887-55.3
			C480.833,189.421,490.887,193.029,493.745,194.15"
                        />
                        <path
                          id="Fill-15"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M525.188,249.758c-2.042-0.236-2.942-0.299-4.347-0.299
			c-11.041,0-16.633,3.787-16.633,11.266c0,4.604,2.729,7.547,6.983,7.547C519.129,268.271,524.854,260.713,525.188,249.758
			L525.188,249.758L525.188,249.758z M539.366,282.742h-16.15l0.371-7.663c-4.925,6.054-11.5,8.95-20.421,8.95
			c-10.563,0-17.804-8.25-17.804-20.229c0-18.033,12.596-28.542,34.212-28.542c2.213,0,5.042,0.2,7.942,0.571
			c0.6-2.441,0.762-3.487,0.762-4.808c0-4.909-3.392-6.729-12.495-6.729c-9.533-0.108-17.396,2.271-20.63,3.321
			c0.204-1.225,2.704-16.637,2.704-16.637c9.709-2.858,16.117-3.929,23.317-3.929c16.741,0,25.604,7.517,25.583,21.704
			c0.033,3.821-0.596,8.513-1.579,14.675C543.495,254.15,539.854,277.15,539.366,282.742L539.366,282.742L539.366,282.742z"
                        />
                        <path
                          id="Fill-16"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M318.975,281.621c-5.338,1.679-9.496,2.408-14,2.408
			c-9.962,0-15.399-5.725-15.399-16.267c-0.138-3.279,1.438-11.88,2.675-19.737c1.12-6.926,8.445-50.534,8.445-50.534h19.367
			l-2.259,11.212h9.941l-2.646,17.788h-9.975c-2.25,14.092-5.463,31.621-5.496,33.95c0,3.83,2.041,5.483,6.671,5.483
			c2.221,0,3.938-0.216,5.254-0.691L318.975,281.621"
                        />
                        <path
                          id="Fill-17"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M378.366,281.029c-6.65,2.033-13.079,3.012-19.879,3
			c-21.684-0.021-32.987-11.346-32.987-33.033c0-25.321,14.379-43.95,33.899-43.95c15.971,0,26.171,10.429,26.171,26.8
			c0,5.434-0.7,10.733-2.383,18.213h-38.575c-1.305,10.741,5.57,15.221,16.837,15.221c6.93,0,13.188-1.434,20.138-4.676
			L378.366,281.029L378.366,281.029z M367.475,237.117c0.116-1.538,2.059-13.217-9.013-13.217c-6.167,0-10.579,4.717-12.375,13.217
			H367.475L367.475,237.117z"
                        />
                        <path
                          id="Fill-18"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M244.054,232.112c0,9.366,4.542,15.817,14.842,20.675
			c7.892,3.709,9.112,4.813,9.112,8.172c0,4.616-3.483,6.699-11.188,6.699c-5.816,0-11.225-0.908-17.467-2.921
			c0,0-2.554,16.321-2.671,17.101c4.421,0.967,8.375,1.85,20.275,2.191c20.566,0,30.059-7.829,30.059-24.746
			c0-10.18-3.971-16.15-13.737-20.637c-8.167-3.759-9.113-4.584-9.113-8.046c0-4,3.246-6.059,9.542-6.059
			c3.821,0,9.046,0.421,14.004,1.125l2.771-17.179c-5.042-0.8-12.692-1.441-17.146-1.441
			C251.533,207.046,243.991,218.425,244.054,232.112"
                        />
                        <path
                          id="Fill-19"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M642.508,282.742h-18.438l0.917-6.893
			c-5.346,5.717-10.825,8.18-17.967,8.18c-14.167,0-23.529-12.213-23.529-30.725c0-24.63,14.521-45.392,31.708-45.392
			c7.559,0,13.279,3.087,18.604,10.096l4.325-26.308h19.221L642.508,282.742L642.508,282.742z M613.762,265.633
			c9.075,0,15.45-10.283,15.45-24.953c0-9.405-3.629-14.509-10.325-14.509c-8.837,0-15.116,10.316-15.116,24.875
			C603.771,260.733,607.129,265.633,613.762,265.633L613.762,265.633L613.762,265.633z"
                        />
                        <path
                          id="Fill-20"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M556.92,208.704c-2.441,22.917-6.774,46.13-10.162,69.063
			l-0.892,4.976h19.491c6.972-45.275,8.659-54.117,19.588-53.009c1.742-9.267,4.983-17.383,7.4-21.479
			c-8.163-1.7-12.721,2.913-18.688,11.675c0.471-3.788,1.333-7.467,1.162-11.225H556.92"
                        />
                        <path
                          id="Fill-21"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M396.5,208.704c-2.446,22.917-6.779,46.13-10.167,69.063
			l-0.888,4.976h19.5c6.963-45.275,8.646-54.117,19.571-53.009c1.75-9.267,4.991-17.383,7.399-21.479
			c-8.154-1.7-12.717,2.913-18.679,11.675c0.471-3.788,1.325-7.467,1.162-11.225H396.5"
                        />
                        <path
                          id="Fill-22"
                          sketch:type="MSShapeGroup"
                          fill="#FFFFFF"
                          d="M651.067,276.945c0-3.212,2.596-5.799,5.796-5.799
			c3.204,0,5.796,2.587,5.796,5.799c0,3.196-2.592,5.797-5.796,5.797C653.662,282.742,651.067,280.142,651.067,276.945
			L651.067,276.945L651.067,276.945z M656.863,281.35c2.438,0,4.404-1.975,4.404-4.404c0-2.433-1.967-4.408-4.404-4.408
			c-2.434,0-4.408,1.976-4.408,4.408C652.454,279.375,654.429,281.35,656.863,281.35L656.863,281.35L656.863,281.35z
			 M656.079,279.479h-1.188v-5.082h2.153c0.446,0,0.909,0.008,1.296,0.254c0.417,0.283,0.654,0.766,0.654,1.274
			c0,0.575-0.337,1.112-0.888,1.317l0.942,2.236h-1.321l-0.779-2.008h-0.87V279.479L656.079,279.479z M656.079,276.6h0.653
			c0.246,0,0.513,0.018,0.729-0.1c0.196-0.125,0.296-0.362,0.296-0.588c0-0.188-0.116-0.412-0.287-0.524
			c-0.204-0.116-0.542-0.083-0.763-0.083h-0.629V276.6L656.079,276.6z"
                        />
                      </g>
                    </g>
                  </svg>

                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 -9 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="57"
                      height="39"
                      rx="3.5"
                      fill="#006FCF"
                      stroke="#F3F3F3"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.8632 28.8937V20.6592H21.1869L22.1872 21.8787L23.2206 20.6592H57.0632V28.3258C57.0632 28.3258 56.1782 28.8855 55.1546 28.8937H36.4152L35.2874 27.5957V28.8937H31.5916V26.6779C31.5916 26.6779 31.0867 26.9872 29.9953 26.9872H28.7373V28.8937H23.1415L22.1426 27.6481L21.1284 28.8937H11.8632ZM1 14.4529L3.09775 9.86914H6.7256L7.9161 12.4368V9.86914H12.4258L13.1346 11.7249L13.8216 9.86914H34.0657V10.8021C34.0657 10.8021 35.1299 9.86914 36.8789 9.86914L43.4474 9.89066L44.6173 12.4247V9.86914H48.3913L49.43 11.3247V9.86914H53.2386V18.1037H49.43L48.4346 16.6434V18.1037H42.8898L42.3321 16.8056H40.8415L40.293 18.1037H36.5327C35.0277 18.1037 34.0657 17.1897 34.0657 17.1897V18.1037H28.3961L27.2708 16.8056V18.1037H6.18816L5.63093 16.8056H4.14505L3.59176 18.1037H1V14.4529ZM1.01082 17.05L3.84023 10.8843H5.98528L8.81199 17.05H6.92932L6.40997 15.8154H3.37498L2.85291 17.05H1.01082ZM5.81217 14.4768L4.88706 12.3192L3.95925 14.4768H5.81217ZM9.00675 17.049V10.8832L11.6245 10.8924L13.147 14.8676L14.6331 10.8832H17.2299V17.049H15.5853V12.5058L13.8419 17.049H12.3996L10.6514 12.5058V17.049H9.00675ZM18.3552 17.049V10.8832H23.7219V12.2624H20.0171V13.3171H23.6353V14.6151H20.0171V15.7104H23.7219V17.049H18.3552ZM24.674 17.05V10.8843H28.3339C29.5465 10.8843 30.6331 11.5871 30.6331 12.8846C30.6331 13.9938 29.717 14.7082 28.8289 14.7784L30.9929 17.05H28.9831L27.0111 14.8596H26.3186V17.05H24.674ZM28.1986 12.2635H26.3186V13.5615H28.223C28.5526 13.5615 28.9776 13.3221 28.9776 12.9125C28.9776 12.5941 28.6496 12.2635 28.1986 12.2635ZM32.9837 17.049H31.3045V10.8832H32.9837V17.049ZM36.9655 17.049H36.603C34.8492 17.049 33.7844 15.754 33.7844 13.9915C33.7844 12.1854 34.8373 10.8832 37.052 10.8832H38.8698V12.3436H36.9856C36.0865 12.3436 35.4507 13.0012 35.4507 14.0067C35.4507 15.2008 36.1777 15.7023 37.2251 15.7023H37.6579L36.9655 17.049ZM37.7147 17.05L40.5441 10.8843H42.6892L45.5159 17.05H43.6332L43.1139 15.8154H40.0789L39.5568 17.05H37.7147ZM42.5161 14.4768L41.591 12.3192L40.6632 14.4768H42.5161ZM45.708 17.049V10.8832H47.7989L50.4687 14.7571V10.8832H52.1134V17.049H50.09L47.3526 13.0737V17.049H45.708ZM12.9885 27.8391V21.6733H18.3552V23.0525H14.6504V24.1072H18.2686V25.4052H14.6504V26.5005H18.3552V27.8391H12.9885ZM39.2853 27.8391V21.6733H44.6519V23.0525H40.9472V24.1072H44.5481V25.4052H40.9472V26.5005H44.6519V27.8391H39.2853ZM18.5635 27.8391L21.1765 24.7942L18.5012 21.6733H20.5733L22.1665 23.6026L23.7651 21.6733H25.756L23.1159 24.7562L25.7338 27.8391H23.6621L22.1151 25.9402L20.6057 27.8391H18.5635ZM25.9291 27.8401V21.6744H29.5619C31.0525 21.6744 31.9234 22.5748 31.9234 23.7482C31.9234 25.1647 30.8131 25.893 29.3482 25.893H27.617V27.8401H25.9291ZM29.4402 23.0687H27.617V24.4885H29.4348C29.9151 24.4885 30.2517 24.1901 30.2517 23.7786C30.2517 23.3406 29.9134 23.0687 29.4402 23.0687ZM32.6375 27.8391V21.6733H36.2973C37.51 21.6733 38.5966 22.3761 38.5966 23.6736C38.5966 24.7828 37.6805 25.4972 36.7923 25.5675L38.9563 27.8391H36.9465L34.9746 25.6486H34.2821V27.8391H32.6375ZM36.1621 23.0525H34.2821V24.3505H36.1864C36.5161 24.3505 36.9411 24.1112 36.9411 23.7015C36.9411 23.3831 36.6131 23.0525 36.1621 23.0525ZM45.4137 27.8391V26.5005H48.7051C49.1921 26.5005 49.403 26.2538 49.403 25.9833C49.403 25.7241 49.1928 25.462 48.7051 25.462H47.2177C45.9249 25.462 45.2048 24.7237 45.2048 23.6153C45.2048 22.6267 45.8642 21.6733 47.7854 21.6733H50.9881L50.2956 23.0606H47.5257C46.9962 23.0606 46.8332 23.321 46.8332 23.5697C46.8332 23.8253 47.0347 24.1072 47.4392 24.1072H48.9972C50.4384 24.1072 51.0638 24.8734 51.0638 25.8768C51.0638 26.9555 50.367 27.8391 48.9188 27.8391H45.4137ZM51.2088 27.8391V26.5005H54.5002C54.9873 26.5005 55.1981 26.2538 55.1981 25.9833C55.1981 25.7241 54.9879 25.462 54.5002 25.462H53.0129C51.72 25.462 51 24.7237 51 23.6153C51 22.6267 51.6594 21.6733 53.5806 21.6733H56.7833L56.0908 23.0606H53.3209C52.7914 23.0606 52.6284 23.321 52.6284 23.5697C52.6284 23.8253 52.8298 24.1072 53.2343 24.1072H54.7924C56.2336 24.1072 56.859 24.8734 56.859 25.8768C56.859 26.9555 56.1621 27.8391 54.7139 27.8391H51.2088Z"
                      fill="white"
                    />
                  </svg>

                  <img
                    src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682795766/aTempo/pagoFacil_vpdjsn.png"
                    alt="pagofacil"
                    className="h-10 mt-2"
                  />
                  <img
                    src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682795765/aTempo/rapiPago_vhknid.png"
                    alt="rapipago"
                    className="h-5 mt-4"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {spinner ? (
        <div className="h-screen">
          <Spinner />
        </div>
      ) : (
        <div>
          {" "}
          <BannerSix />
          <div className="lg:container mx-auto px-6 lg:pr-10 2xl:px-40 mt-4 lg:mt-6 mb-2">
            {/*Breadcrumb */}
            <nav className="flex lg:pl-10" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-2 pl-1">
                <li className="inline-flex items-center">
                  <Link
                    to="/"
                    className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-cyan-500"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link
                      to={`/ItemListContainer/${currentProduct.category}/all`}
                      className="ml-1 text-sm font-medium text-zinc-800 hover:text-cyan-500"
                    >
                      {currentProduct.category}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-zinc-800">
                      {currentProduct.product}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-12 grid-rows-12 grid-flow-row md:grid-flow-col lg:grid-flow-row gap-4 ">
              {/*Main Slider*/}
              <MainSlider
                imagesWithSrc={imagesWithSrc}
                generarID={generarID}
                thumbsSwiper={thumbsSwiper}
                handleSelectImage={handleSelectImage}
                setImageSelected={setImageSelected}
              />

              {/*Secondary Slider*/}
              <SecondarySlider
                imagesWithSrc={imagesWithSrc}
                generarID={generarID}
                handleSelectImage={handleSelectImage}
                setThumbsSwiper={setThumbsSwiper}
                imageSelected={imageSelected}
              />

              {/*Product Info*/}
              <ProductInfo
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
                handleShowModal={handleShowModal}
              />
            </div>

            {/*Product Description*/}
            <ProductDescription currentProduct={currentProduct} />
          </div>
          <div className="h-fit w-full">
            <div className="md:container mx-auto mt-4 py-2 md:py-0 bg-zinc-800 md:bg-transparent">
              <p className="text-center font-bold text-lg md:text-2xl lg:text-4xl text-zinc-200 md:text-zinc-800">
                RECOMENDADOS
              </p>
            </div>
            <CarouselOne />

            <BannerTwo />

            <CarouselTwo />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
