import express from "express"
import { createNote, deleteNote, updateNote,getAllnotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllnotes);
router.post("/", createNote);
router.put("/:id",updateNote);
router.delete("/:id", deleteNote);

export default router;



    