import React, { useEffect, useState } from "react";
import myContext from "./data/myContext";
import { fireDB, storage } from "../firebase/FireBaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [products, setProducts] = useState({
    title: null,
    price: null,
    // thumbnail: null,
    category: null,
    description: null,

    // time: Timestamp.now(),
    // date: new Date().toLocaleString("en-US", {
    //   month: "short",
    //   day: "2-digit",
    //   year: "numeric",
    // }),
  });
  const [thumbnail, setThumbnail] = useState();

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      // products.thumbnail == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields bhai");
    }
    uploadImage();
    // };

    // const productRef = collection(fireDB, "products");
    // setLoading(true);
    // try { addDoc(productRef, products);
    //   toast.success("Product Add successfully");
    getProductData();
    //   closeModal();
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
    // setProducts("");
  };

  ////**************UploadImage************ */
  const uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage, `productimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDB, "products");
        try {
          addDoc(productRef, {
            products,
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          toast.success("Post Added Successfully");
          // navigate("/dashboard");
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      });
    });
  };

  // ****** get product************///

  const [Product, setProduct] = useState([]);
  // console.log(Product)

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const edithandle = (item) => {
    setProducts(item);
  };

  // update product
  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProductData();
      setLoading(false);
      window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      // console.log(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      // console.log(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <myContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        Product,
        setProduct,
        updateProduct,
        edithandle,
        deleteProduct,
        order,
        user,
        setUser,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        thumbnail,
        setThumbnail,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
