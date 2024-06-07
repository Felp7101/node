import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.post("/usuarios", async (req, res) => {
    await prisma.user.create ({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
            
            

        }
    })
    res.status(201).json({messange: "Usuário criado com sucesso"});
});

app.listen(3000);
