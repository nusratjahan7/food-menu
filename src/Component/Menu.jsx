
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";


const Menu = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;
    console.log(foods);

    return (
        <div  className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 mt-6">
            {
                foods.map(food => <div key={food.id} className="card bg-base-100  shadow-sm">
                    <figure className="p-2 ">
                        <Image src={food.image_link} height={500} width={500} alt={food.dish_name} className="h-64" />
                    </figure>
                    <div className="card-body flex-1">
                        <h2 className="card-title text-xl">{food.dish_name}</h2>
                        <p className="flex items-center gap-1 text-lg text-yellow-500"><FaStar /> <span className="text-white ">{food.rating}</span> </p>
                        <p className="line-clamp-1 text-gray-300">{food.cuisine}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/foodDetails/${food.id}`}>
                            <button className="btn btn-primary">Details</button>
                            </Link>
                           
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Menu;