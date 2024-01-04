import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

const AddRecipe = () => {

  // Global vars :
  const [nom, setNom] = useState('')
  const ingredientsRef = useRef([])
  const imageRef = useRef(null)
  const [rating, setRating] = useState(0) // To store rating value
  const [origines, setOrigines] = useState([]) // To store origines
  const [selectedOrigine, setSelectedOrigine] = useState(null) // To get origine id selected
  const [imageUrl, setImageUrl] = useState(null);
  // ______________________________
  // handling inputs:
  const handleNom = (e) => {
    setNom(e.target.value)
  }

  // ______________________________
  // To take a rating value
  const handleRating = (e) => {
    const ratingCatched = parseInt(e.target.value, 10);
    setRating(ratingCatched)
  }

  // ______________________________

  // Clear input values and file input
  const clearInputs = () => {
    setNom('');
    setSelectedOrigine(null);
    ingredientsRef.current.value = '';
    imageRef.current.value = null; // Reset the file input
    setRating(0); // Reset rating
    setImageUrl(null); // Clear image URL

  };

  // ______________________________________________________________ 
  // Function to handle upload image to cloudinary server
  const handleUploadImage = async (image) => {
    try {

      // Create an instance from FormData class for handling image
      const formData = new FormData()
      formData.append('file', image)
      formData.append('upload_preset', "zl2bprmx")

      // Making call api (post)
      const response = await axios.post("https://api.cloudinary.com/v1_1/db4rh6kdl/image/upload", formData)
      const data = await response.data;

      return data.url;

    } catch (error) {
      console.error("Error uploading image:", error);
    }


  }
  // ______________________________________________________________ 


  // Main Function :   ____________________________________________

  const handleOnSubmit = async (e) => {
    try {

      e.preventDefault();

      const ingredients = ingredientsRef.current.value.split(',').map(ingredient => ingredient.trim());
      const image = imageRef.current.files[0];

      // Check validation:
      if (!nom || !ingredientsRef.current.value || !imageRef.current.files[0]) {
        console.error("Please fill in all required fields");
        alert("Please fill in all required fields")
        return;
      }

      // ______________________________

      // Calling the func for handling image and awaiting for image processing
      const imageUrl = await handleUploadImage(image)
      // console.log('imageUrl: ', imageUrl)

      // ______________________________

      // Make Post request to json-server
      const response = await axios.post(`http://localhost:3000/plats`, {
        nom,
        origine: selectedOrigine,
        ingredients,
        popularite: rating,
        image: imageUrl
      });
      const data = await response.data;
      console.log('body : ', data)

      // Clear data ____________________
      clearInputs();


    } catch (error) {
      console.log("Error submiting data:", error)
    }
  }

  // ______________________________________________________________ 
  // Handling origine:
  const handleOnSelect = (e) => {
    const origineId = parseInt(e.target.value, 10);
    setSelectedOrigine(origineId)
  }

  // To get origines
  useEffect(() => {

    const getOrigines = () => {
      axios.get(`http://localhost:3000/origines`)
        .then(response => {
          // console.log(response.data)
          setOrigines(response.data)
        })
        .catch(error => console.log('Error fetching origines : ', error))
    }

    getOrigines();

  }, [])

  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };


  // ______________________________________________________________ 

  return (
    <form onSubmit={handleOnSubmit} className="bg-f4f4f4 p-20 border-radius-5 flex justify-center flex-col">
      <label className="mb-5 font-bold text-191919">Recipe name:</label>
      <input
        value={nom}
        onChange={handleNom}
        type="text"
        placeholder="Enter recipe name"
        className="w-1/2 p-3 border-2 border-#191919 rounded-lg"
      />

      <label className="mb-5 mt-5 font-bold text-191919">Choose an origine:</label>
      <select onChange={handleOnSelect} className="w-1/2 p-3 border-2 border-#191919 rounded-lg ">
        {origines &&
          origines.map((origine, index) => (
            <option key={index} value={origine.id}>
              {origine.nom}
            </option>
          ))}
      </select>

      <label className="mb-5 mt-5 font-bold text-191919">Ingredients: (séparés par des virgules):</label>
      <textarea ref={ingredientsRef} type="text" placeholder="Enter the Ingredients (séparés par des virgules)..." rows="4" className="w-1/2 p-3 border-2 border-#191919 rounded-lg" />

      <label className="mb-5 mt-5 font-bold text-191919">Popularite:</label>
      <input
        value={rating}
        onChange={handleRating}
        type="number"
        min="0"
        max="5"
        placeholder="Enter your popularite"
        className="w-1/2 p-3 border-2 border-#191919 rounded-lg"
      />

      <div className="flex items-center mt-5">
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-dark"> {rating} </p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      </div>

      <label className="mb-5 mt-5 font-bold text-191919">Images:</label>
      <input
        type="file"
        ref={imageRef}
        className="w-1/2 p-3 border-2 border-#191919 rounded-lg"
        onChange={handleImageChange} />

      {/* Display selected image */}
      {imageUrl && (
        <div className="mt-5">
          <img src={imageUrl} alt="Selected" className="w-1/3 p-3 max-w-full h-auto border-2 border-#191919 rounded-lg" />
        </div>
      )}

      <button type="submit" className="w-1/2 p-3 mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipe;