import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertAdmissionApplicationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos de formulario inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener las solicitudes" 
      });
    }
  });

  // Admission application submission
  app.post("/api/admission", async (req, res) => {
    try {
      const validatedData = insertAdmissionApplicationSchema.parse(req.body);
      const application = await storage.createAdmissionApplication(validatedData);
      res.json({ success: true, data: application });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos de solicitud inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Get admission applications (for admin purposes)
  app.get("/api/admission", async (req, res) => {
    try {
      const applications = await storage.getAdmissionApplications();
      res.json({ success: true, data: applications });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener las solicitudes de admisión" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
