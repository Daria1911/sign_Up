import React from "react";
import ReactDOMClient from "react-dom/client";
import { Frame } from "./screens/Frame";
import {BirthdaySelection} from "./screens/BirthdaySelection";
import {Header} from "./components/Header/Header";
import { BrowserRouter,
    Routes,
    Route,
    Link,} from "react-router-dom";
import {Favorite} from "./screens/Favorite/Favorite";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/second" element={<Frame />} />
                <Route path="/third" element={<BirthdaySelection />} />
                <Route path="/fifth" element={<Favorite />} />
            </Routes>
        </BrowserRouter>

    </>
);
