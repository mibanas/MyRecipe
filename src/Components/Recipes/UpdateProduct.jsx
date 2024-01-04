import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {

    // Global vars :

    const [nom, setNom] = useState("")
    const [rating, setRating] = useState(0) // To store rating value
    const [origines, setOrigines] = useState([]) // To store origines
    const [selectedOrigine, setSelectedOrigine] = useState("") // To take origine selected
    const imageRef = useRef(null)
    const [imageUrl, setImageUrl] = useState(null)
    const ingredientsRef = useRef(null);

    // ______________________________

    // Get params
    const { id } = useParams();
    // console.log('id of product :', id)

    // Global variables:
    const [data, setData] = useState(null)


    // get the product by id
    const getPlat = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/plats/${id}`);
            const bodyData = await response.data;

            console.log(bodyData.ingredients)
            // console.log(bodyData.ingredients[0])

            if (ingredientsRef.current) {
                console.log(bodyData.ingredients.join('\n'))
                ingredientsRef.current.value = bodyData.ingredients.join(', ');
            }

            setData(bodyData)
            setNom(bodyData.nom)
            setSelectedOrigine(bodyData.origine) // To get origine id
            setRating(bodyData.popularite) // To get rating
            setImageUrl(bodyData.image)



        } catch (error) {
            console.log('Error echec to get product by id', error)
        }
    }

    // To get origines
    const getOrigines = () => {
        axios.get(`http://localhost:3000/origines`)
            .then(response => {
                setOrigines(response.data);
            })
            .catch(error => console.log('Error to get origines : ', error));
    }

    useEffect(() => {

        getPlat();      // Get plat sélectionné par son id
        getOrigines();  // Get origines list

    }, [])


    // Handling origine selected :
    const handleOnSelect = (e) => {
        setSelectedOrigine(e.target.value)
    }

    const handleNom = (e) => {
        setNom(e.target.value)
    }

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

    // handling update
    const handleOnUpdate = async (e) => {

        e.preventDefault();

        try {

            const updatedIngredients = ingredientsRef.current.value.split(",").map((ingredient) => ingredient.trim());
            const image = imageRef.current.files[0];

            // Calling the func for handling image and awaiting for image processing
            const imageUrl = await handleUploadImage(image)

            const response = await axios.put(`http://localhost:3000/plats/${id}`, {
                nom: nom,
                origin: selectedOrigine,
                ingredients: updatedIngredients,
                popularite: rating,
                image: imageUrl

            })

            const updatedData = await response.data;
            console.log(updatedData)

            console.log("Updated successfully !")

        } catch (error) {
            console.log("Error updating !", error)

        }

    }

    // handling if data is empty
    if (!data) {
        return <div>Loading ...</div>
    }

    // if there isn't any prob
    return (
        data && (
            <form onSubmit={handleOnUpdate} className="bg-f4f4f4 p-20 border-radius-5 flex justify-center flex-col">
                <label className="mb-5 font-bold text-191919">Recipe name:</label>
                <input
                    value={nom}
                    onChange={handleNom}
                    type="text"
                    placeholder="Enter recipe name"
                    className="w-1/2 p-3 border-2 border-#191919 rounded-lg"
                />

                <label className="mb-5 mt-5 font-bold text-191919">Choose an origine:</label>
                <select value={selectedOrigine} onChange={handleOnSelect} className="w-1/2 p-3 border-2 border-#191919 rounded-lg ">
                    {origines &&
                        origines.map((origine, index) => (
                            <option key={index} value={origine.id}>
                                {origine.nom}
                            </option>
                        ))}
                </select>

                <label className="mb-5 mt-5 font-bold text-191919">Ingredients: (séparés par des virgules):</label>
                <textarea
                    ref={ingredientsRef}
                    type="text"
                    placeholder="Enter the Ingredients (séparés par des virgules)..." rows="4" className="w-1/2 p-3 border-2 border-#191919 rounded-lg" />

                <label className="mb-5 mt-5 font-bold text-191919">Popularite:</label>

                <input
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
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
                <input type="file"
                    ref={imageRef}
                    onChange={() => {
                        const file = imageRef.current.files[0];
                        if (file) {
                            const imageUrl = URL.createObjectURL(file);
                            setImageUrl(imageUrl);
                        }
                    }}
                    className="w-1/2 p-3 border-2 border-#191919 rounded-lg"
                />

                {/* Display selected image */}
                {imageUrl && (
                    <div className="mt-5">
                        <img src={imageUrl} alt="Selected" className="w-1/3 p-3 max-w-full h-auto border-2 border-#191919 rounded-lg" />
                    </div>
                )}

                <button type="submit" className="w-1/2 p-3 mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Update Recipe
                </button>
            </form>
        )
    )
}

export default UpdateProduct