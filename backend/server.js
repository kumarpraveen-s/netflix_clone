import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// if (ENV_VARS.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "backend/public")));
//     // Enhanced catch-all with error handling
//     const filePath = path.join(__dirname, "backend", "public", "index.html");
//     console.log("Attempting to serve:", filePath);
//     app.get("/*", (req, res) => {
//         res.sendFile(filePath, (err) => {
//             if (err) {
//                 console.error("Error serving index.html:", err);
//                 res.status(500).send("Error loading page");
//             }
//         });
//     });
// }

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
    connectDB();
});
