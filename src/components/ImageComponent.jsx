import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../store/slices/ImageSlice";

const ImageComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.image);


  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return <div>

{
     images.isLoading ? <>
     Loading....
     </>: <>
     {images.images?.map((element) => (
        <img src={element.url} alt="error-icon" key={element.id}/>
     ))}
     </>
}

  </div>;
};

export default ImageComponent;
