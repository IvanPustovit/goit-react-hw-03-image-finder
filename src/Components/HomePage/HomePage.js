import React, { useState } from "react";
import Axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Loader from "../Loader/Loaders";
import * as api from "../../utils/api";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const [errorGet, setError] = useState("");

  const inputChange = (e) => {
    setName(e.target.value);
    setStep(1);
    setImages([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getImage(step);
    setName("");
  };

  const getImage = async (step) => {
    setLoader(true);
    const ursSearch = `${api.url}?q=${name}&page=${step}&key=${api.key}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const res = await Axios.get(ursSearch);

      setImages((prev) => [...prev, ...res.data.hits]);
    } catch (error) {
      setError("UPS error server");
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
      <Searchbar onSubmit={onSubmit} inputChange={inputChange} value={name} />
      {loader && <Loader />}
      {!loader && <ImageGallery images={images} />}
      {!!images.length && <Button currentPage={currentPage} />}
      {!!errorGet.length && <p>{errorGet}</p>}
    </>
  );
};

export default HomePage;
