import React, { useState } from "react";
import Axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Loader from "react-loader-spinner";

const key = "13722015-1e14ecea112e19cd1d66141e7";
const url = "https://pixabay.com/api/";

const Main = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);

  const inputChange = e => {
    setName(e.target.value);
    setStep(1);
    setImages([]);
  };

  const onSubmit = e => {
    e.preventDefault();
    getImage(step);
  };

  const getImage = async step => {
    setLoader(true);
    const ursSearch = `${url}?q=${name}&page=${step}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const res = await Axios.get(ursSearch);
      setImages(images.concat(res.data.hits));
    } catch (error) {
      console.log("error");
    } finally {
      setLoader(false);
    }
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const currentPage = async () => {
    const updateStep = step + 1;
    setStep(updateStep);
    await getImage(updateStep);
    scroll();
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} inputChange={inputChange} />
      {loader && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {!loader && <ImageGallery images={images} />}
      {!!images.length && <Button currentPage={currentPage} />}
    </>
  );
};

export default Main;
