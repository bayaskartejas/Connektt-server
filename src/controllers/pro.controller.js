import prisma from '../config/db.js';

export const getProfessionalsByLocation = async (req, res) => {
    const { location } = req.params;

    try {
        const professionals = await prisma.professionalProfile.findMany({
            where: { location }
        });
        res.json(professionals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const getProfessionalsByLocationAndCategory = async (req, res) => {
    const { location, category } = req.params;

    try {
        const professionals = await prisma.professionalProfile.findMany({
            where: {
                location,
                category
            }
        });
        res.json(professionals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};