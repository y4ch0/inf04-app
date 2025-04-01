import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HashRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import "./assets/modernify.css";
import "./assets/utility.js";
import "./assets/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "./components/ScrollToTop.tsx";
import NotFound from "./views/NotFound.tsx";
/* Widoki w kategorii HTML */
import HTML_Intro from "./views/html/Introduction";
import HTML_Structure from "./views/html/Structure";
import HTML_Tags from "./views/html/Tags";
import HTML_StructureDesign from "./views/html/StructureDesign";
import HTML_ProgrammerMagic from "./views/html/ProgrammerMagic.tsx";
/* Widoki w kategorii HTML -> Przykładowe elementy */
import HTML_Structure_Examples from "./views/html/StructureExamples/StructureExamples.tsx";
import HTML_Structure_Example1 from "./views/html/StructureExamples/1.tsx";
import HTML_Structure_Example2 from "./views/html/StructureExamples/2.tsx";
/* Widoki w kategorii CSS */
import CSS_Introduction from "./views/css/Introduction.tsx";
import CSS_Class from "./views/css/CSSClass.tsx";
import CSS_HTMLAttributes from "./views/css/HTMLAttributes.tsx";
/* Widoki w kategorii React */
import React_Intro from "./views/react/Introduction.tsx";
import React_CreatingApp from "./views/react/CreatingApp.tsx";
import React_Components from "./views/react/Components.tsx";
import React_ComponentLogic from "./views/react/ComponentLogic.tsx";
import React_Loops from "./views/react/Loops.tsx";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
            {/* Widoki w kategorii HTML */}
            <Route path="html">
                <Route index element={<HTML_Intro />} />
                <Route path="wprowadzenie">
                    <Route index element={<HTML_Intro />} />
                    <Route path="struktura" element={<HTML_Structure />} />
                    <Route path="znaczniki" element={<HTML_Tags />} />
                </Route>
                <Route path="projektowanie-struktur">
                    <Route index element={<HTML_StructureDesign />} />
                    <Route path="przyklady">
                        <Route index element={<HTML_Structure_Examples />} />
                        <Route path="INF.03-2023-06.01-SG" element={<HTML_Structure_Example1 />} />
                        <Route path="INF.03-2023-06.02-SG" element={<HTML_Structure_Example2 />} />
                    </Route>
                </Route>
                <Route path="sztuczki-programisty" element={<HTML_ProgrammerMagic />} />
            </Route>
            {/* Widoki w kategorii CSS */}
            <Route path="css">
                <Route index element={<CSS_Introduction />} />
                <Route path="wprowadzenie">
                    <Route index element={<CSS_Introduction />} />
                </Route>
                <Route path="klasy-identyfikatory" element={<CSS_Class />} />
                <Route path="wlasciwosci-elementow-html" element={<CSS_HTMLAttributes />} />
            </Route>
            {/* Widoki w kategorii React */}
            <Route path="react">
                <Route index element={<React_Intro />} />
                <Route path="wprowadzenie" element={<React_Intro />} />
                <Route path="tworzenie-aplikacji" element={<React_CreatingApp />} />
                <Route path="komponenty" element={<React_Components />} />
                <Route path="komponenty-logika" element={<React_ComponentLogic />} />
                <Route path="petle" element={<React_Loops />} />
            </Route>
        </Routes>
        <Footer />
    </HashRouter>
);
