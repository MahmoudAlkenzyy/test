"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLink } from "react-icons/fa";
import LoginComponent from "./Login";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  githubLink: string;
  projectLink: string;
  category: string;
}

interface FormData {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  projectLink: string;
  category: string;
}

const ProductFormComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    image: "",
    githubLink: "",
    projectLink: "",
    category: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let isMounted = true;
    if (isAuthenticated) {
      fetchProducts().catch(console.error);
    }
    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  const categories = ["HTML & CSS", "React-js", "Next-js", "Node-js", "JavaScript"];

  const fetchProducts = async () => {
    try {
      const res = await axios.get<Product[]>("https://backend-alpha-smoky-74.vercel.app/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size exceeds 5MB.");
      return;
    }

    try {
      const options = { maxSizeMB: 2, maxWidthOrHeight: 1080, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onload = () => setFormData({ ...formData, image: reader.result as string });
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Image compression failed:", error);
      toast.error("Image compression error.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`https://backend-alpha-smoky-74.vercel.app/api/products/${editId}`, formData);
        toast.success("Product updated successfully!");
      } else {
        const res = await axios.post("https://backend-alpha-smoky-74.vercel.app/api/products", formData);
        toast.success("Product added successfully!");
        setProducts([res.data, ...products]);
      }
      setFormData({ name: "", description: "", image: "", githubLink: "", projectLink: "", category: "" });
      setEditId(null);
    } catch (error) {
      console.error("Error adding/updating product:", error);
      toast.error("An error occurred while adding/updating the product!");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <LoginComponent onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <form onSubmit={handleSubmit} ref={formRef}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
          <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} required />
          <input type="text" name="projectLink" value={formData.projectLink} onChange={handleChange} required />
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />
          <button type="submit">{editId ? "Update Product" : "Add Product"}</button>
        </form>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ProductFormComponent;
