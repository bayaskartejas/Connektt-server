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

export const getProfessionalsByLocationAndDate = async (req, res) => {
  try {
    const { location, date } = req.params;    
    
    const professionals = await prisma.professionalProfile.findMany({
      where: {
        location: location,
        nextAvailableDate: {
          lte: new Date(date)
        }
      },
    });

    res.json(professionals);
  } catch (error) {
    console.error('Error fetching professionals by location and date:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProfessionalsByLocationDateAndCategory = async (req, res) => {
  try {
    const { location, date, category } = req.params;

    const professionals = await prisma.professionalProfile.findMany({
      where : {
        location: location,
        category: category,
        nextAvailableDate: { 
          lte: new Date(date) 
        }
      }
    });
    res.json(professionals);
  } catch (error) {
    console.error('Error fetching professionals by location, date, and category:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updatePro = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(`userId: ${userId}`);
    
    const professional = await prisma.professionalProfile.findUnique({
      where: { userId },
    });

    if (!professional) {
      return res.status(404).json({ message: 'Professional profile not found.' });
    }

    const {
      name,
      business,
      category,
      location,
      bio,
      experience,
      specialties,
      availableFor,
      nextAvailableDate
    } = req.body;

    const updatedPro = await prisma.professionalProfile.update({
      where: { userId },
      data: {
        name,
        business,
        category,
        location,
        bio,
        experience,
        specialties,
        availableFor,
        nextAvailableDate: nextAvailableDate ? new Date(nextAvailableDate) : undefined
      },
    });

    res.status(200).json({ message: 'Profile updated successfully.', profile: updatedPro });

  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
