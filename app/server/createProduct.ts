




// import { db } from '@/db';

// export const createProduct = async (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; product?: any; }): any; new(): any; }; }; }) => {
//     try {
//       const data = req.body; // Assuming your data is in the request body
  
//       // Validate the incoming data (optional but recommended)
//       const { name, description, price, quantity, categoryId, supplierId } = data;
//       if (!name || !price || !quantity || !categoryId || !supplierId) {
//         return res.status(400).json({ message: 'Missing required fields' });
//       }
  
//       // Create the new product using Prisma
//       const product = await db..create({
//         data: {
//           name,
//           description,
//           price,
//           quantity,
//           categoryId,
//           supplierId,
//         },
//       });
  
//       // Return a successful response with the created product data
//       return res.status(201).json({ product });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error creating product' });
//     }
//   };