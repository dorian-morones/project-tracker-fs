import express from 'express';
import type { Request, Response } from 'express';
import { supabase } from '../supabase';

const router = express.Router();

// GET /projects
router.get('/', async (req: Request, res: Response) => {
    const { data, error } = await supabase.from('projects').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// POST /projects
router.post('/', async (req: Request, res: Response) => {
    const {
        project_code,
        description,
        product_line,
        wants_notifications = false,
        notification_preference,
    } = req.body;

    if (
        !project_code ||
        !/^[A-Z]{3}-\d{3}$/.test(project_code) ||
        !['iPhone', 'iPad', 'Mac', 'Vision Pro', 'Other'].includes(product_line) ||
        (notification_preference &&
            !['All notifications', 'Daily digest', 'Weekly digest'].includes(notification_preference))
    ) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const { data, error } = await supabase.from('projects').insert([
        {
            project_code,
            description,
            product_line,
            wants_notifications,
            notification_preference,
        },
    ]).select('project_code');

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
});

export default router;
