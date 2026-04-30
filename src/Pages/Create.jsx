// Create.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Overlay - Blur Effect */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" 
        onClick={handleClose}
      ></div>
      
      {/* Modal Container */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-0 sm:p-4 pointer-events-none">
        
        {/* Modal Box - Responsive Width & Height */}
        <div className="bg-[#262626] w-full h-full sm:h-auto sm:max-w-md md:max-w-lg rounded-none sm:rounded-xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl">
          
          {/* Header - Instagram Style */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-[#262626]">
            <button onClick={handleClose} className="text-white text-sm font-medium sm:hidden">
              Cancel
            </button>
            <h2 className="text-base sm:text-lg font-semibold text-white">
              Create new post
            </h2>
            {selectedImage ? (
               <button onClick={() => alert("Post created!")} className="text-blue-500 font-bold text-sm">
               Share
             </button>
            ) : (
              <button onClick={handleClose} className="hidden sm:block text-white text-2xl leading-none">
                ×
              </button>
            )}
          </div>

          {/* Body - Image Upload Area */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 min-h-[300px] sm:min-h-[400px]">
            {!selectedImage ? (
              <div className="flex flex-col items-center gap-4 text-center">
                {/* Icon */}
                <svg
                  className="w-16 h-16 sm:w-24 sm:h-24 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <p className="text-white text-lg sm:text-xl font-light">Drag photos and videos here</p>

                <label className="mt-2 bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition cursor-pointer">
                  Select from computer
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 overflow-hidden flex items-center justify-center">
                   <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleRemoveImage}
                    className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition"
                  >
                    Discard
                  </button>
                  <button
                    onClick={() => alert("Post created!")}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition hidden sm:block"
                  >
                    Share
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;













