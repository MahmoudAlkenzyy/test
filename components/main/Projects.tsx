"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // استيراد Framer Motion

// تعريف نوع المنتج
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  githubLink?: string;
  projectLink?: string;
}

// تعريف الفئات
const categories: string[] = [
  // "All"
  // "HTML & CSS",
  // "React-js",
  // "Next-js",
  // "Node-js",
  // "JavaScript",
];

const ProductList: React.FC = () => {
  // بيانات المشاريع يدويًا
  const [products, setProducts] = useState<Product[]>([
    {
      _id: "1",
      name: "Teksa Website" ,
      description: "Teksa is an application platform that offers innovative digital solutions, providing a seamless user experience with high-quality apps tailored for various needs",
      price: 50,
      category: "React-js",
      image: "/WhatsAppImage2025-02-17at14.50.59_da4e09c7-ezgif.com-png-to-webp-converter.webp", // يمكن أن تكون صورة محلية أو رابط خارجي
      // githubLink: "https://github.com/your-username/project1",
      projectLink: "http://teksa.sa/"
    },
    {
      _id: "2",
      name: "Alassly Website",
      description: "Alassly is an online store built on WordPress that sells electronic devices, offering a wide range of high-quality products with a user-friendly shopping experience.",
      price: 75,
      category: "Next-js",
      image: "/2025-02-17-16-05-alassly.com-ezgif.com-png-to-webp-converter.webp",
      // githubLink: "https://github.com/your-username/project2",
      projectLink: "https://alassly.com/"
    },
    {
      _id: "3",
      name: "Shata-limon Website",
      description: "Shata-Limon is a restaurant website that showcases its menu, offers online reservations, and provides a seamless dining experience with a vibrant and user-friendly design.",
      price: 75,
      category: "Next-js",
      image: "/WhatsAppImage2025-02-17at15.23.30_1e52bee8-ezgif.com-png-to-webp-converter.webp",
      // githubLink: "https://github.com/your-username/project2",
      projectLink: "https://shata-limon.com/"
    },
    {
      _id: "4",
      name: " Code Time Website",
      description: "Code Time Website is a marketing and development company that provides cutting-edge digital solutions, including web development, app creation, and strategic marketing services to help businesses grow online",      
      price: 75,
      category: "Next-js",
      image: "/WhatsAppImage2025-02-17at15.26.05_8b2238b2-ezgif.com-png-to-webp-converter.webp ",
      // githubLink: "https://github.com/your-username/project2",
      projectLink: "https://thecodetime.com/"
    },
    {
      _id: "5",
      name: " Jehazcom Website " ,
      description:" Jehazcom is an online store that offers a wide range of electronic devices and accessories, providing a seamless shopping experience with high-quality products and reliable customer service.",
      price: 75,
      category: "Next-js",
      image: "/WhatsAppImage2025-02-17at15.32.30_953928dc-ezgif.com-png-to-webp-converter.webp",
      // githubLink: "https://github.com/your-username/project2",
      projectLink: "https://jehazcom.com/"
    },
    {
      _id: "6",
      name: "Elkharof elkfo Website " ,
      description:"Elkharof Elkfo is a butcher shop website that offers fresh, high-quality meat products with convenient online ordering and delivery options, ensuring a premium shopping experience for customers.",
      price: 75,
      category: "Next-js",
      image: "/WhatsAppImage2025-02-17at15.37.24_fb8a7b5b-ezgif.com-png-to-webp-converter.webp",
      // githubLink: "https://github.com/your-username/project2",
      projectLink: "https://elkharof-elkfo.com/"
    }
    
    // أضف مشاريع أخرى هنا بنفس الطريقة
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;

  // تصفية المنتجات حسب الفئة
  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // حساب المنتجات المعروضة في الصفحة الحالية
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // تغيير الصفحة
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // الانتقال إلى الصفحة السابقة
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // الانتقال إلى الصفحة التالية
  const goToNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // تعريف انميشن للتلاشي مع التكبير
  const fadeInScaleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="p-5 container" id="projects">
      <h2 className="text-center text-2xl font-bold mb-6 text-white z-[500] flex items-center justify-center gap-2 md:pt-0 pt-20">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">
          🛍 All projects
        </span>
      </h2>

      {/* قائمة الفئات */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // إعادة تعيين الصفحة إلى 1 عند تغيير الفئة
            }}
            className={`px-4 py-2 text-lg font-semibold transition-colors text-center cursor-pointer rounded-lg z-[500] ${
              selectedCategory === category
                ? "bg-[#7126cdad] text-white"
                : "button-primary text-gray-300 hover:bg-[#bf97ff3d]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض المنتجات مع انميشن */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <motion.div
                key={product._id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeInScaleAnimation}
                transition={{ duration: 0.5 }}
                className="border-2 border-[#8d60d4c5] rounded-lg cursor-pointer text-white bg-[#1a172f8d] backdrop-blur-md rounded-b-lg relative z-[500] hover:border-[#bf97ffa2] hover:-translate-y-2 transition-all duration-300 ease-in-out transform"
              >
                {product.image && (
                  <div className="relative w-full h-[200px] rounded-t-lg bg-black flex justify-center items-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={200}
                      style={{ objectFit: "contain" }}
                      className="w-auto h-full"
                    />
                  </div>
                )}

                <div>
                  <div className="px-4 z-[600]">
                    <h3 className="text-xl font-semibold pt-4 z-[600]">
                      {product.name}
                    </h3>
                    <p className="mt-2 z-[600] text-gray-400">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <div className="flex gap-2 items-center">
                      <a
                        href={product.githubLink}
                        className="z-[600] text-3xl hover:text-[#bf97ffa2] transition-colors duration-300"
                      >
                        <FaGithub />
                      </a>
                    </div>
                    <div>
                      {product.projectLink && (
                        <a
                          href={product.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="z-[600] hover:text-[#bf97ffa2] transition-colors duration-300 text-2xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-xl font-bold col-span-full text-white">
              🚀 No products available for this category
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* أزرار الترقيم (Pagination) مع أيقونات السابق والتالي */}
      <div className="flex justify-center items-center mt-8 gap-2 z-[300]">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-3 py-3 text-lg font-semibold rounded-md transition-colors z-[300] relative ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaAnglesLeft />
        </button>

        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors z-[300] relative ${
              currentPage === pageNumber
                ? "bg-[#7126cdad] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
          className={`px-3 py-3 text-lg font-semibold rounded-md transition-colors z-[300] relative ${
            currentPage === Math.ceil(filteredProducts.length / productsPerPage)
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
