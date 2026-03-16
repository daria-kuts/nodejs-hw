import { Router } from "express";
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';
import { authenticate } from '../middleware/authenticate.js';

router.use(authenticate);

const router = Router();

router.get('/', celebrate(getAllNotesSchema), getAllNotes);

router.get('/:noteId', celebrate(noteIdSchema), getNoteById);

router.post('/', celebrate(createNoteSchema), createNote);

router.patch('/:noteId', celebrate(updateNoteSchema), updateNote);

router.delete('/:noteId', celebrate(noteIdSchema), deleteNote);

export default router;
