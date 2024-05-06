import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";


// GET  /api/properties
export const GET = async (request) => {
    try {
        await connectDB();

        const properties = await Property.find({});

        return new Response(JSON.stringify(properties), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('something went wrong', { status: 500 })
    }
}

export const POST = async (request) => {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);

        if (!session) {
            return new Response('unauthorized', { status: 401 });
        }
        const userId = session.user.id;

        const formData = await request.formData();

        // Access all values from amenties and images
        const amenties = formData.getAll('amenties')
        const images = formData.getAll('images').filter((image) => image.name !== '');


        // create propertyData object for database
        const propertyData = {
            type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            location: {
                street: formData.get('location.street'),
                city: formData.get('location.city'),
                state: formData.get('location.state'),
                zipcode: formData.get('location.zipcode')
            },
            beds: formData.get('beds'),
            baths: formData.get('baths'),
            sqaure_feet: formData.get('square_feet'),
            amenties,
            rates: {
                weekly: formData.get('rates.weekly'),
                monthly: formData.get('rates.monthly'),
                nightly: formData.get('rates.nightly')
            },
            seller_info: {
                name: formData.get('seller_info.name'),
                email: formData.get('seller_info.email'),
                phone: formData.get('seller_info.phone')
            },
            owner: userId,
            images,
        };
        console.log(propertyData);


        return new Response(JSON.stringify({ message: 'Success' }),
            {
                status: 200,
            })
    } catch (error) {
        return new Response('Failed to add property', { status: 500 })
    }
}