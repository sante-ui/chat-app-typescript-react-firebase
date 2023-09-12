import { FC } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import Add from "../img/profile-icon-gradient.png";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  displayName: string;
  email: string;
  password: string;
  imageFile?: File | null;
}

export const Register: FC<RegisterProps> = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const displayName = formData.get("displayName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const file = formData.get("file") as File;

    console.log("displayName:", displayName);
    console.log("email:", email);
    console.log("password:", password);
    console.log("file:", file);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log("User Created:", res);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file);

      // Retrieve the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Create user on Firestore
       await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      // Create empty user chats on Firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      // Navigate to a new route after successful registration
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center m-0 p-0"
      style={{ height: "100vh" }}
    >
      <Container
        fluid
        className="text-white bg-primary pt-4 pb-3 px-4 rounded m-0"
        style={{ maxWidth: "30.75rem" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="fw-bold text-center text-white mb-2"> My-chat </h1>
          <span className="d-block text-white text-center fw-bold mb-3">
            register
          </span>
          <input
            className="form-control w-100 rounded-1"
            name="displayName"
            placeholder="Display name"
          />
          <p className="text-danger mt-1"> </p>
          <input
            className="form-control w-100 rounded-1"
            name="email"
            placeholder="Email"
          />
          <p className="text-danger mt-1"> </p>
          <input
            className="form-control w-100 rounded-1"
            name="password"
            type="password"
            placeholder="Password"
          />
          <p className="text-danger mt-1"> </p>
          <input
            required
            style={{ display: "none" }}
            type="file"
            name="imageFile"
            id="file"
          />
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img
              className="bg-white rounded-4 me-2"
              style={{ height: "15%", width: "15%" }}
              src={Add}
              alt=""
            />
            <span className="text-white text-center fw-bold mb-1">
              {" "}
              Add an image{" "}
            </span>
          </label>
          <p className="text-danger mt-1"> </p>
          <input
            className="d-block bg-secondary text-center text-white rounded border-0 py-2 w-100"
            type="submit"
            value="Sign up"
            disabled={loading}
          />
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
          <span className="d-block text-white text-center p-0 mt-3 mb-0">
            {" "}
            you do have an account?{" "}
            <span
              className="text-secondary fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Login{" "}
            </span>{" "}
          </span>
        </form>
      </Container>
    </div>
  );
};
