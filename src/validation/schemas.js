import { z } from "zod";

export const sendOtpSchema = z.object({
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
});

export const verifyOtpSchema = z.object({
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
  otp: z
    .string()
    .regex(/^\d{6}$/, "OTP must be a 6-digit number"),
  role: z.enum(["CUSTOMER", "PROFESSIONAL", ""]).optional(),
});

const allowedCategories = [
  "Hair Stylist",
  "Makeup Artist",
  "Photographer",
  "Reel Maker",
  "Fashion Designer",
  "Musicians + Bands",
  "Choreographers + Dancers",
  "Need A Wardrobe",
  "Renting A Classy Studio",
  "Professional Equipments",
];

const allowedLocations = [
  "Amravati",
  "Nagpur",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad"
];

export const updateProSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .max(100, "Name cannot exceed 100 characters"),

  business: z
    .string({ required_error: "Business name is required" })
    .max(100, "Business name cannot exceed 100 characters"),

  category: z
    .string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    })
    .refine((val) => allowedCategories.includes(val), {
      message: "Invalid category selected",
    }),

  location: z
    .string({
      required_error: "Location is required",
      invalid_type_error: "Location must be a string",
    })
    .refine((val) => allowedLocations.includes(val), {
      message: "Invalid location selected",
    }),

  bio: z
    .string({ invalid_type_error: "Bio must be text" })
    .max(150, "Bio cannot exceed 150 characters")
    .optional()
    .nullable(),

  experience: z
    .string({ required_error: "Experience is required" })
    .regex(/^\d{1,2}$/, "Experience must be a number between 0 and 99"),

  specialties: z
    .array(
      z.string({ invalid_type_error: "Specialties must be a list of strings" }),
      { required_error: "Specialties are required" }
    ),

  availableFor: z
    .array(
      z.string({ invalid_type_error: "Available For must be a list of strings" }),
      { required_error: "Available For is required" }
    ),

  nextAvailableDate: z
    .string({ required_error: "Next available date is required" })
    .refine(
      (val) => {
        const parsed = Date.parse(val);
        return !isNaN(parsed);
      },
      { message: "Invalid date format" }
    ),
});

export const updateServiceSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .max(50, "Title cannot exceed 50 characters"),

  description: z
    .string({ required_error: "Description is required" })
    .max(150, "Description cannot exceed 150 characters"),

  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be greater than 0"),
});